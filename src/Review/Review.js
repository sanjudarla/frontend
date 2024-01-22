import React, { useState } from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Reviews = ({ user, onLogout }) => {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (event) => {
    event.preventDefault();
    const review = event.target.elements.review.value;
    const book = event.target.elements.book.value;
    setReviews([...reviews, { book, review }]);
    event.target.reset();
  };

  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="review-container">
        <h1>Reviews</h1>
        <form onSubmit={handleReviewSubmit}>
          <label htmlFor="book">Book:</label>
          <input type="text" id="book" name="book" required />
          <label htmlFor="review">Review:</label>
          <textarea id="review" name="review" required></textarea>
          <button type="submit">Submit</button>
        </form>
        <table>
          <thead>
            <tr>
              <th>Book</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr key={index}>
                <td>{review.book}</td>
                <td>{review.review}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Reviews;
