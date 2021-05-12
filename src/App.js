import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/Menu';
import CountDown from './containers/countDown';
import Vision from './containers/Vision';
import Solutions from './containers/solutions';
import Contents from './containers/contents';
import Mentorships from './containers/Mentorship';
import Apply from './containers/apply';
import Tuition from './containers/tuition';
import Partners from './containers/partners';
import QA from './containers/QuestionAnswer';
import Footer from './containers/footer';

import { menu } from './assets/data.json';

function App() {
  return (
    <div class="sans-serif">
      <Menu />
      <CountDown />
      <Vision id={menu.vision.id} />
      <Solutions />
      <Contents />
      <Mentorships id={menu.mentorship.id} />
      <Apply />
      <Tuition />
      <Partners />
      <QA id={menu.qa.id} />
      <Footer />
    </div>
  );
}

export default App;
