// src/components/PeopleList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PeopleList = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/?page=${currentPage}`);
        setPeople(response.data.results);
        setTotalPages(Math.ceil(response.data.count / 10));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h3>Star Wars People</h3>
      <ul>
        {people.map((person) => (
          <ol key={person.name}>{person.name}</ol>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeopleList;

