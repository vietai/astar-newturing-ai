import '../css/tachyons.min.css';
import '../css/styles.css';

const Footers = () => (
  <>
    <div className="w-100 center pt3 pb4 ph4 flex justify-between bg-pc-red pc-white mb4 mb0-l mt3">
      <img src="images/logo_white.svg" className="pr4 w25" alt="" />
      <div className="lh-copy h-100 flex flex-column justify-between items-end">
        <div className="">
          <img src="images/instagram.svg" alt="" className="ml4" />
          <img src="images/twitter.svg" alt="" className="ml4" />
          <img src="images/fb.svg" alt="" className="ml4" />
        </div>
        <p className="copyright dn db-l mt3">Copyright 2010 @ VietAI</p>
      </div>
    </div>
    <div className="db dn-l w-100 tc bg-pc-green pc-white fw6 ttu f5 pv3 tracked pointer fixed bottom-0 z-5">
      APPLY NOW
    </div>
  </>
);
export default Footers;
