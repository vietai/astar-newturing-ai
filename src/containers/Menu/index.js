import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { register_link as registerLink } from '../../assets/data.json';

import { menu } from '../../assets/data.json';

const MenuItem = ({ item, handleOnClick }) => {
  return (
    <Link
      to={item.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="pv4 plex-sans ttu pointer"
      onClick={handleOnClick}
    >
      {item.name}
    </Link>
  );
};

const DesktopMenuItem = ({ item }) => {
  return (
    <Link
      to={item.id}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
      className="ph3 dim pointer ttu"
    >
      {item.name}
    </Link>
  );
};

const Menu = () => {
  const [visibleModal, setVisibleModal] = useState(false);

  const _toggleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <>
      <div
        id="mobile-menu"
        className="_mobile-menu flex dn-l w-100 shadow-2 ph4 pv2 bg-white justify-between items-center fixed top-0 z-99"
      >
        <Link
          to={menu.top.id}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="pointer"
        >
          <img src="images/logo_nti.png" alt="" className="w22" />
        </Link>

        <img
          src="images/svg_bars.svg"
          alt=""
          className="pointer w2"
          onClick={_toggleModal}
        />
      </div>

      <div
        id="_modal_mobile_menu"
        style={{ transition: 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)' }}
        className={`
        ${visibleModal ? 'flex ' : 'dn '}
        dn-l vh-100 w-100 pc-white bg-pc-red  flex-column justify fixed top-0 z-4 `}
      >
        <div className="w-100 flex justify-between pa4 items-center">
          <img src="images/logo_nti_white.png" alt="" className="w22" />
          <div
            className="_btn-close white pointer f4 fw6"
            onClick={_toggleModal}
          >
            X
          </div>
        </div>

        <div className="w-100 flex flex-column self-stretch pa3 mv3 items-center">
          <MenuItem item={menu.transformation} handleOnClick={_toggleModal} />
          <MenuItem item={menu.why} handleOnClick={_toggleModal} />
          <MenuItem item={menu.how} handleOnClick={_toggleModal} />
          <MenuItem item={menu.mentorship} handleOnClick={_toggleModal} />
          <MenuItem item={menu.program} handleOnClick={_toggleModal} />
          {/* <MenuItem item={menu.qa} handleOnClick={_toggleModal} /> */}
        </div>
      </div>

      <div
        id="desktop-menu"
        className="dn flex-l w-100 bg-white pv2 shadow-2 fixed top-0 z-999"
        // fixed top-0 z-4
      >
        <div className="w-80 center flex justify-between items-center ph3">
          <Link
            to={menu.top.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="pointer"
          >
            <img src="images/logo_nti.png" alt="" className="w25" />
          </Link>

          <div className="flex items-center">
            <ul className="flex list fw3 sans-serif pc-dark-gray">
              <DesktopMenuItem item={menu.transformation} />
              <DesktopMenuItem item={menu.why} />
              <DesktopMenuItem item={menu.how} />
              <DesktopMenuItem item={menu.mentorship} />
              <DesktopMenuItem item={menu.program} />
              {/* <DesktopMenuItem item={menu.qa} /> */}
            </ul>
            <div
              className="btnApply ml4 ph4 pv3 br3 fw6 f5 pointer dim"
              onClick={() => window.open(registerLink, '_blank')}
            >
              APPLY NOW
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
