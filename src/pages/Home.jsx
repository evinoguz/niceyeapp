import React from 'react';
import { Header, Grid, Divider } from 'semantic-ui-react';
import {
  certificate,
  group,
  world,
  Ellipse17,
  Ellipse171,
  Ellipse172,
  Ellipse173,
  Ellipse174,
  Ellipse175,
  Ellipse176,
  Ellipse177,
} from '../assets';
import { ButtonAdd, SpeakerAdd, EventCardAdd, InfoAdd } from '../components';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const items = [
  {
    imgUrl: certificate,
    header: 'Certified Speakers',
    description:
      'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
  },
  {
    imgUrl: group,
    header: 'Connecting People',
    description:
      'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
  },
  {
    imgUrl: world,
    header: 'Latest Updates',
    description:
      'Eabore etsu dolore magn aliqua enim ad minim veniam quis nostrud exercitas tion ullamco ipsum laboris.',
  },
];
const speakers = [
  {
    imgUrl: Ellipse17,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse171,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse172,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse173,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse174,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse175,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse176,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
  {
    imgUrl: Ellipse177,
    header: 'Dr. Name Surname',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.',
    button: 'See Bio',
  },
];
const eventsCards = [
  {
    header: 'Monday, 15 February 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Tuesday, 19 March 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Wednesday, 15 September 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Thursday, 11 May 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Friday, 15 February 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Saturday, 11 May 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
  {
    header: 'Sunday, 15 September 2020',
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor',
    subDescription: 'Speaker Name',
  },
];
export default function Home() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header
              as="h3"
              style={{
                color: '#232B76',
              }}
            >
              SPEAKERS
            </Header>
            <ButtonAdd
              color="blue"
              inverted={false}
              content="Wednesday, 25 February 2021"
            ></ButtonAdd>
            <ButtonAdd
              color="blue"
              inverted={true}
              content="Wednesday, 25 February 2021"
            ></ButtonAdd>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          {speakers.map((item) => (
            <Grid.Column width={4} key={item} divided>
              <SpeakerAdd item={item} />
            </Grid.Column>
          ))}
        </Grid.Row>

        <Grid.Row style={{ marginTop: 50 }}>
          <Grid.Column>
            <Header
              as="h3"
              style={{
                color: '#232B76',
              }}
            >
              WHAT IS VISTREAM WEBINAR PORTAL
            </Header>
            <Header
              as="h3"
              style={{
                color: '#232B76',
              }}
            >
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              <br></br>
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              <br></br>
              quae ab illo inventore veritatis et quasi architecto.<br></br>
            </Header>
            <Divider />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row style={{ marginTop: 50 }}>
          {items.map((item) => (
            <Grid.Column width={5} key={item} divided>
              <InfoAdd item={item} />
            </Grid.Column>
          ))}
        </Grid.Row>

        <Grid.Row style={{ marginTop: 50 }}>
          <Grid.Column>
            <Header
              as="h3"
              style={{
                color: '#232B76',
              }}
            >
              UPCOMING EVENTS
            </Header>
            <Divider />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={{ marginBottom: 30 }}>
          <Grid.Column floated="center" width={15} color="grey">
            <Carousel autoPlay>
              {eventsCards.map((item) => (
                <EventCardAdd item={item} />
              ))}
            </Carousel>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
