import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { vision } from '../../assets/data.json';

const Vision = ({ id }) => (
  <div id={id} className="flex flex-column w-100 pt3 tc">
    <p className="pc-green f4 ttu tracked-mega fw6 mt4 mt5-l">VISION</p>

    <p className="w-90 w-60-l center f4 f2-l fw6 pc-red ttu tracked-l mt4 mt5-l ph3">
      {vision.title}
    </p>

    {/* <!-- phan 3 cot --> */}
    <div className="w-90 w-60-l flex flex-column flex-row-l center mt3 mt4-l">
      <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div className="flex flex-column items-center">
          <img src="images/svg_earth.svg" alt="" className="pt4" />
          <p className="pt4 f4 fw6 pc-red">{vision.col_1.title}</p>
        </div>
        <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {vision.col_1.content}
        </p>
      </div>

      <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div className="flex flex-column items-center">
          <img src="images/svg_pc.svg" alt="" className="pt4" />
          <p className="pt4 f4 fw6 pc-red">{vision.col_1.title} </p>
        </div>

        <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {vision.col_2.content}
        </p>
      </div>

      <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
        <div className="flex flex-column items-center">
          <img src="images/svg_notebook.svg" alt="" className="pt4" />
          <p className="pt4 f4 fw6 pc-red">{vision.col_3.title}</p>
        </div>
        <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
          {vision.col_3.content}
        </p>
      </div>
    </div>
  </div>
);
export default Vision;
