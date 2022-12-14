import FishImg from '../../../images/Home/fish.png';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from 'react-router-dom';
const Hero = () => {
    return (
        <section className="Hero">
          <div className="Hero__content container">
            <div className="row">
              
            <div className="fish col-md-2 col-lg-3"> 
              <img src={FishImg} alt="FishImg"/>
            </div>

            <div className="HeroText col-12 col-md-8 col-lg-6"> 
              <h1>New China</h1>
                <h4>
                  We Serve Chinese and Thai Food  <br/>
                  for Pickup in Palatine Bridge, NY. 
                </h4>
                <div className="phoneNum">
                  Call us at: <a href="tel:518-673-8292">  (518)-673-8292</a> 
                </div>
              
                <div className="hours">
                  <span>Mon-Sat: 11:00 AM - 10:00 PM </span>
                  <span> Sunday: 12:00 Noon- 9:30 PM</span>
                </div>
             
                <DropdownButton id="Dropdown" title="View Menu"> 
                  <Dropdown.Item as="button">
                    <Link className="nav-item nav-link" to="/ChineseMenu">Chinese Menu</Link>
                  </Dropdown.Item>
                  <Dropdown.Item as="button">
                    <Link  className="nav-item nav-link" to="/ThaiMenu">Thai Menu</Link>
                  </Dropdown.Item>
                </DropdownButton>
            </div> 

            <div className="fish2 col-md-2 col-lg-3"> 
              <img src={FishImg} alt="FishImg"/>
            </div>
            </div>
         </div> 
        </section>
    )
}

export default Hero;
