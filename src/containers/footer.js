import '../css/tachyons.min.css';
import '../css/styles.css';
import { register_link as registerLink } from '../assets/data.json';

const Footers = () => (
  <>
    <div className="w-100 center pt3 pb4 ph4 flex justify-between bg-pc-red pc-white mb4 mb0-l mt3 items-start">
      <img src="images/logo_nti_white.png" className="pr4 w25" alt="" />
      <div className="lh-copy  flex flex-column justify-between items-end">
        <div className="">
          <img src="images/instagram.svg" alt="" className="ml4" />
          <img src="images/twitter.svg" alt="" className="ml4" />
          <img src="images/fb.svg" alt="" className="ml4" />
        </div>
        <p className="copyright mt3 pc-pink-white">Copyright 2021 @ NTI</p>
      </div>
    </div>
    <div
      className="db dn-l w-100 btnApply tc  fw6 ttu f5 pv3 tracked pointer fixed bottom-0 z-5"
      onClick={() => window.open(registerLink, '_blank')}
    >
      APPLY NOW
    </div>
  </>
);
export default Footers;
