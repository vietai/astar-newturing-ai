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
    <div className="w-100 bg-program lh-copy mt0 mt6-l">
      <div id={id} />
      <div className="w-90 w-80-l center pv5 flex flex-wrap flex-column flex-row-l">
        {/* <!-- cot 1 --> */}
        <div className="w-100 w-40-l f2 fw7 ttu ph2 pl0 pr5-l pc-what-title tc tl-l">
          What you will <br />
          learn in this <br />
          bootcamp
        </div>

        {/* <!-- cot 2 --> */}

        <div className="w-100 w-60-l pc-what-content fw3">
          {/* <!--  CONTENTS TITLES --> */}

          {/* mobile */}
          <div className="w-100 flex dn-l justify-end bb bw1 b--white-05 pt4">
            <div
              className={
                'w-40 pointer h3 ' + (selectedId !== 1 ? 'o-30' : ' bb--pc-red')
              }
              onClick={() => {
                // console.log(1);
                setSelectedId(1);
              }}
            >
              {/* <p className="pc-training fw7 ttu">TRAINING</p> */}
              <p className="pc-training fw7 ttu">TRAINING</p>
            </div>
            <div
              className={
                'w-40 pointer h3 ' + (selectedId !== 2 ? 'o-30' : ' bb--pc-red')
              }
              onClick={() => {
                // console.log(2);
                setSelectedId(2);
              }}
            >
              <p className="pc_what_pink fw7 ttu">PROTOTYPE</p>
            </div>
          </div>

          {/* desktop: no click no opacity */}
          <div className="dn w-100 flex-l justify-end bb bw1 b--gray pv4">
            <div className="w-40 ">
              {/* <p className="pc_what_white fw7 ttu">TRAINING</p> */}
              <p className="pc-training fw7 ttu">TRAINING</p>
            </div>
            <div className="w-40  ">
              <p className="pc_what_pink fw7 ttu">PROTOTYPE</p>
            </div>
          </div>

          {/* <!-- CONTENT DETAIL --> */}

          {/* <!-- week 1 --> */}
          <div className="w-100 flex justify-end pv2 ">
            <div className="w-20 tc fw5">Week 1</div>

            {/* <!-- hien thi mau xanh --> */}
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <span className="b">Prerequisites for Machine Learning</span>
                <br />
                Learn about basic maths (linear algebra, calculus), Python
                programming, and frameworks to learn AI.
              </div>
              <div className={toggleCol_2 + 'pink-week-box tc ml2-l'}>
                Introduce with Advisors (Exploration)
              </div>
            </div>
          </div>

          {/* <!-- week 2, 3 --> */}
          <div className="w-100 flex justify-end pv2 items-stretch   ">
            <div className="w-20 tc fw5 flex flex-wrap ">
              <div className="w-100">Week 2</div>
              <div className="w-100">Week 3</div>
            </div>

            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <span className="b">Foundations of Machine Learning</span>
                <br />
                Learn how to apply AI to fundamental problems such as linear
                regression (e.g., house-price predictions) and classification
                (recognizing images). We will learn to use Tensorflow, Google
                AI's framework.
              </div>
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                <div className="w-100 pink-week-box tc b">
                  Meet Advisors
                  <br />
                  (Prototype proposal)
                </div>
                <div className="w-100 pink-week-box tc mt3">
                  Data Preparation /
                  <br />
                  Collection
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 4, 5, 6 7--> */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5 flex flex-wrap">
              <div className="w-100 h45">Week 4</div>
              <div className="w-100 h4">Week 5</div>
              <div className="w-100 h4">Week 6</div>
              <div className="w-100 h4">Week 7</div>
            </div>
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                <div className={'green-week-box tc h4'}>
                  <span className="b">Data science</span>
                  <br />
                  Learn real-world lessons on data preparation and feature
                  engineering
                </div>

                <div className={'green-week-box tc mt3 h56'}>
                  <br />
                  <br />
                  <br />
                  <span className="b">Foundations of Deep Learning</span>
                  <br />
                  Learn latest advances in deep learning and its applications to
                  computer vision and natural language processing.
                </div>
              </div>

              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                <div className="w-100 pink-week-box tc h5">
                  Prototype Development
                </div>

                <div className="w-100 pink-week-box tc b mt3 h4">
                  Meet Advisors <br />
                  (Internal Checkup)
                </div>
                <div className="w-100 pink-week-box tc mt3 h4">
                  Prototype Development
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 8, 9, 10, 11 --> */}
          <div className="w-100 flex justify-end pv2  ">
            <div className="w-20 tc fw5 flex flex-wrap">
              <div className="w-100 h35">Week 8</div>
              <div className="w-100 h4">Week 9</div>
              <div className="w-100 h4">Week 10</div>
              <div className="w-100 h3">Week 11</div>
            </div>
            <div className="w-80 flex">
              {/* <!-- cot xanh --> */}
              <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                <div className="w-100 green-week-box tc ">
                  <br />
                  <br />
                  <br />
                  <span className="b">
                    Guest lectures on real-world applications
                  </span>
                  <br />
                  Recommendation systems - Ecommerce
                  <br />
                  Credit scoring - Finance
                  <br />
                  Speech Recognition - Language learning
                  <br />
                  Healthcare
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>

              {/* <!-- cot do --> */}
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                <div className="w-100 pink-week-box tc  h45">
                  Prototype Development
                </div>
                <div className="w-100 pink-week-box tc  mt3 b">
                  Meet Advisors (Internal Demo)
                </div>

                <div className="w-100 pink-week-box tc  mt3">Wrap Up</div>
              </div>
            </div>
          </div>

          {/* <!-- week 12 --> */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5">Week 12</div>

            <div className="w-80 yellow-week-box bg-pc-red ttu f3 fw7 pc-white tc h35">
              Demo day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
