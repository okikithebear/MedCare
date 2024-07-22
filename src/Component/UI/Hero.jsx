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
                        <h2 className='section_title'>Exercise is key to a <span className='highlights'>Healthy</span> Lifestyle</h2>
                        <p>Regular exercise boosts physical and mental health, enhancing overall well-being and vitality. Start your journey to a healthier you today!</p>
                        <div className="hero_btn">
                            <button className="register_btn">Get started</button>
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
