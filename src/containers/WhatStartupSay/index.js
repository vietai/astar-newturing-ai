import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { what_startup_say as whatStartupSay } from '../../assets/data.json';


const MobileWhatStartupSay = () => {

  return (
    <div class="db dn-l w-100 bg-pc-white pb4 pt5">
      <p class="ph5 tc f2 fw7 pc-red tracked">{whatStartupSay.title}</p>

      <div className="w-90 w-70-l flex flex-column flex-row-l center mt3 mt4-l">
        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_pc.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_earth.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.desc }}
            />
          </div>

          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_notebook.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.content }}
          />
        </div>
      </div>
    </div>
  );
};

const WhatStartupSay = ({ id }) => (
  // dangerouslySetInnerHTML={{ __html: item.answer }}
  <>
    <MobileWhatStartupSay />
    <div className="dn db-l w-100 pt4 pb6 relative mt7-l">
      <div className="_nen_do absolute bg-pc-red white w-40 right-0 tc h-100 top-0 z-0 br4 br--left"></div>

      <div className="w-70 center">
        <p className="ph5  pc-red f2 fw7 tracked" style={{whiteSpace: 'pre-line'}}>{whatStartupSay.title}</p>
      </div>

      <div className="w-70 pt4 mt4 bg-pc-medium-gray br4 z-5 center relative flex justify-around">
        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_pc.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_1.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_earth.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.desc }}
            />
          </div>

          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_2.content }}
          />
        </div>

        <div className="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div className="flex flex-column items-center">
            {/* <img src="images/svg_notebook.svg" alt="" className="pt4" /> */}
            <p
              className="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.title }}
            />
            <p
              className="pt2 fw7 pc-gray"
              dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.desc }}
            />
          </div>
          <p
            className="pt4 f5 f5-l fw5 pc-dark-gray tracked-l lh-copy tc"
            dangerouslySetInnerHTML={{ __html: whatStartupSay.col_3.content }}
          />
        </div>
      </div>
    </div>
  </>
);

export default WhatStartupSay;
