import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import { Header, SectionApplet } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>MattQuest</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header subText='Explore my world with the #1 website for Matthew Benjamin!' />
      <Box p="10" maxW={{ base: '100%', lg: '75%', 'xl': '60%' }} margin="auto">
        <SectionApplet
          imageUrl='http://www.thebeckoning.com/explorations/world/world%20maps/personal_travel_world_map.jpg'
          sectionTitle="Interests:"
          sectionLinks={[
            {
              name: 'MattsMusic',
              url: 'https://open.spotify.com/user/mbista?si=74a44cdac8864a37', // TODO: convert to a stand along page with Spotify API Integration
              description: 'Spotify Profile'
            },
            {
              name: 'PhotoQuest',
              url: 'https://photos.app.goo.gl/YWP3NSUt79UUefbV9', // TODO: convert to a stand along page with Google API integration
              description: 'Just some fun pictures I took'
            },
            {
              name: 'Workout Atlas',
              url: 'https://www.strava.com/athletes/5857366', // TODO: convert to a stand along page with Strava API integration
              description: 'Strava'
            },
          ]}
        />
      </Box>
    </>
  );
}
