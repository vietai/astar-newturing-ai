import './App.css';
import './css/tachyons.min.css';
import './css/styles.css';
import Menu from './containers/menu';
import CountDown from './containers/countDown';
import Vision from './containers/vision';
import Solutions from './containers/solutions';
import Contents from './containers/contents';
import Mentorships from './containers/mentorships';
import Apply from './containers/apply';
import Tuition from './containers/tuition';
import Partners from './containers/partners';
import QA from './containers/qa';
import Footer from './containers/footer';

function App() {
  return (
    <div class="sans-serif">
      <Menu />
      <CountDown />
      <Vision />
      <Solutions />
      <Contents />
      <Mentorships />
      <Apply />
      <Tuition />
      <Partners />
      <QA />
      <Footer />
    </div>
  );
}

export default App;
