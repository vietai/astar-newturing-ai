import '../css/tachyons.min.css';
import '../css/styles.css';

const Apply = () => (
  <>
    <div className="w-100 tc mt4">
      <p className="pc-green f5 fw6 tracked-mega">SELECTION PROCESS</p>

      {/* <!-- mobile process --> */}
      <div className="flex dn-l items-start justify-between w-90 center tracked mb3 pv3 ph4 ph5-l br3 mt4 ba b--black-20 pointer lh-copy b cau-hoi ttu">
        <p>1 - Đăng ký</p>
        <img
          src="images/svg_arrow_down.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div>

      {/* <!-- todo --> */}
      <div className="_desktop-progress dn flex-l w-80 center mt4 relative">
        <div className="w-25 flex flex-column items-center">
          <div className="f4 fw5 pc-dark-gray w25 h25 flex bg-black-10 items-center justify-center br-100 pointer">
            1
          </div>
          <p className="f6 pc-dark-gray fw6 mt3">
            Registration (May 3 - May15)
          </p>
        </div>
        <div className="w-25 flex flex-column items-center">
          <div className="f4 fw5 pc-dark-gray w25 h25 flex bg-black-10 items-center justify-center br-100 pointer">
            2
          </div>
          <p className="f6 pc-dark-gray fw6 mt3">Screening (May16 - May19)</p>
        </div>
        <div className="w-25 flex flex-column items-center">
          <div className="f4 fw5 pc-dark-gray w25 h25 flex bg-black-10 items-center justify-center br-100 pointer">
            3
          </div>
          <p className="f6 pc-dark-gray fw6 mt3">
            Interview (May 21, 22, 28 & 29)
          </p>
        </div>
        <div className="w-25 flex flex-column items-center">
          <div className="f4 fw5 pc-dark-gray w25 h25 flex bg-black-10 items-center justify-center br-100 pointer">
            4
          </div>
          <p className="f6 pc-dark-gray fw6 mt3">
            Final companies confirmed (June 5)
          </p>
        </div>
      </div>

      <p className="_title f3 fw6 pc-red ttu tracked tc mt4">
        Registration (May 3 - May15)
      </p>
      <p className="pt4 f5 pc-light-black lh-copy w-90 w-60-l center">
        Click APPLY (hyperlink) to fill the registration form. In this form, we
        expect to learn more about your company, milestones, & primary
        roadblocks in terms of applying AI to your business model. Please
        respond carefully at your best effort. <br />
        For us to fully evaluate the company's potential, we expect to get
        detailed answers jointly by the CEO (for business) and CTO (for tech).
        Only 1 submission per company.
      </p>
    </div>

    <div className="dn flex-l w-100 justify-center mt5 mb6 relative">
      <div className="w-20 z-1">
        <img src="images/dangky.png" alt="" className="w-100 br5 top--3" />
      </div>
      <div className="w-40 pl5 z-1 pt7">
        <p className="f2 fw6 lh-copy tracked-mega pc-near-white">
          MORE QUESTION ABOUT
          <br />
          THE PROGRAM?
        </p>
        <p className="f6 fw5 lh-copy tracked mt3 pc-near-white">
          Schedule a call or email Alex, our Admission Manager, who will help
          you think through the decision.
        </p>

        <div className="mt3">
          <div className="bg-pc-green dib br3 ph4 pv3 f6 fw6 tracked pc-white">
            SCHEDULE A CALL
          </div>
          <div className="dib br3 ph4 pv3 f6 fw6 tracked pc-white ba b--near-white ml3">
            EMAIL ALEX
          </div>
        </div>
      </div>

      <div className="bg-pc-red w-100 h-100 absolute z-0 top-4"></div>
    </div>
  </>
);
export default Apply;
