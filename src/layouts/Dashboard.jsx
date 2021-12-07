import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Route } from 'react-router';
import Home from '../pages/Home';
import Logo from './Logo';
import Footer from './Footer';

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Logo />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/sessions" component={Home} />
            <Route exact path="/overview" component={Home} />
            <Route exact path="/schedule" component={Home} />
            <Route exact path="/teaser" component={Home} />
            <Route exact path="/upcomingevents" component={Home} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
