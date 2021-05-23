import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { useState } from 'react';

const What = ({ id }) => {
  const [selectedId, setSelectedId] = useState(1);

  const toggleCol_1 =
    selectedId === 1 ? 'db w-100  w-50-l ' : 'dn db-l w-50-l ';
  const toggleCol_2 =
    selectedId === 2 ? 'db w-100  w-50-l ' : 'dn db-l w-50-l ';

  return (
    <div className="w-100 bg-dark-gray lh-copy mt0 mt6-l">
      <div id={id} />
      <div className="w-90 w-80-l center pv5 flex flex-wrap flex-column flex-row-l">
        {/* <!-- cot 1 --> */}
        <div className="w-100 w-40-l f2 fw7 ttu ph2 pl0 pr5-l debug whit-70 pc-near-white tc tl-l">
          What you will <br />
          learn in this <br />
          bootcamp
        </div>

        {/* <!-- cot 2 --> */}
        <div className="w-100 w-60-l white-50 fw3">
          {/* <!--  CONTENTS TITLES --> */}

          {/* mobile */}
          <div className="w-100 flex dn-l justify-end bb bw1 b--gray pv4 h45">
            <div
              className={'w-40 pointer ' + (selectedId !== 1 ? 'o-30' : '')}
              onClick={() => {
                // console.log(1);
                setSelectedId(1);
              }}
            >
              <p className="pc_what_white fw7 ttu">
                _TECHNOLOGY TRAINING / GUEST LECTURES
              </p>
            </div>
            <div
              className={'w-40 pointer ' + (selectedId !== 2 ? 'o-30' : '')}
              onClick={() => {
                // console.log(2);
                setSelectedId(2);
              }}
            >
              <p className="pc_what_pink fw7 ttu">_BUSINESS / PROTOTYPE</p>
            </div>
          </div>

          {/* desktop: no click no opacity */}
          <div className="dn w-100 flex-l justify-end bb bw1 b--gray pv4">
            <div className="w-40 ">
              <p className="pc_what_white fw7 ttu">
                _TECHNOLOGY TRAINING / GUEST LECTURES
              </p>
            </div>
            <div className="w-40  ">
              <p className="pc_what_pink fw7 ttu">_BUSINESS / PROTOTYPE</p>
            </div>
          </div>

          {/* <!-- CONTENT DETAIL --> */}

          {/* <!-- week 1 --> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc">Week 1</div>

            {/* <!-- hien thi mau xanh --> */}
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box mr2-l'}>
                Prerequisites for Machine Learning
                <br />
                (Python, Math, Framework)
              </div>
              <div className={toggleCol_2 + 'pink-week-box ml2-l'}>
                Introduce with Advisors
                <br />
                (Exploration)
              </div>
            </div>
          </div>

          {/* <!-- week 2, 3 --> */}
          <div className="w-100 flex justify-end pv4 items-stretch ">
            <div className="w-20 tc flex flex-wrap ">
              <div className="w-100">Week 2</div>
              <div className="w-100">Week 3</div>
            </div>

            <div className="w-80 flex h45">
              <div className={toggleCol_1 + 'green-week-box mr2-l'}>
                Foundations of
                <br />
                Machine Learning
              </div>
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                <div className="w-100 pink-week-box">
                  Meet Advisors
                  <br />
                  (Prototype proposal)
                </div>
                <div className="w-100 pink-week-box mt3">
                  Data Preparation /
                  <br />
                  Collection
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 4, 5--> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc flex flex-wrap">
              <div className="w-100 h4">week 4</div>
              <div className="w-100 h4">week 5</div>
            </div>
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box mr2-l'}>
                Foundations of Deep Learning
                <br />
                Data science
              </div>
              <div className={toggleCol_2 + 'pink-week-box ml2-l'}>
                Prototype Development
              </div>
            </div>
          </div>

          {/* <!-- week 6, 7, 8, 9 --> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc flex flex-wrap">
              <div className="w-100 h4">week 6</div>
              <div className="w-100 h4">week 7</div>
              <div className="w-100 h4">week 8</div>
              <div className="w-100 h4">week 9</div>
            </div>
            <div className="w-80 flex">
              {/* <!-- cot xanh --> */}
              <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                <div className="w-100 green-week-box h5">
                  Advanced Topics (Computer <br /> Vision, Natural Language
                  <br /> Processing, MLOps)
                </div>
                <div className="w-100 green-week-box h4 mt3">
                  Recommendation systems - Ecommerce
                </div>
                <div className="w-100 green-week-box h4 mt3">
                  Credit scaring - Finance
                </div>
              </div>

              {/* <!-- cot do --> */}
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                <div className="w-100 pink-week-box h4">
                  Meet Advisors <br />
                  (Internal Checkup)
                </div>
                <div className="w-100 pink-week-box h55 mt3">
                  Prototype Development
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 10 --> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc">Week 10</div>

            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box mr2-l'}>
                Speech Recognition -<br />
                Language Learning
              </div>
              <div className={toggleCol_2 + 'pink-week-box ml2-l'}>
                Meet Advisors <br /> (Internal Demo)
              </div>
            </div>
          </div>

          {/* <!-- week 11--> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc">Week 11</div>

            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box h35 mr2-l'}>
                Healthcare
              </div>
              <div className={toggleCol_2 + 'pink-week-box h35 ml2-l'}>
                Wrap Up
              </div>
            </div>
          </div>

          {/* <!-- week 12 --> */}
          <div className="w-100 flex justify-end pv4">
            <div className="w-20 tc">week 12</div>

            <div className="w-80 yellow-week-box h35">Demo day</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
