import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { who_apply as whoApply } from '../../assets/data.json';

const WhoApply = ({ id }) => {
  return (
    <>
      {/* desktop */}
      <div id={id} />
      <div className="dn db-l w-100 bg-pc-red mb6">
        <div className="w-70 center pv5">
          <p className="_title f3 fw7 tc tracked-mega ttu pc-white">
            {whoApply.title}
          </p>

          <div className="_mansory w-100 flex flex-wrap justify-around mt4 relative">
            <div className="w-40 ph3">
              <div className="w-100 pv4">
                <p className="f4 fw7 pc-white ttu tracked">
                  {whoApply.col_1.title}
                </p>

                <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                  {whoApply.col_1.content}
                </p>
              </div>

              <div className="w-100 pv4">
                <p className="f4 fw7 pc-white ttu tracked">
                  {whoApply.col_3.title}
                </p>

                <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                  {whoApply.col_3.content}
                </p>
              </div>
            </div>

            <div className="w-40 ph3">
              <div className="w-100 pv5">
                <p className="f4 fw7 pc-white ttu tracked lh-copy">
                  {whoApply.col_2.title}
                </p>
                <p className="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
                  {whoApply.col_2.content}
                </p>
              </div>

              <img
                src="images/challenges.png"
                alt=""
                className="absolute"
                style={{ width: '45%', bottom: '-220px', right: '3%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* mobile */}

      <div class="db dn-l w-100 bg-pc-red pv4">
        <p class="_title f3 fw7 tc tracked-mega ttu pc-white lh-copy">
          {whoApply.title}
        </p>

        <div class="w-80 center">
          <p class="f5 fw7 pc-white ttu tracked lh-copy mt4">
            {whoApply.col_1.title}
          </p>

          <p class="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
            {whoApply.col_1.content}
          </p>
        </div>

        <div class="w-80 center">
          <p class="f5 fw7 pc-white ttu tracked lh-copy mt4">
            {whoApply.col_2.title}
          </p>

          <p class="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
            {whoApply.col_2.content}
          </p>
        </div>

        <div class="w-80 center">
          <p class="f5 fw7 pc-white ttu tracked lh-copy mt4">
            {whoApply.col_3.title}
          </p>

          <p class="pc-pink-white mt4 tracked lh-copy f6 poppins fw2">
            {whoApply.col_3.content}
          </p>
        </div>

        <div class="w-80 center relative pt4 pb6">
          <img src="images/challenges.png" alt="" class="absolute" />
        </div>
      </div>
    </>
  );
};

export default WhoApply;
