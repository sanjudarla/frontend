import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Authors.css";

const Authors = ({ authors, user, onLogout }) => {
  return (
    <>
      <NavBar user={user} onLogout={onLogout} />
      <div className="authors-container">
        <h1>Authors Information</h1>
        <table>
    <thead>
        <tr>
            <th>Name of the Authors</th>
            <th>Books They Have Written</th>
            <th>Streak of the author</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Author 1</td>
            <td>Book 1, Book 2</td>
            <td>90</td>
        </tr>
        <tr>
            <td>Author 2</td>
            <td>Book 3, Book 4</td>
            <td>90</td>
        </tr>
     
    </tbody>
</table>

      </div>
    </>
  );
};

export default Authors;
