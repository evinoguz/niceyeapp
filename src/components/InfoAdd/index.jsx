import React from 'react';
import { Header, Grid, Image } from 'semantic-ui-react';

const InfoAdd = (props) => {
  const { item } = props;

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column width={3}>
          <Image src={item.imgUrl} size="small" />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header
            as="h4"
            style={{
              color: '#232B76',
              textAlign: 'left',
            }}
          >
            <Header.Content className="card-container">
              {item.header}
              <Header.Subheader>{item.description}</Header.Subheader>
            </Header.Content>
          </Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export { InfoAdd };
