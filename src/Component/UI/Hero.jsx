import React from 'react';
import "../../styles/Hero.css";
import heroImg from "../../assets/Img/gym-02.png";


const Hero = () => {
    return (
        <section>
            <div className='container'>
                <div className="hero_wrapper">
                    {/* hero content */}
                    <div className="hero_content">
                        <h2 className='section_title'>
                            Exercise is not the only key to <span className='highlights'>weight loss</span> / <span className='highlights'>weight management</span>
                        </h2>
                        <p>
                            Exercise is just <span className='highlights'>20 percent</span> of a healthy lifestyle and weight loss/weight management.
                            De-medcare Health Plan offers the other <span className='highlights'>80 percent</span> for weight loss.
                            And that's the uniqueness of <span className='highlights'>De-medcare</span>.
                        </p>
                        <div className="hero_btn">
                            <button className="register_btn" onClick={() => window.open('https://wa.me/message/RL5USQVQAEI5K1', '_blank')} >  <i className="fab fa-whatsapp text-xl mr-2"></i>Get started</button>
                        </div>
                    </div>

                    {/* hero image */}
                    <div className="hero_img">
                        <div className="hero_img-wrapper">
                            <div className="box-01">
                                <div className="box-02">
                                    <div className="box-03">
                                        <div className="box_img">
                                            <img src={heroImg} alt="Medcare" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="heart_rate">
                                <h5>Heart Rate</h5>
                                <span><i className="fas fa-heartbeat"></i></span>
                                <h5>2566 BPM</h5>
                            </div>
                            <div className="gym_location">
                                <span><i className="fas fa-map"></i></span>
                                <h5>No need for gyms</h5>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
