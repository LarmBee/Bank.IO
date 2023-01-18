import React, {useState, useEffect} from 'react'
import "./transaction.css";


const TransactionTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:8001/transcations');
            const json = await response.json();
            setData(json);
          } 
        
        
        fetchData();
        console.log(data);
      }, []);

     
  return (
    <>
    <table className='maintable'>
        <thead>
            <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
            </tr>
            <tr>
                {data.map(item=>(
                    <tr>
                    <td>{item.date}</td>
                    <td>{item.description}</td>
                    <td>{item.category}</td>
                    <td>{item.amount}</td>
                    </tr>
                ))}
            </tr>
        </thead>
    </table>
    </>
  )
}

export default TransactionTable