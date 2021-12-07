import React from 'react';
import { Image, Grid, Header, Button } from 'semantic-ui-react';
import { Group1669, Group1670, Group1671 } from '../assets';
import './index.css';

export default function Logo() {
  return (
    <div>
      <div id="logo" className="logo">
        <div className="content">
          <Grid centered verticalAlign="middle">
            <Grid.Row columns={2}>
              <Grid.Column floated="left" width={8}>
                <Header
                  as="h5"
                  style={{
                    color: '#232B76',
                  }}
                >
                  NEXT WEBINAR
                </Header>
                <Header
                  as="h2"
                  style={{
                    color: '#FFFFFF',
                    marginTop: 0,
                    fontStyle: 'italic',
                  }}
                >
                  EVENT NAME it amet, consetetur sadipscing elitr, sed diam
                  nonumy eirmod tempor{' '}
                </Header>
                <Header
                  as="h3"
                  style={{
                    color: '#232B76',
                  }}
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </Header>
                <Header
                  as="h5"
                  style={{
                    color: '#FFFFFF',
                  }}
                >
                  Wednesday, 25 February 2021
                </Header>
                <div>
                  <Button primary>
                    15<p>Days</p>
                  </Button>
                  <Button primary>
                    12<p>Hours</p>
                  </Button>
                  <Button primary>
                    49<p>Minutes</p>
                  </Button>
                  <Button primary>
                    32<p>Seconds</p>
                  </Button>
                </div>
              </Grid.Column>

              <Grid.Column floated="right" width={6}>
                <Grid.Row>
                  <Grid.Column>
                    <Image src={Group1669} size="small" href="#" />
                  </Grid.Column>
                  <Grid.Column>
                    <Image src={Group1670} size="small" href="#" />
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <div
          className="overlay"
          style={{
            backgroundImage: `url("${Group1671}")`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
}
