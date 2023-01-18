import React from 'react'

const TransactionForm = () => {
  return (
    <form>
        <label>Date</label>
        <input type="date" />
        <label>Description</label>
        <input type="text"/>
        <label>Category</label>
        <input type="text"/>
        <label>Amount</label>
        <input type="number"/>
        <button type='submit'>Add to Table</button>
        

    </form>
  )
}

export default TransactionForm