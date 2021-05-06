import '../css/tachyons.min.css';
import '../css/styles.css';

const Tuition = () => (
  <>
    {/* mobile */}
    <div className="w-100 flex dn-l flex-column mt5">
      <div className="w-100 flex relative">
        <img src="images/dangky.png" alt="" className="w-80 br3 center z-1" />
        <div className="w-100 h-50 absolute bottom-0 bg-pc-red z-0"></div>
      </div>

      <div className="w-100 bg-pc-red center pv4">
        <p className="w-80 center pc-white f3 mv3 pc-red ttu tl">
          APPLY FOR THE FIRST BATCH
        </p>

        <p className="w-80 center f6 fw5 lh-copy tracked mt3 pc-near-white">
          Want to become the next gen AI companies? Nominate your company.
        </p>

        <div className="mt3 w-80 center">
          <div className="bg-pc-green dib br3 ph4 pv3 f6 fw6 tracked pc-white">
            SCHEDULE A CALL
          </div>

          <div className="dib br3 ph4 pv3 f6 fw6 tracked pc-white ba b--near-white mt3">
            EMAIL ALEX
          </div>
        </div>
      </div>
    </div>

    {/* desktop */}
    <div className="w-100 db-l">
      <div className="w-90 w-60-l center tc pv3">
        <p className="_title f2 fw6 pc-red ttu tracked-mega">TUITION</p>

        <p className="pt4 f5 pc-light-black lh-copy w-100 w-70-l center">
          Lorem ipsum dolor sit amet, conetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
          diam voluptua.
        </p>

        <div className="w-100 center mt6-l mt5 flex flex-column flex-row-l">
          <div className="_cot1 w-100 w-25-l ph2 pr3-l mt4 mt0-l">
            <div className="bg-pc-near-white ph4 pv4 br4">
              <div className="f3 fw6 pc-black">
                LOREM IPSUM <br />
                DOLOR SIT
              </div>

              <div className="f6 fw5 pt4 lh-copy pc-light-black tl tracked">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </div>

              <div className="_price f2 fw7 pc-black mt3">$7000</div>
              <div className="_price f3 fw6 pc-near-black fw mt3 strike">
                $12000
              </div>
            </div>
          </div>

          <div className="_cot1 w-100 w-25-l ph2 relative-l mt4 mt0-l">
            <div className="bg-pc-red br4 ph4 mh2-l left-0 pv4 absolute-l top--3">
              <div className="f3 fw6 pc-white">
                LOREM IPSUM <br />
                DOLOR SIT
              </div>

              <div className="f6 fw5 pt4 lh-copy pc-pink-white tl tracked">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </div>

              <div className="_price f2 fw7 pc-white mt3">$7000</div>
              <div className="_price f3 fw6 pc-pink-white fw mt3 strike">
                $12000
              </div>
            </div>
          </div>

          <div className="_cot1 w-100 w-25-l ph2 mt4 mt0-l relative">
            <div className="dib ph3 pv2 br3 absolute top--1 left-1 bg-pc-pink pc-near-white">
              NEW
            </div>
            <div className="bg-pc-near-white pv4 ph4 br4">
              <div className="f3 fw6 pc-black">
                LOREM IPSUM <br />
                DOLOR SIT
              </div>

              <div className="f6 fw5 pt4 lh-copy pc-light-black tl tracked">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </div>

              <div className="_price f2 fw7 pc-black mt3">$7000</div>
              <div className="_price f3 fw6 pc-near-black fw mt3 strike">
                $12000
              </div>
            </div>
          </div>

          <div className="_cot1 w-100 w-25-l ph2 pl3-l mt4 mt0-l">
            <div className="bg-pc-near-white pv4 ph4 br4">
              <div className="f3 fw6 pc-black">
                LOREM IPSUM <br />
                DOLOR SIT
              </div>

              <div className="f6 fw5 pt4 lh-copy pc-light-black tl tracked">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet.
              </div>

              <div className="_price f2 fw7 pc-black mt3">$7000</div>
              <div className="_price f3 fw6 pc-near-black fw mt3 strike">
                $12000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);
export default Tuition;
