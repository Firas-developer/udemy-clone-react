import './style.css'
import sales from './images/sale-image.jpg'

function Sales(){
    return(
        <div className="sales">
        <div className="sales__course">
            <h4>App Development</h4>
            <h4>Web Development</h4>
            <h4>Java Script</h4>
            <h4>Amazon AWS</h4>
            <h4>Data Science</h4>
            <h4>Graphic Designing</h4>
        </div>
        <div className="sales__img">
            <img src={sales} alt=""></img>
            <div className="sales__msg">
                <h1>Udemy Offer Sale! </h1>
                <p>Courses available at 50% Off please afford it as soon as possible</p>
            </div>
        </div>
    </div>
    )
}

export default Sales