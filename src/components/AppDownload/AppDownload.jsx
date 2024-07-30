import { assets } from '../../assets/assets';

function AppDownload() {
  return (
    <div id='app-download' className='m-auto mt-[100px] text-app-download-font-size font-medium text-center'>
      <p>
        For Better Experience Download <br /> Tomato App
      </p>
      <div className='flex justify-center mt-[40px] gap-app-download-icons-gap'>
        <img
          src={assets.play_store}
          alt=''
          className='w-app-download-icons-width max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-[1.05]'
        />
        <img
          src={assets.app_store}
          alt=''
          className='w-app-download-icons-width max-w-[180px] transition-transform duration-500 cursor-pointer hover:scale-[1.05]'
        />
      </div>
    </div>
  );
}

export default AppDownload;
