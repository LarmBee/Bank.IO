import React , {useState}from 'react'

const TransactionForm = () => {
  const [formData, setFormData]=useState({
    date:'',
    description:'',
    category:'',
    amount:''
  })
  
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(' http://localhost:8001/transcations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  console.log(formData);
  return (
    <form onSubmit={handleSubmit}>
        <label>Date</label>
        <input type="date"name="date"  onChange={handleChange} value={formData.date}/>
        <label>Description</label>
        <input type="text"name="description" onChange={handleChange} value={formData.description}/>
        <label>Category</label>
        <input type="text"name="category" onChange={handleChange} value={formData.category}/>
        <label>Amount</label>
        <input type="number"name="amount" onChange={handleChange} value={formData.amount}/>
        <button type='submit' onSubmit={handleSubmit}>Add to Table</button>
        

    </form>
  )
}

export default TransactionForm