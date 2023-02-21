import React, { useState, useEffect } from 'react';
import Table from './Table';

const Transaction = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  useEffect(() => {
    fetch('https://example.com/api', {headers: {'Authorization-Token': sessionStorage.token },
  })
      .then(response => response.json())
      .then(data => {
        setData(data.Transaction);
        setFilteredData(data.Transaction);
        setSortedData(data.Transaction);
      })
      .catch(err => console.log(err));
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const results = data.filter((row) =>
      row.name.toLowerCase().includes(keyword) ||
      row.email.toLowerCase().includes(keyword) ||
      row.city.toLowerCase().includes(keyword)
    );
    setFilteredData(results);
  };

  const handleSort = (key) => {
    const copy = [...filteredData];
    copy.sort((a, b) => a[key].localeCompare(b[key]));
    setSortedData(copy);
  };

  const handlePaginationChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleSearch} />
      <Table data={currentItems} onSort={handleSort} />
      <Pagination
        pageCount={Math.ceil(sortedData.length / itemsPerPage)}
        onPageChange={handlePaginationChange}
      />
    </div>
  );
};

export default Transaction;
