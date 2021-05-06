import '../css/tachyons.min.css';
import '../css/styles.css';

const Vision = () => (
  <>
    <div id="introduce" className="flex flex-column w-100 pt3 tc">
      <p className="pc-green f4 ttu tracked-mega fw6 mt4 mt5-l">VISION</p>

      <p className="w-90 w-60-l center f4 f2-l fw6 pc-red ttu tracked-l mt4 mt5-l ph3">
        HELP YOU LEARN HOW TO INTEGRATE AI INTO YOUR BUSINESS & REACH 10-100X
        RETURN
      </p>

      {/* <!-- phan 3 cot --> */}
      <div className="w-90 w-60-l flex flex-column flex-row-l center mt3 mt4-l">
        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
          <div className="flex flex-column items-center">
            <img src="images/svg_earth.svg" alt="" className="pt4" />
            <p className="pt4 f4 fw6 pc-red">
              Better quality of product and service
            </p>
          </div>
          <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
            Utilize AI to increase business productivity, better quality and
            increasingly personalized AI-enhanced products.
          </p>
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
          <div className="flex flex-column items-center">
            <img src="images/svg_pc.svg" alt="" className="pt4" />
            <p className="pt4 f4 fw6 pc-red">Competitive advantage with AI</p>
          </div>

          <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
            Provide the companies with AI capability as a competitive advantage
            to make it harder to copycat.
          </p>
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-between">
          <div className="flex flex-column items-center">
            <img src="images/svg_notebook.svg" alt="" className="pt4" />
            <p className="pt4 f4 fw6 pc-red">10-100x Transformation</p>
          </div>
          <p className="pt4 f5 poppins tracked pc-dark-gray lh-copy">
            Unlock the companies’ scalability bottleneck with AI instead of
            manual / human approach
          </p>
        </div>
      </div>
    </div>
  </>
);
export default Vision;
