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
import WhoApply from './containers/WhoApply';
import AStar from './containers/AStar';
import SubcribeModal from './components/SubcribeModal'
import WhatStartupSay from './containers/WhatStartupSay';
import Video from './containers/Video';

function App() {
  return (
    <div className="sans-serif">
      <SubcribeModal/>
      <Menu />
      <div id={menu.top.id} />
      <CountDown />
      <Vision id={menu.transformation.id} />
      <AStar />
      <Challenges id={menu.why.id} />
      <WhyWe id={menu.how.id} />
      <Mentorships id={menu.mentorship.id} />
      <What id={menu.program.id} />
      <WhoApply />
      <WhatStartupSay />
      <Video />
      {/* <Process /> */}
      <Apply />
      <Partners />
      {/* <QA id={menu.qa.id} /> */}
      <Footer />
    </div>
  );
}

export default App;
