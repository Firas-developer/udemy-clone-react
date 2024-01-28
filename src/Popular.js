import './style.css'
import one from './images/c1.jpg'
import two from './images/c2.jpg'
import three from './images/c3.jpg'
import four from './images/c4.jpg'

function Popular() {
    return (
        <div className="popular">
        <h1>Most Popular</h1>
        <p>Best Fit for You</p>
        <div className="popular__card">
            <div className="course_card">
                <img src={one} alt=""></img>
                <p>Java Master Class</p>
                <p>Bill Gates</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$80 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={two} alt=""></img>
                <p>Python Master Class</p>
                <p>Sundar pichai</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$90 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={three} alt=""></img>
                <p>Mongo Db Master Class</p>
                <p>Steve Jobs</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$100 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={four} alt=""></img>
                <p>JavaScript Master Class</p>
                <p>Agnel John</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>$50 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={one} alt=""></img>
                <p>Java Master Class</p>
                <p>Bill Gates</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$80 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={two} alt=""></img>
                <p>Python Master Class</p>
                <p>Sundar pichai</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$90 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={three} alt=""></img>
                <p>Mongo Db Master Class</p>
                <p>Steve Jobs</p>
                <p>4.5 ⭐⭐⭐⭐</p>
                <p>$100 <del>$200</del></p>
            </div>
            <div className="course_card">
                <img src={four} alt=""></img>
                <p>JavaScript Master Class</p>
                <p>Agnel John</p>
                <p>5.0 ⭐⭐⭐⭐⭐</p>
                <p>$50 <del>$200</del></p>
            </div>
        </div>
    </div>
    )
}

export default Popular