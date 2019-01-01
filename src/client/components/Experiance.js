import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ExperianceCard from './experianceCard';

export default class Experiance extends Component {
  render() {
    const JDBIcons = [
      'BigCommerce Partner',
      'eCommerce',
      'PHP',
      'Javascript',
      'Jquery',
      'CSS',
      'HTML',
      'React',
      'Angular',
      'SQL',
      'MongoDB'
    ];
    const MSIcons = [
      'Project Management',
      'Travel',
      'Financing',
      'Management',
      'HTML',
      'CSS',
      'Javascript',
      'Graphic Design'
    ];
    const SOIcons = [
      'Startup',
      'Finance',
      'Product Design',
      'CAD',
      'Marketing',
      'Web Design',
      'Graphic Design',
      'PPC Advertising'
    ];
    const ENIcons = [
      'KPIs',
      'SQL',
      'PHP',
      'Business Intelligence',
      'Merchant Accounts',
      'Graphic Design'
    ];
    const WYIcons = ['Drug Development', 'Organic Chemistry', 'Research', 'Lab'];

    return (
      <div>
        <Grid container spacing={16}>
          <Grid item key={1} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="JB Design"
              employerSubheading="Freelance Design &amp; Development"
              preText="Web Design and Development for local businesses and startups. I also often work on business infrastructure development and deployment such as CRM and ERP integrations."
              descriptionText="I take on select clients to develop front and back-end infrastructure in order to support private web applications and websites. I have worked in many different server environments and LOVE learning new technology and solutions"
              bullet1="Programming in Javascript, PHP, mySQL, MongoDB, JQuery, Bootstrap"
              bullet2="Web Apps, SPA's and Websites"
              bullet3="Wireframing and mockups"
              bullet4="Graphic and multi media design"
              bullet5="Regularly work with international clients"
              icons={JDBIcons}
              employedDate="2012 - Present"
            />
          </Grid>
          <Grid item key={2} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="Mobile Synergy International"
              employerSubheading="Manager &amp; Team Lead (contract)"
              preText="Organized startup financing of 4.5M with private placement. Recruited and managed engineering, marketing and administration resources."
              descriptionText="Lead the engineering and financing development for a hardware startup focused on mobile battery technology. Setup and managed international team of engineers and developers."
              bullet1="Worked closely with Samsung Electronics on location in Korea for engineering and prototyping"
              bullet2="Produced 3D Designs for engineering and marketing (Fusion 360 CAD)"
              bullet3="Designed and developed landing pages and promotional material"
              bullet4="Developed internal marketing infrastructure (CRM and Ad Network Setup)"
              bullet5="Managed Electrical and Mechanical Design teams in Korea, China and the US."
              icons={MSIcons}
              employedDate="2015 - 2017"
            />
          </Grid>
          <Grid item key={3} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="Sobe Vaporizers"
              employerSubheading="Senior Consultant (contract)"
              preText="Created product design, marketing materials, finance management infrastructure, sales channels and vendor logistics for a startup vaporizer company. Provided key assets for company formation and financing."
              descriptionText="Raised 200k in private placement financing. Specified, setup and configured Magento eCommerce infrastructure. Designed responsive custom Magento v1 theme. Drove eCommerce sales through email marketing and SEO."
              bullet1="Worked closely with Vapor Corp (formerly NYSE listed) C-Levels to create web centered brand"
              bullet2="Created brand materials for website and print materials"
              bullet3="Designed product packaging and delivered prototypes in China"
              bullet4="Quickbooks enterprise installation and configuration on a local server"
              bullet5="Designed landing pages using Wordpress, Shopify Javascript, PHP, HTML &amp; CSS"
              icons={SOIcons}
              employedDate="2013 - 2015"
            />
          </Grid>
          <Grid item key={4} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="USA Air Conditioning"
              employerSubheading="Online Marketing Director (contract)"
              preText="Developed online marketing presence and oversaw the online marketing budget in excess of $50,000 a month. Managed digital marketing and oversaw customer service enhancement and server infrastructure."
              descriptionText="Managed the development of all in house websites including landing pages and SEO optimized blogs/feeder sites. Experienced in Pre-Press production of catalog and marketing materials. Strong background in the development of content managed websites particularly utilizing the Joomla! And Wordpress frameworks. "
              bullet1="Reduced the cost of lead by over 5X"
              bullet2="Developed KPIs and Dashboard for CEO"
              bullet3="Setup and managed hyperlocal display and PPC campaigns across networks"
              bullet4="Developed the PHP/Javascript mobile and desktop websites"
              bullet5="Designed landing pages in HTML/CSS/JS and Wordpress"
              icons={SOIcons}
              employedDate="2012 - 2013"
            />
          </Grid>
          <Grid item key={5} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="Envisia Group"
              employerSubheading="Director of Business Intelligence"
              preText="Responsible for evaluation and recommendation of business intelligence backbone development. Lead the development of chargeback mitigration script development by load balancing network traffic."
              descriptionText="Hands on deployment of Business Objects Enterprise, Crystal Reports Web based reporting. Development of all in house Crystal Reports and coding of over 20 web based reports for distribution on local intranet and mobile platforms. Evaluated technology needs and developed SRS and SDD for needs ranging from custom telephony applications to front end customer interface modifications. "
              bullet1="Worked with 40+ IT Team to implement scripts for merchant account rotation and load balancing"
              bullet2="Successfully reduced chargeback per merchant account from dangerous 5% to 1.5%"
              bullet3="Brought real time dynamic desktop KPI reporting to the forefront of decision making to department managers and C-level employees, specified and implement entire desktop KPI platform utilizing Klipfolio as backbone."
              bullet4="Created Email Program Responsible for Generating over $800,000 in additional revenue"
              bullet5="Used complex SQL querying, PHP and Power BI tools to create KPIs and automation scripts"
              icons={ENIcons}
              employedDate="2010 - 2012"
            />
          </Grid>
          <Grid item key={6} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="Moderno"
              employerSubheading="President"
              preText="Created high end design showrooms in 4 cities catering to custom interiors. Generated over $4.5M in annual sales for high end design showroom. Directly responsible for creating and exceeding sales goals."
              descriptionText="Created high end design showrooms in 4 cities catering to custom interiors. Generated over $4.5M in annual sales for high end design showroom. Directly responsible for creating and exceeding sales goals. Developed Marketing strategy and oversaw implementation. Increased sales person volume through targeted sales and marketing campaigns. Developed software integrations to streamline sales and follow-up."
              bullet1="Increased revenues over 500% in 30 months"
              bullet2="Developed, designed and executed ppc campaigns including content creations and conversion funnel asset development."
              bullet3="Designed and Developed website eCommerce (custom PHP then in Magento) catalog for interior designers"
              bullet4="Hired and Managed a 15 employee sales team"
              bullet5="Secured over $3,750,000 in additional financing capital"
              icons={ENIcons}
              employedDate="2005 - 2010"
            />
          </Grid>
          <Grid item key={7} sm={12} md={4} lg={3}>
            <ExperianceCard
              employerName="Wyeth Pharmaceuticals"
              employerSubheading="Intern"
              preText="Created novel synthetic pathways for targeted small molecules. Worked with University staff and PI to promote cross institution collaboration."
              descriptionText="During my graduate studies I had the pleasure to work with an excellent team of investorgators at Wyeth Pharmaceuticals. I would go on develop the route to several promising Alzheimer drugs and be co-awarded a patent for the research."
              bullet1="Designed novel routes to teams small molecule targets."
              bullet2="Worked with university and Wyeth PI's to promote cross collaboration"
              bullet3="Kept detailed lab records and meeting notes"
              bullet4="Reported progress reports to College dean and faculty"
              bullet5="Used cutting edge technology to determine synthesis procedure"
              icons={WYIcons}
              employedDate="2005 - 2010"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
