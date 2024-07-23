import React from 'react';
import { menu_list } from '../../assets/assets';

function ExploreMenu({ category, setCategory }) {
  return (
    <div id='explore-menu' className='flex flex-col gap-[20px]'>
      <h1 className='text-[#262626] font-medium text-2xl'>Explore our menu</h1>
      <p className='max-w-[60%] text-[#808080]'>
        Choose from a diverse menu featuring a delectable array of Indian home dishes crafted with the finest
        ingredients and culinary expertise. Our mission it to satisfy your taste buds and elevate your dining
        experience, one delicious meat at a time.
      </p>
      <div className='flex justify-between items-center gap-[30px] text-center my-[20px] mx-[0px] no-scrollbar'>
        {menu_list.map((item, index) => {
          return (
            <div key={index} onClick={() => setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))}>
              <img
                src={item.menu_image}
                alt=''
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s] ${
                  category === item.menu_name ? 'active-explore-menu-item' : ''
                }`}
              />
              <p className='mt-[10px] text-[#747474] text-explore-p-font-size cursor-pointer'>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr className='my-[10px] mx-[0px] h-[2px] bg-[#e2e2e2] border-none' />
    </div>
  );
}

export default ExploreMenu;
