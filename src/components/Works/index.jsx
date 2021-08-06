import "./style.css";

const About = () => {
  return (
    <div className="works">
      <h1>Work Experience</h1>
      <p className="employer">Emory Decatur Hospital</p>
      <p className="role">Patient Access Representative</p>
      <p>Date: Oct 2017 - Aug 2020 </p>
      <p>
      <li>Maintained 98%+ accuracy when collecting and transferring patient insurance and demographic information </li>
	    <li>Consistently provided high-quality customer service in fast-paced environment </li>
		<li>Ensured strict compliance with relevant state and federal laws to protect patients' health information and privacy</li>
    
      </p>
      <br />
      <p className="employer">Brash</p>
      <p className="role">Senior Barista</p>
      <p>Date: 2019 - Present</p>
      <p>
      <li>Worked as part of a team to efficiently serve customers at a high-volume location</li>
      <li>Invited to interview for managerial position</li>
      </p>
    </div>
  );
};

export default About;