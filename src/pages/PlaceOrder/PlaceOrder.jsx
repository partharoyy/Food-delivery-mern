import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  return (
    <form className='flex items-start justify-between gap-[50px] mt-[100px]' onSubmit={placeOrder}>
      <div className='w-full max-w-place-order'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='First name'
            className='place-order-input'
            name='firstName'
            onChange={handleOnChange}
            value={data.firstName}
            required
          />
          <input
            type='text'
            placeholder='Last name'
            className='place-order-input'
            name='lastName'
            onChange={handleOnChange}
            value={data.lastName}
            required
          />
        </div>

        <input
          type='email'
          placeholder='Email address'
          className='place-order-input'
          name='email'
          onChange={handleOnChange}
          value={data.email}
          required
        />
        <input
          type='text'
          placeholder='Street'
          className='place-order-input'
          name='street'
          onChange={handleOnChange}
          value={data.street}
          required
        />
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='City'
            className='place-order-input'
            name='city'
            onChange={handleOnChange}
            value={data.city}
            required
          />
          <input
            type='text'
            placeholder='State'
            className='place-order-input'
            name='state'
            onChange={handleOnChange}
            value={data.state}
            required
          />
        </div>
        <div className='multi-fields'>
          <input
            type='text'
            placeholder='Zip code'
            className='place-order-input'
            name='zipcode'
            onChange={handleOnChange}
            value={data.zipcode}
            required
          />
          <input
            type='text'
            placeholder='Country'
            className='place-order-input'
            name='country'
            onChange={handleOnChange}
            value={data.country}
            required
          />
        </div>
        <input
          type='text'
          placeholder='Phone'
          className='place-order-input'
          name='phone'
          onChange={handleOnChange}
          value={data.phone}
          required
        />
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
          <button
            className='border-none text-white bg-red-400 w-cart-button py-[12px] px-0 rounded-[4px] cursor-pointer mt-[30px]'
            type='submit'
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
