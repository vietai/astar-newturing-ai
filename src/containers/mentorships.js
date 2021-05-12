import '../css/tachyons.min.css';
import '../css/styles.css';

const Mentorships = ({ id }) => (
  <>
    <div id={id} className="flex flex-l flex-column w-90 center mt2 pv5">
      <div className="w-90 w-70-l center">
        <p className="_title f3 fw6 pc-red ttu tracked tc">MENTORSHIP</p>

        <div className="_4_hinh flex flex-column flex-row-l mt4 justify-center-l">
          <div className="w-100 w-25-l tc tl-l pv2 pv0-l">
            <img
              src="images/m_thangluong.png"
              alt=""
              className="w-90 br4 pointer"
            />
          </div>

          {/* <!-- mobile mentor info --> */}
          <div className="db dn-l">
            <div className="w-90 center bg-pc-red pc-near-white f6 mv2 pa3 br3 lh-copy">
              <p className="f3">THANG LUONG</p>
              <div className="w-100 bb b--white-50 mt3 mb2"></div>
              <p className="fw3 lh-copy tracked">
                Research scientist at Google Brain; Co-founder of VietAI & PhD
                in Computer Science @Stanford where he built state-of-the-art
                machine translation systems at both Google and Stanford. Dr.
                Luong is an expert in natural language processing and deep
                learning, authoring over 40 highly-cited scientific articles, 10
                patents, and many popular open-source projects. He is an
                inventor of LuongAttention, NoisyStudent, and Google Meena
                chatbot.
              </p>
              <p className="mt3 pc-yellow tracked ttu">READ MORE</p>
            </div>
          </div>

          <div className="w-100 w-25-l tc pv2 pv0-l">
            <img
              src="images/m_thucvu.png"
              alt=""
              className="w-90 br4 pointer"
            />
          </div>

          {/* <!-- mobile mentor info --> */}
          <div className="db dn-l">
            <div className="w-90 center bg-pc-red pc-near-white f6 mv2 pa3 br3 lh-copy">
              <p className="f3">Thuc Vu</p>
              <div className="w-100 bb b--white-50 mt3 mb2"></div>
              <p className="fw3 lh-copy tracked">
                Dr. Thuc Vu is Co-founder/CEO at OhmniLabs, Kambria & VietAI; He
                previously founded Katango and Tappy which were acquired by
                Google and Weeby.co, respectively. Thuc has deep expertise in
                game theory, machine learning, tournament design and multi-agent
                systems. He earned his PhD from Stanford University and a
                Bachelor of Science from Carnegie Mellon, both in computer
                science. Apart from being an entrepreneur, Thuc is also a
                Research Scientist and Assistant Professor at John Von Neumann
                Institute of Vietnam National University.
              </p>
              <p className="mt3 pc-yellow tracked ttu">READ MORE</p>
            </div>
          </div>

          <div className="w-100 w-25-l tc pv2 pv0-l">
            <img src="images/m_vuvan.png" alt="" className="w-90 br4 pointer" />
          </div>

          {/* <!-- mobile mentor info --> */}
          <div className="db dn-l">
            <div className="w-90 center bg-pc-red pc-near-white f6 mv2 pa3 br3 lh-copy">
              <p className="f3">Vu Van</p>
              <div className="w-100 bb b--white-50 mt3 mb2"></div>
              <p className="fw3 lh-copy tracked">
                Co-founder/CEO of ELSA, Corp. MBA & M.Ed @ Stanford; Hard-core
                operator & tireless entrepreneur. Passion in edtech and how we
                can use technology to change education landscape, and make
                education accessible to all & at high quality.
              </p>
              <p className="mt3 pc-yellow tracked ttu">READ MORE</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- modal desktop mentoship info --> */}

    <div className="dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around relative mt3">
      <p className="_btn-close white pointer tr absolute top-1 right-1">X</p>

      <img src="images/m_thangluong.png" alt="" className="br4 w-25" />

      <div className="w-60 pr4">
        <p className="_mentor-name f2 lh-copy">THẮNG LƯƠNG</p>
        <p className="_mentor-title lh-copy">PhD at NYD</p>

        <p className="_mentor-info lh-copy mt3">
          Research scientist at Google Brain; Co-founder of VietAI & PhD in
          Computer Science @Stanford where he built state-of-the-art machine
          translation systems at both Google and Stanford. Dr. Luong is an
          expert in natural language processing and deep learning, authoring
          over 40 highly-cited scientific articles, 10 patents, and many popular
          open-source projects. He is an inventor of LuongAttention,
          NoisyStudent, and Google Meena chatbot.
        </p>
      </div>
    </div>

    {/* <!-- thuc vu --> */}
    <div className="dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around relative mt3">
      <p className="_btn-close white pointer tr absolute top-1 right-1">X</p>

      <img src="images/m_thucvu.png" alt="" className="br4 w-25" />

      <div className="w-60 pr4">
        <p className="_mentor-name f2 lh-copy">THỨC VŨ</p>
        <p className="_mentor-title lh-copy">
          Dr. Thuc Vu is Co-founder/CEO at OhmniLabs..
        </p>

        <p className="_mentor-info lh-copy mt3">
          Dr. Thuc Vu is Co-founder/CEO at OhmniLabs, Kambria & VietAI; He
          previously founded Katango and Tappy which were acquired by Google and
          Weeby.co, respectively. Thuc has deep expertise in game theory,
          machine learning, tournament design and multi-agent systems. He earned
          his PhD from Stanford University and a Bachelor of Science from
          Carnegie Mellon, both in computer science. Apart from being an
          entrepreneur, Thuc is also a Research Scientist and Assistant
          Professor at John Von Neumann Institute of Vietnam National
          University.
        </p>
      </div>
    </div>

    {/* <!-- Vũ Văn --> */}
    <div className="dn flex-l w-60 center br3 bg-pc-red pa4 pc-near-white justify-around relative mt3">
      <p className="_btn-close white pointer tr absolute top-1 right-1">X</p>

      <img src="images/m_vuvan.png" alt="" className="br4 w-25" />

      <div className="w-60 pr4">
        <p className="_mentor-name f2 lh-copy">VŨ VĂN</p>
        <p className="_mentor-title lh-copy">Co-founder/CEO of ELSA</p>

        <p className="_mentor-info lh-copy mt3">
          Co-founder/CEO of ELSA, Corp. MBA & M.Ed @ Stanford; Hard-core
          operator & tireless entrepreneur. Passion in edtech and how we can use
          technology to change education landscape, and make education
          accessible to all & at high quality.
        </p>
      </div>
    </div>
  </>
);
export default Mentorships;
