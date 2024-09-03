import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const { setToken, url } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else if (currentState === "Sign Up") {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
      <form
        className='w-login-popup-width text-[#808080] bg-white flex flex-col gap-[25px] py-[25px] px-[30px] rounded-[8px] text-[14px] animate-fadeIn duration-[0.2s] place-self-center'
        onSubmit={handleLogin}
      >
        <div className='flex justify-between items-center'>
          <h2 className='text-black text-xl font-semibold'>{currentState}</h2>
          <img src={assets.cross_icon} onClick={() => setShowLogin(false)} alt='' className='w-[16px] cursor-pointer' />
        </div>
        <div className='flex flex-col gap-[20px]'>
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              type='text'
              placeholder='Your name'
              required
              className='outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]'
              value={data.name}
              onChange={handleOnchange}
              name='name'
            />
          )}
          <input
            type='email'
            placeholder='Your email'
            required
            className='outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]'
            value={data.email}
            onChange={handleOnchange}
            name='email'
          />
          <input
            type='password'
            placeholder='Password'
            required
            className='outline-none border-[1px] border-[#c9c9c9] p-[10px] rounded-[4px]'
            value={data.password}
            onChange={handleOnchange}
            name='password'
          />
        </div>
        <button className='p-[10px] rounded-[4px] text-white bg-red-400' type='submit'>
          {currentState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className='flex items-start gap-[8px] mt-[-15px]'>
          <input type='checkbox' required className='mt-[5px]' />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign Up")} className='login-signup'>
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")} className='login-signup'>
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
