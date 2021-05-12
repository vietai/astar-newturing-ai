import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { mentors } from '../../assets/data.json';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './styles.css';

const MentorMobile = ({ mentor, isActive, onClick }) => {
  return (
    <>
      <Link
        to={mentor.id}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        className="w-100 w-25-l tc tl-l pv2 pv0-l"
        onClick={onClick}
      >
        <img
          src={`images/${mentor.image}`}
          alt=""
          className="w-90 br4 pointer"
        />
      </Link>
      <div id={mentor.id} />
      {/* <div id={isActive ? null : mentor.id} /> */}
      {/* <!-- mobile mentor info --> */}
      {isActive ? (
        <div className="db dn-l">
          <div className="w-90 center bg-pc-red pc-near-white f6 mv2 pa3 br3 lh-copy">
            <p className="f3">{mentor.name}</p>
            <div className="w-100 bb b--white-50 mt3 mb2"></div>
            <p className="fw3 lh-copy tracked">{mentor.description}</p>
            <p className="mt3 pc-yellow tracked ttu">READ MORE</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

const Mentorships = ({ id }) => {
  const [activeId, setActiveId] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);

  const _showInfo = (id) => {
    setActiveId(activeId === id ? 0 : id);
  };

  useEffect(() => {
    console.log('activeId = ', activeId);
    setIsShowModal(activeId !== 0);
  }, [activeId]);

  return (
    <>
      <div id={id} className="flex flex-l flex-column w-90 center mt2 pv5">
        <div className="w-90 w-70-l center">
          <p className="_title f3 fw6 pc-red ttu tracked tc">MENTORSHIP</p>

          <div className="_4_hinh flex flex-column flex-row-l mt4 justify-center-l">
            <MentorMobile
              mentor={mentors[0]}
              isActive={activeId === mentors[0].id}
              onClick={() => {
                _showInfo(mentors[0].id);
              }}
            />
            <MentorMobile
              mentor={mentors[1]}
              isActive={activeId === mentors[1].id}
              onClick={() => {
                _showInfo(mentors[1].id);
              }}
            />
            <MentorMobile
              mentor={mentors[2]}
              isActive={activeId === mentors[2].id}
              onClick={() => {
                _showInfo(mentors[2].id);
              }}
            />
          </div>
        </div>
      </div>

      {/* <!-- modal desktop mentoship info --> */}

      {isShowModal ? (
        <div
          className="dn db-l w-100 bg-black-50 vh-100 fixed top-0 left-0 z-999"
          onClick={() => setActiveId(0)}
        >
          <div className="modal dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around ">
            <p
              className="_btn-close white pointer tr absolute top-1 right-1"
              onClick={() => setActiveId(0)}
            >
              X
            </p>

            {mentors
              .filter((item) => item.id === activeId)
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

                    <p className="_mentor-info lh-copy mt3">
                      {item.description}
                    </p>
                  </div>
                </>
              ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default Mentorships;
