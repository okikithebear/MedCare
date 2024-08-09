import React from 'react'
import "../../styles/exercises.css";
import lunges from '../../assets/Img/lunges.png'
import yoga from '../../assets/Img/yoga-pose.png'

const Exercises = () => {
    return <section>
        <div className='container exercise_container'>
            <div className="exercise_top">
                <h2 className="section_title">Benefits of  <span className='highlights'>De-medcare Health plan</span></h2>
                <p>Healthy life with De-medcare Metabolic lifestyle teaches us</p>
            </div>

            {/* exercise-list */}
            <div className="exercise_wrapper">
                <div className="exercise_item">
                    <span className="exercise_icon"><img src={lunges} alt="" /></span>
                    <div className="exercise_content">
                        <h4>Enhances Mood</h4>
                        <p>You are what you eat.</p>
                    </div>
                </div>
                <div className="exercise_item">
                    <span className="exercise_icon"><img src={yoga} alt="" /></span>
                    <div className="exercise_content">
                        <h4>Boosts Immunity</h4>
                        <p>Your Health is your first Wealth.</p>
                    </div>
                </div>

                <div className="exercise_item">
                    <span className="exercise_icon"><img src={yoga} alt="" /></span>
                    <div className="exercise_content">
                        <h4>Energy</h4>
                        <p>To look younger,feel more energetic as you grow older..</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Exercises