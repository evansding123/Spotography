import React, { useState, useEffect } from 'react';


const SearchBar = () => {
  return(
    <div className = 'banner'>
      <form className = 'searchbar'>
        <input type="text" id="fname" name="fname" placeholder ='Find a spot'></input>
      </form>
    </div>

  )
}

export default SearchBar;