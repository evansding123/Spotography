import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const NavBar = () => {
  return(
    <div>
      <h2>Spotography</h2>
      <div className = 'navbar'>
        <Link href = '/reviews'>
          <a>Reviews</a>
        </Link>
        <Link href = '/saved'>
          <a>Saved</a>
        </Link>
        <Link href = '/alerts'>
          <a>Alerts</a>
        </Link>
        <Link href = '/signin'>
          <a>Sign In</a>
        </Link>
      </div>
    </div>
  )
}

export default NavBar;