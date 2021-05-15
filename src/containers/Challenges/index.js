import '../../css/tachyons.min.css';
import '../../css/styles.css';

const Challenges = () => {
  return (
    <div className="dn db-l w-100 bg-pc-red mt5 mb6">
      <div className="w-70 center pv5">
        <p className="_title f3 fw6 tc tracked-mega ttu pc-white">
          Existing Challenges for startups
        </p>

        <div className="_mansory w-100 flex flex-wrap justify-around mt4 relative">
          <div className="w-40 ph3">
            <div className="w-100 pv4">
              <p className="f4 fw6 pc-white ttu tracked">
                01 - Limited understanding on How to apply AI in solving busines
                problem
              </p>

              <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                Blind spot of how AI can and can’t help unlock certain
                bottlenecks that startups are facing. How AI can be relevant in
                their business model. Or limited understanding what technology
                is easiest to start with or easy to use & what the
                state-of-the-art AI approaches are.
              </p>
            </div>

            <div className="w-100 pv4">
              <p className="f4 fw6 pc-white ttu tracked">
                03 - HOW TO BUILD DATA PIPELINE
              </p>

              <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                Data pipeline architecture could be a tricky task. How far is it
                from Manual → Semi-automatic → Automatic?
              </p>
            </div>
          </div>

          <div className="w-40 ph3">
            <div className="w-100 pv5">
              <p className="f4 fw6 pc-white ttu tracked lh-copy">
                02 - HOW TO IMPLEMENT AI INFRASTRUCTURE (MLOPS)
              </p>
              <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                AI infrastructure (or MLOPS) - or how to integrate AI prototypes
                into their business - is one of the most common roadblocks of
                any technology company in Vietnam. How to access and manage the
                computing resources to test, train and deploy AI algorithms?
              </p>
            </div>

            <img
              src="images/challenges.png"
              alt=""
              className="absolute"
              style={{ width: '45%', bottom: '-60%', right: '3%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
