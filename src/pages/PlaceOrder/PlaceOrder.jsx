import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

function PlaceOrder() {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className='flex items-start justify-between gap-[50px] mt-[100px]'>
      <div className='w-full max-w-place-order'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='multi-fields'>
          <input type='text' placeholder='First name' className='place-order-input' />
          <input type='text' placeholder='Last name' className='place-order-input' />
        </div>

        <input type='email' placeholder='Email address' className='place-order-input' />
        <input type='text' placeholder='Street' className='place-order-input' />
        <div className='multi-fields'>
          <input type='text' placeholder='City' className='place-order-input' />
          <input type='text' placeholder='State' className='place-order-input' />
        </div>
        <div className='multi-fields'>
          <input type='text' placeholder='Zip code' className='place-order-input' />
          <input type='text' placeholder='Country' className='place-order-input' />
        </div>
        <input type='text' placeholder='Phone' className='place-order-input' />
      </div>
      <div className='w-full max-w-place-order-right-side'>
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
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='my-[10px] mx-0' />
            <div className='cart-total-details'>
              <p className='text-black font-semibold'>Total</p>
              <p className='text-black font-semibold'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
          </div>
          <button className='border-none text-white bg-red-400 w-cart-button py-[12px] px-0 rounded-[4px] cursor-pointer mt-[30px]'>
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
