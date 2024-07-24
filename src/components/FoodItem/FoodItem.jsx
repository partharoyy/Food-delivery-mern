import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='w-[100%] shadow-md animate-fadeIn'>
      <div className='relative '>
        <img src={image} alt='' className='w-[100%] rounded-tl-xl rounded-tr-xl' />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt=''
            onClick={() => addToCart(id)}
            className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]'
          />
        ) : (
          <div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
            <img src={assets.remove_icon_red} alt='' onClick={() => removeFromCart(id)} className='w-[30px]' />
            <p>{cartItems[id]}</p>
            <img src={assets.add_icon_green} alt='' onClick={() => addToCart(id)} className='w-[30px]' />
          </div>
        )}
      </div>
      <div className='p-[20px]'>
        <div className='flex justify-between items-center mb-[10px]'>
          <p className='text-[20px] font-medium'>{name}</p>
          <img src={assets.rating_starts} alt='' className='w-[70px]' />
        </div>
        <p className='text-[#676767] text-[12px]'>{description}</p>
        <p className='text-red-400 text-[22px] font-medium my-[10px] mx-[0px]'>${price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
