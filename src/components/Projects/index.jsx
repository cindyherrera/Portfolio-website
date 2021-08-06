import "./style.css";

const About = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <p className="title">Hermes --Android mobile app</p>
      <div>
      <p>
      <li>Collaborated with a small team to plan, build, and create a messaging app that allows users to send and store messages in a central platform using Google’s Cloud Firestore API</li>
	  <li>Followed Agile Scrum practices and presented app development in three different sprint cycles</li>
      <li>Stored all users and their messages using NoSQL cloud database to allow quick access to information in both offline and online settings</li>
    
      </p>
      <br/>
      <p className="title">Woof-Meow --Website</p>
      <p>
      <li>Designed a website prototype for an animal shelter in order to increase number of successful pet adoptions</li>
      <li>Incorporated database for admin login for special access features</li>    
      </p>
      <br/>
      <p className="title">Fitness With Friends --Android mobile app</p>
      <p>
      <li>Designed and developed a fitness-focused app with a small team that shows publicly created workouts on a map and allows other users of the app to join those workouts</li>
      <li>Incorporated Maps SDK for Android and Firebase to build a map and create markers each time a new workout is created </li>
      <li>Implemented forward geocoding to store appropriate workout information </li>
      </p>
      </div>
    </div>
  );
};

export default About;