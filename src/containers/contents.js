import '../css/tachyons.min.css';
import '../css/styles.css';

const Contents = () => (
  <>
    <div className="w-100 bg-black-05 pv5 overflow-hidden">
      <div className="_title f2 fw6 pc-red ttu tracked tc ph4">
        what you will learn in this <span className="dn dib-l"> bootcamp?</span>
      </div>

      {/* <!-- mobile mục lục --> */}
      <div className="flex dn-l w-300 justify-start mt4 pa3 overflow-scroll">
        <div className="br3 ph2 ph3-l pv3 mh3 w6 pc-white bg-pc-red tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph2 ph3-l pv3 mh3 w6 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph2 ph3-l pv3 mh3 w6 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph2 ph3-l pv3 mh3 w6 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph2 ph3-l pv3 mh3 w6 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph2 ph3-l pv3 mh3 w6 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      {/* <!--  desktop mục lục --> */}
      <div className="dn w-100 flex-l justify-center mt4">
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
        <div className="ba b--black-30 br3 ph4 pv3 mh3 w45 black-50 bg-white tc lh-copy tracked f6">
          Lorem ipsum dolor sit amet
        </div>
      </div>

      <p className="w-80 w-60=l tl tc-l black-70 center mt4 f6 lh-copy tracked">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet
      </p>
    </div>
  </>
);
export default Contents;
