import React from 'react';
import { Header, Container, Image } from 'semantic-ui-react';
import { ButtonAdd } from '../ButtonAdd';

const SpeakerAdd = (props) => {
  const { item } = props;

  return (
    <Container
      textAlign="center"
      style={{
        marginTop: 50,
      }}
    >
      <Image src={item.imgUrl} size="tiny" wrapped ui={true} />
      <Header
        as="h4"
        style={{
          color: '#232B76',
        }}
      >
        <Header.Content className="card-container">
          {item.header}
          <Header.Subheader>{item.description}</Header.Subheader>
        </Header.Content>
      </Header>
      <ButtonAdd color="blue" inverted={false} content="See Bio"></ButtonAdd>
    </Container>
  );
};

export { SpeakerAdd };
