import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import EducationCard from './educationCard';
import PrincetonLogo from './images/irs_logo.png';
import ScienceCover from './images/science.png';
import RiderLogo from './images/rider.png';
import ChemistryCover from './images/ochem.jpg';

export default class Education extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={16}>
          <Grid item key={1} sm={6} md={4} lg={4}>
            <EducationCard
              schoolName="Princeton University"
              preText="Tackeling the toughest subjects is what drives me. My studies in Organic Chemistry allowed to mature critial and relational problem solving skills that I continued to hone during my professional career."
              degreeSubheading="Ph.D Candidate, Oragnic Chemistry"
              image={PrincetonLogo}
              cover={ScienceCover}
              descriptionText="At Princeton I had the privledge to work alongside some of the brightest minds in my field. My studies in organic chemistry allowed me to use higher order reasoning to solve complex sythenic targets. This rational problem solving experiance would propel me through the rest of my career. With the creation of new web technologies, my interest turned from chemical sythnesis to code creation. During the years after my leave I would go on to privately learn how design and code in the emerging web languages. This self taught set of skills lead to my interest in machine learning adn data science. Now I hope to expand my studies and utilize cutting edge technologies to uncover new innovations in the computer and life sciences."
            />
          </Grid>

          <Grid item key={2} sm={6} md={4} lg={4}>
            <EducationCard
              schoolName="Rider University"
              preText="Organic chemistry posed the biggest challenge out of the cirriculums offered. I wished to challenge myself with the toughest subject matter I could find. Chemistry proved not only challenging but beautiful."
              degreeSubheading="B.S. Summa Cum Laude Oragnic Chemistry"
              image={RiderLogo}
              cover={ChemistryCover}
              descriptionText="During my time at Rider I was actively enguaged in graduate level research from my sophmore year. I was also very active in recruiting and mentoring high school students in Chemistry through the SEED program. I worked with various professors on research projects from lipid lowering to alzheimeir drug targets. My passion for chemistry would propel me into graduate studies in Organic Chemistry."
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
