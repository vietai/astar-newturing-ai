import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/Menu';
import CountDown from './containers/countDown';
import Vision from './containers/Vision';
import Challenges from './containers/Challenges';
// import Contents from './containers/contents';
import Mentorships from './containers/Mentorship';
import Process from './containers/Process';
import Apply from './containers/Apply';
// import Tuition from './containers/tuition';
import Partners from './containers/partners';
import QA from './containers/QuestionAnswer';
import Footer from './containers/footer';

import { menu } from './assets/data.json';

function App() {
  return (
    <div className="sans-serif">
      <Menu />
      <CountDown />
      <Vision id={menu.vision.id} />
      <Challenges />

      {/* <Solutions /> */}
      <div>xxx content</div>
      {/* <Contents /> */}
      <Mentorships id={menu.mentorship.id} />

      <Process />
      <Apply />
      {/* <Tuition /> */}
      <Partners />
      <QA id={menu.qa.id} />
      <Footer />
    </div>
  );
}

export default App;
