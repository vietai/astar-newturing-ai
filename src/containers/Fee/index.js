import './styles.scss';
import { fee, countdown } from '../../assets/data.json';

const Fee = () => {
    return (
        <div className="fee-block">
            <p className='fee-block__title'>{fee.title}</p>
            <div className='fee-block__content'>
                <div className='column col_1'>
                    <div className='header'>
                        {fee.col_1.header}
                    </div>
                    <div className='body'>
                        {fee.col_1.body.map((item, index) => {
                            return (
                                <div key={index} className='item'>
                                    <p className='title'>{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='footer'>
                        <p className='title'>{fee.col_1.footer.title}</p>
                        <p className='fee'>{fee.col_1.footer.fee}</p>
                    </div>
                </div>
                <div className='column col_2'>
                    <div className='header'>
                        {fee.col_2.header}
                    </div>
                    <div className='body'>
                        {fee.col_2.body.map((item, index) => {
                            return (
                                <div key={index} className='item'>
                                    <p className='title'>{item.title}</p>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='footer'>
                        <p className='title'>{fee.col_2.footer.title}</p>
                        <p className='fee'>{fee.col_2.footer.fee}</p>
                    </div>
                </div>

                <div className='column col_3'>
                    <div className='header'>
                        {fee.col_3.header}
                    </div>
                    <div className='body'>
                        {fee.col_3.body}
                    </div>
                    <div className='footer'>
                        <p dangerouslySetInnerHTML={{ __html: fee.col_3.footer }}></p>
                    </div>
                </div>

            </div>
            <p className='fee-block__text'>{fee.text}</p>
            <button
                className="fee-block__cta"
                onClick={() => window.open(fee.cta_link, '_blank')}
            >
                click here to apply
            </button>
            <p className='fee-block__deadline'>*Deadline: {countdown.deadline}</p>
        </div>
    )
}
export default Fee;