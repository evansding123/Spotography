import React, { useState, useEffect } from 'react';


const SearchBar = () => {
  return(

    <form className = 'searchbar'>
      <input type="text" id="fname" name="fname" placeholder ='Find a spot'></input>
    </form>

  )
}

export default SearchBar;