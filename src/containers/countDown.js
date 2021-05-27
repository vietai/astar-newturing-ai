import '../css/tachyons.min.css';
import '../css/styles.css';
import Countdown from 'react-countdown';
import { countdown } from '../assets/data.json';
import ApplyButton from '../components/ApplyButton';
// import { register_link as registerLink } from '../assets/data.json';

const HtmlCountDown = ({ d, h, m, s }) => (
  <>
    <div
      id="mobile-count-down"
      class="flex dn-l vh-100 cover white flex-column items-center justify-center bg-center"
      // style={{ backgroundImage: 'url(images/mb_background.png)' }}
      style={{ backgroundImage: 'url(images/bg_nti_ai_bootcamp.png)' }}
    >
      <div id="_mb-group-count-down" class="flex justify-center items-end">
        {/* <!--  days --> */}
        <div
          id="_khoi_vuong_1"
          class="flex flex-column justify-center items-center"
        >
          <div class="f6 fw3 db mb2">DAYS</div>
          <div class="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {d}
          </div>
        </div>

        <span class="f2 fw6 ph2 mb3">:</span>

        {/* <!--  hours --> */}
        <div
          id="_khoi_vuong_1"
          class="flex flex-column justify-center items-center"
        >
          <div class="f6 fw3 db mb2">HOURS</div>
          <div class="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {h}
          </div>
        </div>

        <span class="f2 fw6 ph2 mb3">:</span>

        {/* <!--  minutes --> */}
        <div
          id="_khoi_vuong_1"
          class="flex flex-column justify-center items-center"
        >
          <div class="f6 fw3 db mb2">MINUTES</div>
          <div class="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {m}
          </div>
        </div>

        <span class="f2 fw6 ph2 mb3">:</span>

        {/* <!--  seconds --> */}
        <div
          id="_khoi_vuong_1"
          class="flex flex-column justify-center items-center"
        >
          <div class="f6 fw3 db mb2">SECONDS</div>
          <div class="khoiVuong w3 h3 f25 fw4 flex justify-center items-center">
            {s}
          </div>
        </div>
      </div>

      <p class="tc f2 fw7 center w-90 mt4">
        AI BOOTCAMP <br />
        <span class="i fw4 tracked tangergin"> for </span>
        STARTUPS
      </p>

      <div class="tc pc-info tracked f6 w-90 center lh-title pt4">
        {/* The First AI Bootcamp supported by <b>Global AI Expert Network</b> with
        <br />
        <b>Personalized AI Assessment</b> for{' '}
        <b>Aspiring Startups in Vietnam</b> */}
        Help startups learn how to integrate artificial intelligence and achieve
        <br />
        10-100X hypergrowth
      </div>
    </div>

    {/* <!-- desktop countdown --> */}
    <div
      id="desktop-count-down"
      class="dn dn-m flex-l w-100 bg-black-20 vh-100 items-center justify-around cover"
      style={{ backgroundImage: "url('images/bg_nti_ai_bootcamp.png')" }}
    >
      <div class="flex flex-column">
        <div class="flex flex-column p-title pc-white tracked tc mt4">
          <p class="fw7">AI BOOTCAMP</p>
          <p class="pt3 fw7">
            <span class="fw4 tangergin tracked i">for</span> STARTUPS
          </p>
        </div>
        <div class="tc pc-info tracked f3 lh-copy pt4 w-100 center">
          {/* The First AI Bootcamp supported by <b>Global AI Expert Network</b>{' '}
          with
          <br />
          <b>Personalized AI Assessment</b> for{' '}
          <b>Aspiring Startups in Vietnam</b> */}
          Help startups learn how to integrate artificial intelligence and
          achieve
          <br />
          10-100X hypergrowth
        </div>

        <div class="dn flex-ns pv2 justify-center items-center mt4 pc-white-title">
          <div class="khoiVuong flex justify-center items-center flex-column">
            <p class="ttu">DAYS</p>
            <p class="soTo">{d}</p>
          </div>

          <p class="soTo ph3">:</p>
          <div class="khoiVuong flex justify-center items-center flex-column">
            <p class="ttu">HOURS</p>
            <p class="soTo">{h}</p>
          </div>

          <p class="soTo ph3">:</p>
          <div class="khoiVuong flex justify-center items-center flex-column">
            <p class="ttu">MINUTES</p>
            <p class="soTo">{m}</p>
          </div>

          <p class="soTo ph3">:</p>
          <div class="khoiVuong flex justify-center items-center flex-column">
            <p class="ttu">SECONDS</p>
            <p class="soTo">{s}</p>
          </div>
        </div>

        <div className="dn db-l w-100 tc">
          <ApplyButton />
        </div>
      </div>
    </div>
  </>
);

const MainCountDown = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    // console.log('s = ', seconds);
    if (completed) {
      return <HtmlCountDown d={0} h={0} m={0} s={0} />;
    } else {
      return <HtmlCountDown d={days} h={hours} m={minutes} s={seconds} />;
    }
  };

  return (
    <Countdown
      date={countdown.time_to_start}
      intervalDelay={1000}
      precision={3}
      renderer={renderer}
    />
  );
};
export default MainCountDown;
