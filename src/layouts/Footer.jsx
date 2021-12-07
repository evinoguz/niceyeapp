import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';
import { Group1478 } from '../assets';

export default function Footer() {
  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={5}>
            <Image src={Group1478} size="small" />
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <Header
              as="h6"
              style={{
                color: '#232B76',
              }}
            >
              Footer Note
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
