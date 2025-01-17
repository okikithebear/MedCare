import React from 'react'
import '../../styles/start.css'
import trainer from '../../assets/Img/trainer.png'

const Start = () => {
    return <section>
        <div className="container">
            <div className="start_wrapper">
                <div className="start_img">
                    <img src={trainer} alt='A trainer' />
                </div>

                <div className="start_content">
                    <h2 className="section_title">
                        Ready to make a <span className='highlights'>change?</span>
                    </h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, incidunt.</p> */}
                    <button className='register_btn' onClick={() => window.open('https://wa.me/message/RL5USQVQAEI5K1', '_blank')}
                    >Get Started</button>
                </div>
            </div>
        </div>
    </section>
}

export default Start