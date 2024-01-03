import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Registration/Registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        dateofbirth: '',
        password: '',
        confirmPassword: '',
        usertype: 'user', // Default value set to 'user'
    });

    const [passwordMatch, setPasswordMatch] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));

        if (name === 'confirmPassword') {
            setPasswordMatch(value === formData.password);
        }
    };



    const handleRegistration = async () => {
        try {
            const emailCheckResponse = await fetch('https://localhost:44331/api/UsersAPI/CheckEmailExists', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: formData.email }),
            });

            if (emailCheckResponse.ok) {
                const emailCheckResult = await emailCheckResponse.json();

                if (emailCheckResult && emailCheckResult.Result === 'EmailExists') {
                    toast.error('Email already exists. Please use a different email.');
                } else {
                    const response = await fetch('https://localhost:44331/api/UsersAPI/AddUser', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ ...formData }),
                    });

                    if (response.ok) {
                        toast.success('Registration successful');
                        setFormData({
                            firstname: '',
                            lastname: '',
                            username: '',
                            email: '',
                            dateofbirth: '',
                            password: '',
                            confirmPassword: '',
                        });
                    } else {
                        const errorMessage = await response.text();
                        toast.error(`Registration failed: ${errorMessage}`);
                    }
                }
            } else {
                toast.error('Error checking email existence.');
            }
        } catch (error) {
            console.error('Error during registration:', error);
            toast.error('An error occurred during registration');
        } finally {
            setLoading(false);
        }
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

        if (!passwordRegex.test(formData.password)) {
            toast.error('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
            setLoading(false);
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            toast.error('Password and Confirm Password do not match.');
            setLoading(false);
            return;
        }

        handleRegistration();
    };


    return (
        <div className="reg-container">
            <form className="reg-form" onSubmit={handleSubmit}>
                {/* Input fields for registration form */}
                <h1>Register</h1>
                <div className="items-container">
                    <div className="input-col-one">
                        <div className="inputbox">
                            <label htmlFor="firstname">FirstName</label>
                            <input type="text" name="firstname" id="firstname" onChange={handleChange} value={formData.firstname} required />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="lastname">LastName</label>
                            <input type="text" name="lastname" id="lastname" onChange={handleChange} value={formData.lastname} required />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="username">Username:</label>
                            <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} required />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} required />
                        </div>
                    </div>
                    <div className="input-col-two">
                        <div className="inputbox">
                            <label htmlFor="dateofbirth">Date Of Birth</label>
                            <input type="date" name="dateofbirth" id="dateofbirth" onChange={handleChange} value={formData.dateofbirth} required />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="usertype">User Type</label>
                            <select name="usertype" id="usertype" onChange={handleChange} value={formData.usertype} required>
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="inputbox">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} required />
                        </div>
                        <div className="inputbox">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input type="password" name="confirmPassword" id="confirmPassword" onChange={handleChange} value={formData.confirmPassword} required />
                            {!passwordMatch && <p className="password-mismatch">Password and Confirm Password do not match.</p>}
                        </div>
                        <div>
                            <button type="submit">
                                Submit
                            </button>
                        </div>
                        <div className="inputbox">
                            <a href="/login">Login?</a>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Registration;
