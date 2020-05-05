import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__avatar'>
        <img src="" alt='User Avatar'/>
      </div>
      <div className='header__user'>
        <div className='header__user-name'>{}</div>
        <div className='header__user-status'>{}</div>
      </div>
    </header>
  );
}

export default Header;