import React from 'react';
import { Header, Container } from 'semantic-ui-react';
import { ButtonAdd } from '../ButtonAdd';

const EventCardAdd = (props) => {
  const { item } = props;

  return (
    <Container
      textAlign="center"
      style={{
        marginTop: 50,
        height: 280,
        width: '35%',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Header
        as="h5"
        style={{
          color: '#FFFFFF',
          backgroundColor: '#232B76',
          padding: 15,
        }}
      >
        {item.header}
      </Header>
      <Header
        as="h4"
        style={{
          color: '#232B76',
        }}
      >
        <Header.Content className="card-container">
          {item.description}
        </Header.Content>
      </Header>
      <Header as="h4" color="blue">
        {item.subDescription}
      </Header>
      <ButtonAdd color="teal" inverted={false} content="REGISTER"></ButtonAdd>
      <ButtonAdd
        color="blue"
        inverted={false}
        content="ADD TO CALENDAR"
      ></ButtonAdd>
    </Container>
  );
};

export { EventCardAdd };
