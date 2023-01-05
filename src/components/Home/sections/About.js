import animation from '../../Animations';

const About = () => {
  animation("About");
  return (
    <section id="About" className="About">
      <h1 className="aboutText">About</h1>

      <p className="aboutText"> 
      Welcome to our Chinese and Thai food restaurant! We are a family-owned business dedicated to bringing authentic and delicious Asian cuisine to our community.
      Our menu features a variety of dishes from both China and Thailand, including favorites such as pad Thai, spring rolls, and stir fry. We also offer a selection of vegetarian options, as well as several gluten-free options for those with dietary restrictions.
      All of our ingredients are carefully sourced and prepared with the utmost attention to quality and flavor. Our chefs have years of experience in creating authentic Asian dishes and are committed to using traditional cooking techniques to bring out the best in every meal.
      We hope you will come visit us and experience the taste of Asia right here in our cozy and welcoming restaurant. Thank you for choosing us for your dining needs!
      </p>
      <div className="aboutButtons">
        <div className="aboutButton">
          <a href="/ChineseMenu">
            <p><span className="bg"></span><span className="base"></span><span className="text">Chinese Menu</span></p>
          </a>
        </div>  
        <div className="aboutButton">
          <a href="/ThaiMenu">
            <p><span className="bg"></span><span className="base"></span><span className="text">Thai Menu</span></p>
          </a>
        </div> 
      </div>
  </section>
  )
};

export default About;
