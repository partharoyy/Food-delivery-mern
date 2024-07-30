import { assets } from '../../assets/assets';

function Footer() {
  return (
    <div
      id='footer'
      className='text-[#d9d9d9] bg-[#323232] flex items-center flex-col gap-[20px] py-[20px] px-[8vw] pt-[80px] text-sm mt-[100px]'
    >
      <div className='w-full grid grid-cols-[2fr,1fr,1fr] gap-[80px]'>
        <div className='footer-content'>
          <img src={assets.logo} alt='' />
          <p>
            This is some footer text with some content and details about the page. This is some footer text with some
            content and details about the page. This is some footer text with some content and details about the page.
            This is some footer.
          </p>
          <div className='flex'>
            <img src={assets.facebook_icon} alt='' className='w-[40px] mr-[15px]' />
            <img src={assets.twitter_icon} alt='' className='w-[40px] mr-[15px]' />
            <img src={assets.linkedin_icon} alt='' className='w-[40px] mr-[15px]' />
          </div>
        </div>
        <div className='footer-content'>
          <h2 className='text-white text-lg font-medium'>COMPANY</h2>
          <ul>
            <li className='mb-[10px]'>Home</li>
            <li className='mb-[10px]'>About us</li>
            <li className='mb-[10px]'>Policy</li>
            <li className='mb-[10px]'>Privacy policy</li>
          </ul>
        </div>
        <div className='footer-content'>
          <h2 className='text-white text-lg font-medium'>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr className='w-full h-[2px] my-[20px] mx-[0px] bg-gray-500 border-none' />
      <p>Copyright 2024 &copy; Tomato.com - All Right Reserved.</p>
    </div>
  );
}

export default Footer;
