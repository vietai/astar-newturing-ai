import '../css/tachyons.min.css';
import '../css/styles.css';
import { register_link as registerLink } from '../assets/data.json';

const Footers = () => (
  <>
    <div className="w-100 center pt3 pb4 ph4 flex justify-between bg-pc-red pc-white mb4 mb0-l mt3 items-start">
      <div className="flex items-center justify-center">
        <img src="images/logo_nti_white.png" className="w25" alt="" />

        <div className="flex flex-column  items-center ml1">
          <p className="near-white" style={{ fontSize: '5px' }}>
            Co-organizer
          </p>
          <img src="images/vietai_logo_co.png" alt="" className="w22" />
        </div>
      </div>

      <div className="lh-copy  flex flex-column justify-between items-end">
        <div className="">
          {/* <img src="images/instagram.svg" alt="" className="ml4" />
          <img src="images/twitter.svg" alt="" className="ml4" /> */}
          <a
            href={'https://www.facebook.com/vietaipublic'}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <img src="images/fb.svg" alt="" className="ml3" />
          </a>
          <a
            href={'https://www.facebook.com/newturing'}
            target="_blank"
            rel="noopener noreferrer"
            className="white pointer"
          >
            <img src="images/fb.svg" alt="" className="ml3" />
          </a>
        </div>
        <p className="copyright mt3 pc-pink-white">Copyright 2021 @ NTI</p>
      </div>
    </div>
    <div
      className="db dn-l w-100 btnApply tc  fw7 ttu f5 pv3 tracked pointer fixed bottom-0 z-9999"
      onClick={() => window.open(registerLink, '_blank')}
    >
      APPLY NOW
    </div>
  </>
);
export default Footers;
