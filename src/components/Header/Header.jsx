function Header() {
  return (
    <div className='h-[34vw] my-[30px] mx-auto bg-header-image bg-contain relative bg-no-repeat'>
      <div className='absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn'>
        <h2 className='font-medium text-white text-header-title-font-size'>Order your favourite food here</h2>
        <p className='text-white font-[1vw]'>
          Choose from a diverse menu featuring a delectable array of Indian home dishes crafted with the finest
          ingredients and culinary expertise. Our mission it to satisfy your taste buds and elevate your dining
          experience, one delicious meat at a time.
        </p>
        <button className='text-[#747474] font-medium border-none py-[1vw] px-[2.3vw] bg-white rounded-[50px] text-header-button-font-size'>
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
