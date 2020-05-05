import React from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__add'><button>+</button></div>
      <div className='footer__message'>
        <input type='text' placeholder='Введите ваше сообщение...'/>
        <button>Отправить</button>
      </div>
    </footer>
  );
}

export default Footer;