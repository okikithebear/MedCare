import React from 'react'
import "../../styles/exercises.css";
import lunges from '../../assets/Img/lunges.png'
import yoga from '../../assets/Img/yoga-pose.png'
import extended from '../../assets/Img/extended.png'
const Exercises = () => {
    return <section>
        <div className='container exercise_container'>
            <div className="exercise_top">
                <h2 className="section_title">Benefits of <span className='highlights'>Exercise</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, tempora!</p>
            </div>

            {/* exercise-list */}
            <div className="exercise_wrapper">
                <div className="exercise_item">
                    <span className="exercise_icon"><img src={lunges} alt="" /></span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, minima.</p>
                    </div>
                </div>
                <div className="exercise_item">
                    <span className="exercise_icon"><img src={yoga} alt="" /></span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, minima.</p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon"><img src={extended} alt="fit image" /></span>
                    <div className="exercise_content">
                        <h4>Healthy Life</h4>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus, minima.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Exercises