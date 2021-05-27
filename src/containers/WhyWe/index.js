import '../../css/tachyons.min.css';
import '../../css/styles.css';
import { why_we as whyWe } from '../../assets/data.json';
import { RedApplyButton } from '../../components/ApplyButton';

const WhyWe = ({ id }) => (
  // dangerouslySetInnerHTML={{ __html: item.answer }}
  <>
    <div id={id} class="flex flex-column w-100 pt3 pt5-l tc mt5">
      <p class="w-80 w-60-l center f3 f2-l fw7 pc-red ttu tracked-l mt5-l ph3">
        {whyWe.title}
      </p>

      <div class="w-90 w-70-l flex flex-column flex-row-l center mt3 mt4-l">
        <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div class="flex flex-column items-center">
            <img src="images/svg_pc.svg" alt="" class="pt4" />
            <p
              class="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_1.title }}
            />
          </div>
          <p
            class="pt4 f5 poppins tracked pc-dark-gray lh-copy tc tl-l"
            dangerouslySetInnerHTML={{ __html: whyWe.col_1.content }}
          />
        </div>

        <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div class="flex flex-column items-center">
            <img src="images/svg_earth.svg" alt="" class="pt4" />
            <p
              class="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_2.title }}
            />
          </div>

          <p
            class="pt4 f5 poppins tracked pc-dark-gray lh-copy tc tl-l"
            dangerouslySetInnerHTML={{ __html: whyWe.col_2.content }}
          />
        </div>

        <div class="w-100 w-third-l pa3 flex flex-column items-center ph4 justify-start">
          <div class="flex flex-column items-center">
            <img src="images/svg_notebook.svg" alt="" class="pt4" />
            <p
              class="pt4 f4 fw7 pc-red"
              dangerouslySetInnerHTML={{ __html: whyWe.col_3.title }}
            />
          </div>
          <p
            class="pt4 f5 poppins tracked pc-dark-gray lh-copy tc tl-l"
            dangerouslySetInnerHTML={{ __html: whyWe.col_3.content }}
          />
        </div>
      </div>
    </div>
    <div className="dn db-l w-100 tc">
      <RedApplyButton />
    </div>
  </>
);

export default WhyWe;
