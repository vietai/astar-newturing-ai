import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { vision } from '../../assets/data.json';

const Vision = ({ id }) => (
  <div id={id} className="flex flex-column w-100 pt3 tc">
    {/* <p className="pc-green f4 ttu tracked-mega fw7 mt4 mt5-l">VISION</p> */}

    <p className="w-80 w-60-l center f3 f2-l fw7 pc-red ttu tracked-l mt4 mt5-l ph3">
      {vision.title}
    </p>

    <div className="w-90 w-80-l flex flex-column flex-row-l center mt3 mt4-l">
      <div className="w-100 w-third-l flex flex-column items-center ph4 justify-start mh2-l">
        <div className="flex flex-column items-center">
          <img src="images/vision_1.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_1.title }}
          />
        </div>
        {/* <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy tc"> */}
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_1.content}
        </p>
      </div>

      <div className="w-100 w-third-l flex flex-column items-center ph4 justify-start mh2-l">
        <div className="flex flex-column items-center">
          <img src="images/vision_2.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_2.title }}
          />
        </div>

        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_2.content}
        </p>
      </div>

      <div className="w-100 w-third-l flex flex-column items-center ph4 justify-start mh2-l">
        <div className="flex flex-column items-center">
          <img src="images/vision_3.svg" alt="" className="pt4" />
          <p
            className="pt4 f4 fw7 pc-red"
            dangerouslySetInnerHTML={{ __html: vision.col_3.title }}
          />
        </div>
        <p className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc">
          {vision.col_3.content}
        </p>
      </div>
    </div>
  </div>
);

export default Vision;
