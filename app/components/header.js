'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react';
const Header = () => {

   
  // Step 1: Create a state variable to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Step 2: Define CSS classes for both dark and light modes
  const darkModeClasses = 'dark:bg-gray-800 dark:text-white';
  const lightModeClasses = '';

  // Step 3: Toggle the mode when the button is clicked
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };




  return (
    <React.Fragment>


        <nav className=' bg-gray-200'>
            <ul>
                <Link href='/'>Hisam</Link>
                <Link href={'/about'}>About</Link>
                <Link href={'/projects'}>Projects</Link>
                <Link href={'/contact'}>Contact</Link>
            </ul>
        </nav>
    </React.Fragment>
    )
}

export default Header