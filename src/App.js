import React, { useState } from 'react';
import JsonData from './MOCK_DATA.json';
import ReactPaginate from 'react-paginate';
import './App.css';

function App() {
  const [users, setUsers] = useState(JsonData.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);
  
  const usersPerPage = 5;
  const pageVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pageVisited , pageVisited  + usersPerPage)
    .map((user) => {
      return (
        <div className="userInfo">
          <h3>{user.firstName}</h3>
          <h3>{user.lastName}</h3>
          <h3>{user.email}</h3>
        </div>
      );
    });

    const pageCount = Math.ceil(users.length / usersPerPage);
    
    const changePage = ({ selected }) => {
      setPageNumber(selected);
    };

  return (
    <div className="App">
      {displayUsers}
      <ReactPaginate 
        previousLabel={"이전 페이지"}
        nextLabel={"다음 페이지"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"preBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default App;
