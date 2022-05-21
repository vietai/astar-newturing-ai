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
              <p className="pc-training fw7 ttu tc">TECHNOLOGY TRACK</p>
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
              <p className="pc_what_pink fw7 ttu tc">BUSINESS TRACK</p>
            </div>
          </div>

          {/* desktop: no click no opacity */}
          <div className="dn w-100 flex-l justify-end bb bw1 b--gray pv4">
            <div className="w-40 ">
              <p className="pc-training fw7 ttu tc">TECHNOLOGY TRACK</p>
            </div>
            <div className="w-40  ">
              <p className="pc_what_pink fw7 ttu tc">BUSINESS TRACK</p>
            </div>
          </div>

          {/* <!-- CONTENT DETAIL --> */}

          {/* <!-- phase 1 --> */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5"></div>

            <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc" style={{padding: 0, height: 80}}>
              <span className='f3 fw7'>A-star Earth</span>
              <br />
              (Phase 1_Foundation)
            </div>
          </div>

          {/* <!-- week 1 --> */}
          <div className="w-100 flex justify-end pv2 ">
            <div className="w-20 tc fw5">Week 1</div>

            {/* <!-- hien thi mau xanh --> */}
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <span className="b">AI for Everyone</span>
              </div>
              <div className={toggleCol_2 + 'pink-week-box tc ml2-l'}>
                <span className="b">Define Problems and Goals</span>
              </div>
            </div>
          </div>

          {/* <!-- week 2 --> */}
          <div className="w-100 flex justify-end pv2 items-stretch   ">
            <div className="w-20 tc fw5 flex flex-wrap ">
              <div className="w-100">Week 2</div>
            </div>

            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <span className="b">Basic Data Analysis</span>
              </div>
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                <div className="w-100 pink-week-box tc b">
                  Meet Consultants
                  <br />
                  (Prototype Proposal)
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 3, 4 --> */}
          <div className="w-100 flex justify-end pv2 items-stretch">
            <div className="w-20 tc fw5 flex flex-wrap ">
              <div className="w-100">Week 3</div>
              <div className="w-100">Week 4</div>
            </div>
            <div className="w-80 flex" style={{height: '12rem'}}>
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <br />
                <span className="b">
                  Organize & Label data
                  <br />
                  Deploy & Monitor the Baseline Solution
                </span>
              </div>
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                <div className="w-100 pink-week-box tc b">
                  <br /><br />
                  Evaluate The Solution
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5"></div>

            <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc">
              Only selected group of startups that have successfully passed "A-Star Earth" will be able to join “A-Star Moon”
            </div>
          </div>
          {/* <!-- phase 2 --> */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5"></div>

            <div className="w-80 yellow-week-box bg-pc-red ttu pc-white tc" style={{padding: 0, height: 80}}>
              <span className='f3 fw7'>A-star Moon</span>
              <br />
              (Phase 2_Intensive)
            </div>
          </div>

          {/* <!-- week 1 --> */}
          <div className="w-100 flex justify-end pv2 items-stretch   ">
            <div className="w-20 tc fw5 flex flex-wrap ">
              <div className="w-100">Week 1</div>
            </div>

            <div className="w-80 flex">
              <div className={toggleCol_1 + 'green-week-box tc mr2-l'}>
                <span className="b">Data science</span>
                <br />
                Learn real-world lessons on data preparation and feature engineering
              </div>
              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l'}>
                <div className="w-100 pink-week-box tc b">
                  Introduce with Advisors
                  <br />
                  (Exploration)
                </div>
              </div>
            </div>
          </div>

          {/* <!-- week 2 3 --> */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5 flex flex-wrap">
              <div className="w-100 h4">Week 2</div>
              <div className="w-100 h4">Week 3</div>
            </div>
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                <div className={'green-week-box tc'}>
                  <span className="b">Foundations of Machine Learning</span>
                  <br />
                  Learn how to apply AI to fundamental problems such as linear regression (e.g., house-price predictions) and classification (recognizing images). We will learn to use Tensorflow, Google AI framework.
                </div>
              </div>

              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                <div className="w-100 pink-week-box b tc">
                  Meet Advisors
                  <br />
                  (Prototype proposal)
                </div>

                <div className="w-100 pink-week-box tc b mt3">
                  Data Preparation / Collection
                </div>
              </div>
            </div>
          </div>

          {/* Week 4 -> 11 */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5 flex flex-wrap">
              <div className="w-100 h4">Week 4</div>
              <div className="w-100 h4">Week 5</div>
              <div className="w-100 h4">Week 6</div>
              <div className="w-100 h35">Week 7</div>
              <div className="w-100 h4">Week 8</div>
              <div className="w-100 h4">Week 9</div>
              <div className="w-100 h4">Week 10</div>
              <div className="w-100 h3">Week 11</div>
            </div>
            <div className="w-80 flex">
              <div className={toggleCol_1 + 'flex-l flex-wrap mr2-l'}>
                <div className={'w-100 green-week-box tc h4'}>
                  <br />
                  <span className="b">Mid-program Exam</span>
                </div>

                <div className={'green-week-box mt3 tc h58'}>
                  <br />
                  <span className="b">Advanced modules</span>
                  <br />
                  <br />
                  <span className="b">Recommendation system Foundations of Deep Learning</span>
                  <br />
                  <span className="b">Natural Language Processing</span>
                  <br />
                  <br />
                  Learn latest advances in recommendation, deep learning and its applications to computer vision and natural language processing.
                  <br />
                </div>

                <div className={'green-week-box tc mt3 h55'}>
                  <br />
                  <span className="b">Guest lectures on real-world applications:</span>
                  <br /><br/>
                  Recommendation Engine - Ecommerce
                  <br/><br/>
                  Credit scoring - Finance 
                  <br/><br/>
                  Speech Recognition - Language learning
                  <br/><br/>
                  Healthcare
                </div>
              </div>

              <div className={toggleCol_2 + 'flex-l flex-wrap ml2-l '}>
                <div className="w-100 pink-week-box tc h5">
                  <br/><br/><br/><br/>
                  Prototype Development
                </div>
                <div className="w-100 pink-week-box tc b mt3 h4">
                  Meet Advisors <br />
                  (Internal Checkup)
                </div>
                <div className="w-100 pink-week-box tc mt3 h53">
                  <br/><br/><br/><br/><br/><br/>
                  Prototype Development
                </div>
                <div className="w-100 pink-week-box tc b mt3 h35">
                  Meet Advisors <br />
                  (Internal Checkup)
                </div>
                <div className="w-100 pink-week-box tc mt3 h35">
                  Wrap-up
                </div>
              </div>
            </div>
          </div>

          {/* Week 12 */}
          <div className="w-100 flex justify-end pv2">
            <div className="w-20 tc fw5">Week 12</div>

            <div className="w-80 yellow-week-box bg-pc-red ttu f3 pc-white tc">
              <span className='fw7'>DEMO DAY</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default What;
