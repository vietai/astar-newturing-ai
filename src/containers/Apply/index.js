import '../../css/tachyons.min.css';
import '../../css/styles.css';
import './styles.css';
import { register_link as registerLink } from '../../assets/data.json';
// import ApplyButton from '../../components/ApplyButton';

const Apply = () => {
  return (
    <div className="db center w-100 w-60-l bg-pc-red br0 br3-l ph3 ph4-l pv5 pv6-l tc pc-white mt0 mt5-l">
      <p className="f2 ttu tracked fw7">APPLY FOR THE FIRST BATCH</p>
      <p className="f6 tracked fw3 mt4">
        Want to become the next gen AI companies? Nominate your company.
      </p>
      {/* <ApplyButton/> */}
      <div
        className="btnApply dib  ph5 pv3 br3  fw7 f5 pointer dim mt5"
        onClick={() => window.open(registerLink, '_blank')}
      >
        APPLY NOW
      </div>
    </div>
  );
};
export default Apply;
