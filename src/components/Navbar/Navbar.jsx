import { useState } from 'react';
import { assets } from '../../assets/assets.js';
import { Link } from 'react-router-dom';

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState('home');
  return (
    <div className='py-[20px] px-[0px] flex justify-between items-center'>
      <img src={assets.logo} alt='' className='w-[150px]' />
      <ul className='flex items-center gap-[20px] text-[#49557e] font-[18px] cursor-pointer'>
        <Link to='/' onClick={() => setMenu('home')} className={`${menu === 'home' ? 'active-navbar-item' : ''}`}>
          home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => setMenu('menu')}
          className={`${menu === 'menu' ? 'active-navbar-item' : ''}`}
        >
          menu
        </a>
        <a
          href='#app-download'
          onClick={() => setMenu('mobile-app')}
          className={`${menu === 'mobile-app' ? 'active-navbar-item' : ''}`}
        >
          mobile-app
        </a>
        <a
          href='#footer'
          onClick={() => setMenu('contact-us')}
          className={`${menu === 'contact-us' ? 'active-navbar-item' : ''}`}
        >
          contact us
        </a>
      </ul>
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt='' />
        <div className='relative'>
          <img src={assets.basket_icon} alt='' />
          <div className='absolute min-w-[10px] min-h-[10px] bg-red-400 rounded-[50%] top-[-8px] right-[-8px]'></div>
        </div>
        <button
          className='bg-transparent font-[16px] text-[#49557e] border border-red-400 py-[10px] px-[30px] rounded-[50px] hover:bg-[#fff4f2] transition duration-300'
          onClick={() => setShowLogin(true)}
        >
          sign in
        </button>
      </div>
    </div>
  );
}

export default Navbar;
