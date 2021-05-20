import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/Menu';
import CountDown from './containers/countDown';
import Vision from './containers/Vision';
import Challenges from './containers/Challenges';
import WhyWe from './containers/WhyWe';
import Mentorships from './containers/Mentorship';
import Process from './containers/Process';
import Apply from './containers/Apply';
import Partners from './containers/partners';
import QA from './containers/QuestionAnswer';
import Footer from './containers/footer';

import { menu } from './assets/data.json';
import What from './containers/What';

function App() {
  return (
    <div className="sans-serif">
      <Menu />
      <div id={menu.top.id} />
      <CountDown />
      <Vision id={menu.vision.id} />
      <Challenges id={menu.challenges.id} />
      <WhyWe />
      <What />
      <Mentorships id={menu.mentorship.id} />
      <Process id={menu.process.id} />
      <Apply />
      <Partners />
      <QA id={menu.qa.id} />
      <Footer />
    </div>
  );
}

export default App;
