import React from 'react'

function MenuBar() {
  return (
    <>
      <header>
        <nav>
          <div id="header_icon">
            <img src="/Tilder_icon.png" alt="tilder_icon_header" aria-label='Tilder' />
          </div>
          <div className="navigation">
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>File</span>
              </div>
              <div className="dropdown-content">
                <a href="#">New File</a><br />
              </div>
            </div>
            <div className="dropdown">
              <div className="wrapper">
                <span className='dropdown-trigger-btn'>Edit</span>
              </div>
              <div className="dropdown-content">
                <a href="/">New File</a><br />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default MenuBar;