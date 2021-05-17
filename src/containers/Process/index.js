import '../../css/tachyons.min.css';
import '../../css/styles.css';

const Process = ({ id }) => {
  return (
    <>
      {/* mobile */}
      <div id={id} />
      <div class="db dn-l w-100 bg-pc-white pv4">
        <p class="ph5 tc f2 fw6 pc-red tracked">SELECTION PROCESS</p>

        <div class="w-80 center flex justify-between mt4 pa3 br3 ba b--black-20 pointer lh-copy ttu items-center">
          <p class="pc-red f5 fw6 ttu tracked">1 - Registration</p>
          <img
            src="images/svg_arrow_down.svg"
            alt=""
            class="w1 w2-l ml2 ml4-l mt2"
          />
        </div>

        {/* <!-- selection control --> */}
        {/* <div class="w-80 center flex justify-between mt3 pa3 br3 ba br--top b--black-20 pointer lh-copy ttu items-center">
          <p class="pc-red f5 fw6 ttu tracked">1 - Registration</p>
        </div>
        <div class="w-80 center flex justify-between pa3 ba b--black-20 pointer lh-copy ttu items-center">
          <p class="pc-red f5 fw6 ttu tracked">2 - Screening</p>
        </div>
        <div class="w-80 center flex justify-between pa3 ba b--black-20 pointer lh-copy ttu items-center">
          <p class="pc-red f5 fw6 ttu tracked">3 - Interview</p>
        </div>
        <div class="w-80 center flex justify-between mt0 pa3 br3 ba br--bottom b--black-20 pointer lh-copy ttu items-center">
          <p class="pc-red f5 fw6 ttu tracked">4 - Final companies confirmed</p>
        </div> */}

        {/* <!-- process content --> */}
        <div class="w-80 center pc-light-black f6 lh-copy tracked mt3">
          Click <span class="dark-gray b">APPLY</span> to fill the registration
          form. In this form, we expect to learn more about your company,
          milestones, & primary roadblocks in terms of applying AI to your
          business model. Please respond carefully at your best effort.
          <br />
          <br />
          For us to fully evaluate the company’s potential, we expect to get
          detailed answers jointly by the CEO (for business) and CTO (for tech).
          Only 1 submission per company.
        </div>
      </div>

      {/* desktop */}
      <div className="dn db-l w-100 pt4 pb6 relative mt6">
        <div className="_nen_do absolute bg-pc-red white w-40 right-0 tc h-100 top-0 z-0 br4 br--left"></div>

        <div className="w-70 center">
          <p className="ph5  pc-red f2 fw6 tracked">SELECTION PROCESS</p>
        </div>

        <div className="w-70 pt4 mt4 bg-pc-medium-gray br4 z-5 center relative flex justify-around">
          {/* <!-- cot 1 muc luc --> */}
          <div className="w-40 ph4 pb5 flex flex-column">
            {/* <!-- dong active --> */}
            <div className="_active_item pointer flex items-center mt5">
              <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                1
              </div>
              <div className="ph3">
                <p className="pc-green f6 fw4 lh-copy">May 15 - May 28</p>
                <p className="pc-dark-gray lh-copy f5 fw6 tracked">
                  REGISTRATION
                </p>
              </div>
              <div className="bg-gray w-40 center bt bw1 b--pc-gray"></div>
            </div>

            {/* <!-- dong khong active --> */}
            <div className="_active_item pointer flex items-center mt5">
              <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                2
              </div>
              <div className="ph3">
                <p className="pc-light-gray f6 fw4 lh-copy">May 29 - JUNE 5</p>
                <p className="pc-light-gray lh-copy f5 fw6 tracked">
                  SCREENING
                </p>
              </div>
              {/* <!-- <div className="bg-gray w-40 center bt bw1 b--pc-gray"></div> --> */}
            </div>
            {/* <!-- dong khong active --> */}
            <div className="_active_item pointer flex items-center mt5">
              <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                3
              </div>
              <div className="ph3">
                <p className="pc-light-gray f6 fw4 lh-copy">May 29 - JUNE 5</p>
                <p className="pc-light-gray lh-copy f5 fw6 tracked">
                  INTERVIEW
                </p>
              </div>
              {/* <!-- <div className="bg-gray w-40 center bt bw1 b--pc-gray"></div> --> */}
            </div>
            {/* <!-- dong khong active --> */}
            <div className="_active_item pointer flex items-center mt5">
              <div className="w2 h2 br-100 bg-white ba b--black-50 flex items-center justify-center">
                4
              </div>
              <div className="ph3">
                <p className="pc-light-gray f6 fw4 lh-copy">May 29 - JUNE 5</p>
                <p className="pc-light-gray lh-copy f5 fw6 tracked">
                  FINAL COMPANIES <br />
                  CONFIRMED
                </p>
              </div>
              {/* <!-- <div className="bg-gray w-40 center bt bw1 b--pc-gray"></div> --> */}
            </div>
          </div>

          {/* <!-- cot 2 noi dung --> */}
          <div className="w-50 pv4 pr4">
            <p className="f3 fw6 tracked lh-copy">REGISTRATION</p>
            <p className="f6 fw3 tracked lh-copy pc-gray mt3">
              Click{' '}
              <span href="#" className="dark-gray fw5 pointer" id="">
                APPLY
              </span>{' '}
              to fill the registration form. In this form, we expect to learn
              more about your company, milestones, & primary roadblocks in terms
              of applying AI to your business model. Please respond carefully at
              your best effort. To achieve great outcomes, we expect at least
              two members (1 business & 1 tech lead/executive) per company to
              enroll in our program.
              <br />
              <br />
              For us to fully evaluate the company's potential, we expect to get
              detailed answers jointly by the CEO (for business) and CTO (for
              tech). Only 1 submission per company.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
