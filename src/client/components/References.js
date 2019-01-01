import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ReferenceCard from './referenceCard';

export default class References extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ReferenceCard
              referenceInitials="DZ"
              referenceTitle="Doron Ziv, CEO"
              referenceSubheader="USA Air Conditioning"
              referenceDescription="Doron is owner and my direct manager while at USAADC. While at USAADC I designed and developed PHP websites based around functional programming standards and managed PPC/Display advertising creation and optimization."
              referenceColor="red[500]"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ReferenceCard
              referenceInitials="SZ"
              referenceTitle="Shirley Ziv, President"
              referenceSubheader="Exclusive Home Guide"
              referenceDescription="Shirley was a startup client of my design company. I was able to quickly and cheaply deliver a responsive themed wordpress design that helped jump start her business."
              referenceColor="red[300]"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ReferenceCard
              referenceInitials="ES"
              referenceTitle="Eddy Silvera, President"
              referenceSubheader="Mobile Synergy International"
              referenceDescription="During my time at Mobile SYnergy I worked closely with Eddy to secure first and second phase financing as well as convey progress reports to finance partners."
              referenceColor="red[300]"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ReferenceCard
              referenceInitials="ME"
              referenceTitle="Mary Emau, Developer"
              referenceSubheader="Envisia Group"
              referenceDescription="At Envisia group I worked alongside Mary in design and development. After Envisia we worked together creating the site structure for USAADC."
              referenceColor="red[300]"
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
