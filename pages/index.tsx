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
          mb="8"
          imageUrl='https://static.vecteezy.com/system/resources/previews/007/213/022/non_2x/graphics-design-illustration-digital-circuit-diagram-technology-for-background-wallpaper-illustration-free-vector.jpg'
          sectionTitle="Quick Links:"
          sectionLinks={[
            {
              name: 'Repos',
              url: 'https://github.com/matthewfbenjamin', // TODO: convert to a stand alone page with GitHub API Integration
              description: 'GitHub Projects'
            },
            {
              name: 'ConnectWithMe',
              url: 'https://linkedin.com/in/matthewfbenjamin',
              description: 'LinkedIn Profile'
            },
          ]}
        />
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
