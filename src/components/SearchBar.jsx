import React, {useState} from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const handleChange=(event)=>{
    setSearchTerm(event.target.value)
  }

  console.log(searchTerm);
  return (
    <div>
        <label>Search</label>
        <input className='searchbar' placeholder='search here'onChange={handleChange}/>
        <button>Search</button>

    </div>
  )
}

export default SearchBar