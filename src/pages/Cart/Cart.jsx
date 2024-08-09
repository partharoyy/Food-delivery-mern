import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <div className='mt-[100px]'>
      <div>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id}>
                <div className='cart-item-title cart-items-item'>
                  <img src={item.image} alt={item.image} className='w-[50px]' />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className='cursor-pointer' onClick={() => removeFromCart(item._id)}>
                    x
                  </p>
                </div>
                <hr className='h-[1px] border-none bg-[#e2e2e2]' />
              </div>
            );
          }
        })}
      </div>
      <div className='mt-[80px] flex justify-between gap-cart-gap'>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h2 className='text-black text-2xl font-semibold'>Cart Totals</h2>
          <div>
            <div className='cart-total-details'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='cart-total-details'>
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='cart-total-details'>
              <p className='text-black font-semibold'>Total</p>
              <p className='text-black font-semibold'>${getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className='border-none text-white bg-red-400 w-cart-button py-[12px] px-0 rounded-[4px] cursor-pointer'>
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className='flex-1 '>
          <div>
            <p className='text-[#555]'>If you have a promocode, Enter it here</p>
            <div className='mt-[10px] flex justify-between items-center bg-[#eaeaea] rounded-[4px]'>
              <input
                type='text'
                placeholder='promo code'
                className='bg-transparent border-none ourline-none pl-[10px]'
              />
              <button className='w-cart-promo-button py-[12px] px-[5px] bg-black border-none text-white rounded-[4px]'>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
