// import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import Transactions from "./components/transactions";

// Axios API Configuration
const API_URL = 'http://localhost:8000/api/v1/transactions?user_id=1'
function getAPIData(){
  return axios.get(API_URL).then((response) => response.data)
}

function App() {

  const [transactions,setTransactions] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setTransactions(items);
      }
    });
    return () => (mounted = false);
  }, []);

return (
  <div className="App">
    <h1>Transactions</h1>
    <Transactions transactions = {transactions} />
  </div>
  );
}

export default App;
