import '../css/tachyons.min.css';
import '../css/styles.css';

const Menu = () => (
  <>
    <div
      id="mobile-menu"
      className="_mobile-menu flex dn-l w-100 shadow-2 ph4 pv2 bg-white justify-between items-center fixed top-0 z-3"
    >
      <img src="images/logo_red.svg" alt="" className="w22" />
      <img src="images/svg_bars.svg" alt="" className="pointer w2" />
    </div>

    <div
      id="desktop-menu"
      className="dn flex-l w-100 bg-white pv2 shadow-2 z-5 fixed top-0"
    >
      <div className="w-70 center flex justify-between items-center ph5">
        <img src="images/logo_red.svg" alt="" className="w25" />
        <div className="flex items-center">
          <ul className="flex list fw3 sans-serif pc-dark-gray">
            <li className="ph4 dim pointer ttu">INTRODUCE</li>
            <li className="ph4 dim pointer ttu">CURRICULUM</li>
            <li className="ph4 dim pointer ttu">MENTORSHIP</li>
            <li className="ph4 dim pointer ttu">PROCESS</li>
            <li className="ph4 dim pointer ttu">Q&A</li>
          </ul>
          <div className="bg-pc-green ml4 ph4 pv3 br3 white fw4 f5 pointer dim">
            APPLY NOW
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Menu;
