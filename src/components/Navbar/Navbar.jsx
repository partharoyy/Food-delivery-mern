import { useContext, useState } from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";

function Navbar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token } = useContext(StoreContext);
  return (
    <div className='py-[20px] px-[0px] flex justify-between items-center'>
      <Link to='/'>
        <img src={assets.logo} alt='' className='w-[150px]' />
      </Link>
      <ul className='flex items-center gap-[20px] text-[#49557e] font-[18px] cursor-pointer'>
        <Link to='/' onClick={() => setMenu("home")} className={`${menu === "home" ? "active-navbar-item" : ""}`}>
          home
        </Link>
        <a
          href='#explore-menu'
          onClick={() => setMenu("menu")}
          className={`${menu === "menu" ? "active-navbar-item" : ""}`}
        >
          menu
        </a>
        <a
          href='#app-download'
          onClick={() => setMenu("mobile-app")}
          className={`${menu === "mobile-app" ? "active-navbar-item" : ""}`}
        >
          mobile-app
        </a>
        <a
          href='#footer'
          onClick={() => setMenu("contact-us")}
          className={`${menu === "contact-us" ? "active-navbar-item" : ""}`}
        >
          contact us
        </a>
      </ul>
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon} alt='' />
        <div className='relative'>
          <Link to='/cart'>
            <img src={assets.basket_icon} alt='' />
          </Link>

          <div className={getTotalCartAmount() === 0 ? "" : "cart-dot"}></div>
        </div>
        {!token ? (
          <button
            className='bg-transparent font-[16px] text-[#49557e] border border-red-400 py-[10px] px-[30px] rounded-[50px] hover:bg-[#fff4f2] transition duration-300'
            onClick={() => setShowLogin(true)}
          >
            sign in
          </button>
        ) : (
          <div className='relative group'>
            <img src={assets.profile_icon} alt='' />
            <ul className='absolute right-0 z-[1] hidden hover:bg-[#fff2ef] hover:py-[12px] hover:px-[25px] hover:rounded-[4px] hover:border-[1px] hover:border-red-400 hover:outline-[2px] hover:outline-white group-hover:flex'>
              <li className=''>
                <img src={assets.bag_icon} alt='' />
                <p>Orders</p>
              </li>
              <hr />
              <li className='flex items-center gap-[5px]'>
                <img src={assets.logout_icon} alt='' />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
