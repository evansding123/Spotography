import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'



const SearchBar = () => {

  const [query, setQuery] = useState('');

  const router = useRouter();

  const handleSubmit = () => {
    event.preventDefault();
    router.push({
      pathname: '/searchResults',
      query: {search: query},
    })
  }

  const handleChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  }


  return(
    <div className = 'banner' onSubmit = {handleSubmit}>
      <form className = 'searchbar'>
        <input
          type="text"
          id="fname"
          name="fname"
          onChange = {handleChange}
          value = {query}
          placeholder ='Find a spot'>
        </input>
      </form>
    </div>

  )
}

export default SearchBar;