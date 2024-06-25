import React, { useEffect, useState } from 'react'
import themes from './themes';

const {setTheme} = themes

function Toggle() {
    const [togClass, setTogClass] = useState('dark')
    const theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light')
            setTogClass('light')
        } else {
            setTheme('theme-dark')
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])

  return (
    <div className='tog-container'> 
        {
            togClass === 'light' ?
        <input type="checkbox" id="toggle" className='nav-links-mobile checkbox' onClick={handleOnClick} checked/> :
        <input type="checkbox" id="toggle" className='nav-links-mobile checkbox' onClick={handleOnClick} />
        } 
        {    
            togClass === 'light' ?
        <label htmlFor="toggle">
        <span className="toggle-label"><i className="fa-solid fa-toggle-on"></i> <i className="fa-solid fa-sun"></i></span>
      </label> :
      <label htmlFor="toggle">
      <span className="toggle-label"><i className="fa-solid fa-toggle-off"></i> <i className="fa-solid fa-moon"></i></span>
    </label> 
     }
    </div>
  )
}

export default Toggle
