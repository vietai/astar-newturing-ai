import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { register_link as registerLink } from '../../assets/data.json';

const Apply = () => {
  return (
    <div className="dn db-l center w-60 bg-pc-red br3 ph4 pv6 tc pc-white mt5">
      <p className="f2 ttu tracked fw6">APPLY FOR THE FIRST BATCH</p>
      <p className="f6 tracked fw3 mt4">
        Want to be come the next gen AI companies? Nominate your company.
      </p>
      <div
        className="dib bg-pc-green ph5 pv3 br3 white fw5 f6 pointer dim mt5"
        onClick={() => window.open(registerLink, '_blank')}
      >
        APPLY
      </div>
    </div>
  );
};
export default Apply;
