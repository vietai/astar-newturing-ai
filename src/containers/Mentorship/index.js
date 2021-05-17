import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { groups } from '../../assets/data.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './styles.css';

const MobileMentorShip = () => {
  const [selectGroupId, setSelectGroupId] = useState(-1);
  const [activeMentorId, setActiveMentorId] = useState(0);

  const _showInfoMentor = (id) => {
    // console.log('id = ', id);
    setActiveMentorId(activeMentorId === id ? 0 : id);
  };

  return (
    <div className="db dn-l w-100 bg-pc-red">
      <div id="m1" />
      {groups.map((item, index) => {
        return index === selectGroupId ? (
          <>
            <Link
              to={'m1'}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="pointer"
            >
              <div className="w-100 pa4" onClick={() => setSelectGroupId(-1)}>
                <div className="flex justify-between items-center">
                  <p className="f3 pc-white tracked">{item.title}</p>
                  <img
                    src="images/svg_arrow_up.svg"
                    alt=""
                    className="w1 ml4"
                  />
                </div>

                <div className="f6 pc-pink-white mt3 tracked lh-copy">
                  {item.description}
                </div>
              </div>
            </Link>

            <div className="w-100 pa4 bb b--pink-white">
              {item.mentors.map((mentor) => (
                <>
                  <div className="w-100 pt3">
                    <img
                      src={'images/' + mentor.image}
                      alt=""
                      className="w-100 br4 pointer"
                      onClick={() => _showInfoMentor(mentor.id)}
                    />
                    <p className="f4 fw6 pc-white tracked mt3">{mentor.name}</p>
                  </div>

                  {activeMentorId === mentor.id ? (
                    <div className="db dn-l">
                      <div className="w-100  bg-pc-red pc-near-white f6 mv2 pv2 br3 lh-copy">
                        <div className="w-100 bb b--white-50 mt3 mb2"></div>
                        <p className="f6 fw6 lh-copy tracked mt3">
                          {mentor.title}
                        </p>
                        <p
                          className="fw3 lh-copy tracked mt3"
                          dangerouslySetInnerHTML={{
                            __html: mentor.description,
                          }}
                        ></p>
                      </div>
                    </div>
                  ) : null}
                </>
              ))}
            </div>
          </>
        ) : (
          <Link
            to={'m1'}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="pointer"
          >
            <div
              className="w-100 pa4 bb b--pink-white"
              onClick={() => setSelectGroupId(index)}
            >
              <div className="flex justify-between items-center">
                <p className="f3 pc-white tracked">{item.title}</p>
                <img
                  src="images/svg_arrow_down_white.svg"
                  alt=""
                  className="w1 ml4"
                />
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

const DesktopMentorship = () => {
  const [mentors, setMentors] = useState([]);
  const [activeMentorId, setActiveMentorId] = useState(0);
  const [selectGroupId, setSelectGroupId] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  useEffect(() => {
    setMentors(groups[selectGroupId].mentors);
  }, [selectGroupId]);

  useEffect(() => {
    setIsShowModal(activeMentorId !== 0);
  }, [activeMentorId]);

  const _showInfoMentor = (id) => {
    setActiveMentorId(activeMentorId === id ? 0 : id);
  };

  return (
    <div
      id="desktop-mentorship"
      className="dn flex-l flex-column w-70 center br3 mt2 pv2 ph3 white bg-pc-red"
    >
      <div className="w-100 flex justify-around">
        {groups.map((item, index) => (
          <div
            className={
              selectGroupId === index
                ? 'w-third mh1 bg-near-white bg-pc-pink-white pc-black pv3 br2 tc pointer'
                : 'w-third mh1 bg-near-white pc-black pv3 br2 tc pointer'
            }
            onClick={() => setSelectGroupId(index)}
          >
            {groups[index].title}
          </div>
        ))}
      </div>

      <div className="w-90 center mt4">
        <p className="_title f2 fw4 lh-copy tracked tl pc-white">
          {groups[selectGroupId].title}
        </p>
        <p className="mt3 f6 fw3 tracked tl pc-white lh-copy pc-pink-white">
          {groups[selectGroupId].description}
        </p>

        <div className=" _4_hinh flex flex-column flex-row-l mt4 justify-start flex-wrap">
          {mentors.map((item) => (
            <div className="w-third pv0 mv3">
              <img
                src={'images/' + item.image}
                alt=""
                className="w-90 br4 pointer"
                onClick={() => {
                  console.log('just clicked!!');
                  _showInfoMentor(item.id);
                }}
              />
              <p className="f4 mt3 fw4 tl">{item.name}</p>
            </div>
          ))}
        </div>

        {isShowModal ? (
          <div
            className="dn db-l w-100 bg-black-50 vh-100 fixed top-0 left-0 z-999"
            onClick={() => {
              setActiveMentorId(0);
            }}
          >
            <div className="modal dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around ">
              <p
                className="_btn-close white pointer tr absolute top-1 right-1"
                onClick={() => {
                  setActiveMentorId(0);
                }}
              >
                X
              </p>

              {mentors
                .filter((item) => item.id === activeMentorId)
                .map((item) => (
                  <>
                    <div className="w-25 pt3">
                      <img
                        src={`images/${item.image}`}
                        alt=""
                        className="br4 w-100"
                      />
                    </div>
                    <div className="w-60 pr4">
                      <p className="_mentor-name f2 lh-copy">{item.name}</p>
                      <p className="_mentor-title lh-copy">{item.title}</p>

                      <p
                        className="_mentor-info lh-copy mt3"
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      ></p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const Mentorship = ({ id }) => {
  return (
    <>
      <div id={id} />
      <div className="w-100 w-70-l center ph2 ph4-l f2 fw6 tracked pc-red mv4 mt6-l tc tl-l">
        MENTORSHIP
      </div>
      <MobileMentorShip />
      <DesktopMentorship />
    </>
  );
};

export default Mentorship;
