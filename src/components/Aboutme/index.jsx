import pictureofme from '../../images/pictureofme.png'
import Subheading from "../Subheading/index.jsx";
function Aboutme() {
    return (
        <section className="lg:inline-block" id="about-me">
            <img className="col-span-1 float-right mx-4 h-32 w-24 lg:h-64 lg:w-48"
                 alt="A picture of Ruth a smiling white woman with short brown hair" src={pictureofme}/>
            <Subheading text="About Me"/>
            <div className="lg:text-lg m-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus mauris, lobortis sed dapibus volutpat, lacinia eget orci. Donec venenatis libero ipsum, et scelerisque odio mollis commodo. Maecenas lacinia pellentesque purus vitae sagittis. In ipsum lorem, molestie vitae pellentesque non, malesuada in quam. Vestibulum a arcu quis lectus faucibus bibendum. Donec id tortor maximus, facilisis nulla ac, fringilla erat. Phasellus vitae lectus ex. Aliquam congue ipsum id libero lacinia efficitur. Donec faucibus sem eget nisl venenatis, nec lacinia nunc faucibus. Duis vestibulum nibh tempor ante consequat mollis et nec est. Vivamus pellentesque purus vitae efficitur condimentum. Sed viverra ut augue at consectetur.
            </div>
        </section>
    )
}

export default Aboutme