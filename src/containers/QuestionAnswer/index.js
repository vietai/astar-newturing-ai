import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { questions } from '../../assets/data.json';
import './styles.css';
import { useState } from 'react';

const Question = ({ item, isActive, onClick }) => {
  const _handleOnClick = () => {
    if (onClick) onClick();
  };

  return (
    <>
      <div
        className={
          isActive
            ? 'w-90 w-100-l flex justify-between tracked pv3 ph3 ph5-l br4 ba b--black-20 pointer lh-copy b mb0 cau-hoi-active   br--top items-start'
            : 'w-90 w-100-l flex justify-between tracked pv3 ph3 ph5-l br4 ba b--black-20 pointer lh-copy b mb3 cau-hoi items-start'
        }
        onClick={_handleOnClick}
      >
        <p>{item.question}</p>
        {isActive ? (
          <img
            src="images/svg_arrow_up.svg"
            alt=""
            className="w1 w2-l ml2 ml4-l mt2"
          />
        ) : (
          <img
            src="images/svg_arrow_down.svg"
            alt=""
            className="w1 w2-l ml2 ml4-l mt2"
          />
        )}
      </div>

      <div
        className={`w-90 w-100-l pv3 ph4 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3  ${
          isActive ? ' cauTraLoi ' : ' cauTraLoi anCauTraLoi '
        }`}
        dangerouslySetInnerHTML={{ __html: item.answer }}
      />
    </>
  );
};

const QA = ({ id }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const handleOnToggleAnswer = (i) => {
    console.log('i = ', i);
    if (activeQuestion === i) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(i);
    }
  };

  return (
    <div id={id} className="w-100">
      <div className="w-100 w-70-l center flex flex-column items-center">
        <p className="_qa-title f2 fw6 tracked pc-red pv4">Q&A</p>

        {/* <Question item={questions[0]} isActive={true} />
        <Question item={questions[0]} isActive={false} /> */}

        {questions.map((item, i) => (
          <Question
            item={item}
            key={item.question}
            isActive={activeQuestion === i}
            onClick={() => {
              handleOnToggleAnswer(i);
            }}
          />
          // <Question
          //   item={item}
          //   key={item.question}
          //   isShowAnswer={activeQuestion === i}
          //   onToggleAnswer={() => {
          //     handleOnToggleAnswer(i);
          //   }}
          // />
        ))}

        {/* <!-- c1 --> */}
        {/* <div className="w-90 w-100-l tracked pv3 ph3 ph5-l br4 ba b--black-20 flex pointer lh-copy b pointer cau-hoi-active mb0 justify-between br--top items-start">
        <p>What is pre-requisite criteria for the first batch?</p>
        <img
          src="images/svg_arrow_up.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div>

      <div className="w-90 w-100-l pv3 ph4 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3">
        <ol>
          <li>Potential to apply AI to reach 10-100x returns.</li>
          <li>
            Executive willingness & tech team qualification. (Are you excited
            about learning to apply AI?
          </li>

          <li>
            Can they execute what we advise in the next 6 months? Post-launch
            companies
          </li>
        </ol>
      </div> */}

        {/* <!-- c2 --> */}
        {/* <div className="w-90 w-100-l tracked pv3 ph3 ph5-l br4 ba b--black-20 flex pointer lh-copy b pointer cau-hoi-active mb0 justify-between br--top items-start">
        <p>How to apply?</p>
        <img
          src="images/svg_arrow_up.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div>

      <div className="w-90 w-100-l pv3 ph3 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3">
        Click here for the whole selection process review or click here to apply
      </div> */}

        {/* <!-- c3 --> */}
        {/* <div className="w-90 w-100-l tracked pv3 ph3 ph5-l br4 ba b--black-20 flex pointer lh-copy b pointer cau-hoi-active mb0 justify-between br--top items-start">
        <p>Can we get funding (scholarship) for this AI Bootcamp?</p>
        <img
          src="images/svg_arrow_up.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div>

      <div className="w-90 w-100-l pv3 ph3 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3">
        Yes. We offer conditional scholarships for outstanding startups,
        especially for social enterprises. Please check it out to see if you
        meet the criteria.
      </div> */}

        {/* <!-- c4 --> */}
        {/* <div className="w-90 w-100-l tracked pv3 ph3 ph5-l br4 ba b--black-20 flex pointer lh-copy b pointer cau-hoi-active mb0 justify-between br--top items-start">
        <p>How long does the AI Bootcamp take?</p>
        <img
          src="images/svg_arrow_up.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div>

      <div className="w-90 w-100-l pv3 ph3 ph5-l br4 b--black-10 br--bottom black-90 cau-tra-loi ba mb3">
        12 intensive weeks. You have to spend at least 3 full weekdays for 8
        middle weeks of intensive training. The other 2 weeks will be for
        one-on-one mentoring and final 2 weeks for prototype & demo showcase.
      </div>

      <div className="w-90 w-100-l tracked mb3 pv3 ph3 ph5-l br4 ba b--black-20 flex pointer lh-copy b cau-hoi items-start">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          autem possimus molestias velit cupiditate sed, asp?
        </p>
        <img
          src="images/svg_arrow_down.svg"
          alt=""
          className="w1 w2-l ml2 ml4-l mt2"
        />
      </div> */}

        <div className="bg-pc-green ph4 pv3 br3 white fw6 f7 ttu pointer dim">
          + more questions
        </div>
      </div>
    </div>
  );
};
export default QA;
