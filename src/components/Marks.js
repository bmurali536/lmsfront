import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Marks = () => {
  const [marks, setMarks] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/marks/')
      .then((response) => {
        setMarks(response.data);
      })
      .catch((error) => {
        console.error('Error fetching marks:', error);
      });
  }, []);

  return (
    <div className="marks-container">
      <h2>Marks Sheet</h2>
      <ul>
        {marks.map((subject, index) => (
          <li key={index}>
            {subject.name}: {subject.marks}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marks;
