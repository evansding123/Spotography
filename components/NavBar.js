import React, { useState, useEffect } from 'react';
import Link from 'next/link';


const NavBar = () => {
  return(
    <div className = 'navbar'>
      <div>Spotography</div>
      <div className = 'navigation'>
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