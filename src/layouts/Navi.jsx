import React from 'react';
import { Menu, Container, Image, Grid } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Group1478 } from '../assets';
export default function Navi() {
  return (
    <div>
      <Grid>
        <Grid.Row columns={2}>
          <Grid.Column floated="left" width={3}>
            <Image src={Group1478} size="small" />
          </Grid.Column>
          <Grid.Column floated="right" width={13}>
            <Menu secondary celled>
              <Container>
                <Menu.Item as={NavLink} to="/home" name="HOME" />
                <Menu.Item as={NavLink} to="/sessions" name="SESSIONS" />
                <Menu.Item as={NavLink} to="/overview" name="OVERVIEW" />
                <Menu.Item as={NavLink} to="/schedule" name="SCHEDULE" />
                <Menu.Item as={NavLink} to="/teaser" name="TEASER" />
                <Menu.Item
                  as={NavLink}
                  to="/upcomingevents"
                  name="UPCOMING EVENTS"
                />
              </Container>
            </Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
