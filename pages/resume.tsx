import { Flex, FlexProps, Grid, GridItem, Icon, Link, ResponsiveValue, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { MdDownload } from 'react-icons/md';

import { DirectionIcon, ExitSign, Header, WrappedTextSign, WrappedTextSignTypes } from "../components";

const NUMBER_OF_COLUMNS = 6
const HALF_SPAN = NUMBER_OF_COLUMNS / 2
const SHARED_COL_SPAN: ResponsiveValue<number | "auto"> = [NUMBER_OF_COLUMNS, null, null, HALF_SPAN]

const TextGridItem = ({ title, value }: { title: string; value: string | JSX.Element }) => (
  <Text><b>{title}:</b> {value}</Text>
)

const directions: { Icon: (props: Omit<FlexProps, 'direction'>) => JSX.Element, title: string, dates: string }[] = [
  {
    Icon: (props) => <WrappedTextSign type={WrappedTextSignTypes.Start} {...props} />,
    title: 'Engineer Manager at Rakuten Rewards',
    dates: 'June 2022 - Present'
  },
  {
    Icon: (props) => <DirectionIcon direction="bearLeft" {...props} />,
    title: 'Staff Software Engineer at Rakuten Rewards',
    dates: 'March 2021 - June 2022'
  },
  {
    Icon: (props) => <DirectionIcon direction="right" {...props} />,
    title: 'Senior Software Engineer at Rakuten Rewards',
    dates: 'September 2019 – March 2021'
  },
  {
    Icon: (props) => <DirectionIcon direction="bearRight" {...props} />,
    title: 'Software Engineer II at Rakuten Rewards',
    dates: 'February 2019 – August 2019'
  },
  {
    Icon: ExitSign,
    title: 'Software Engineer Contractor at Materio',
    dates: 'January 2022 - Present (Part-time)'
  },
  {
    Icon: (props) => <DirectionIcon direction="left" {...props} />,
    title: 'Course Instructor for "Mastering React Native" at Packt',
    dates: 'January 2019 - May 2019'
  },
  {
    Icon: (props) => <DirectionIcon direction="up" {...props} />,
    title: 'React Native Developer at Unroll.me',
    dates: 'October 2018 - January 2019'
  },
  {
    Icon: ExitSign,
    title: 'Frontend Developer at Werk',
    dates: 'November 2017 - September 2018',
  },
  {
    Icon: (props) => <WrappedTextSign type={WrappedTextSignTypes.End} {...props} />,
    title: 'Software Engineer at theEMPLOYEEapp',
    dates: 'August 2016 - November 2017'
  }
]

export default function Resume() {
  return (
    <>
      <Header subText='Download My Resume!' />
      <Grid templateColumns={`repeat(${NUMBER_OF_COLUMNS}, 1fr)`} px="10" rowGap="3" mb="3">
        <GridItem colSpan={HALF_SPAN}>
          <Link download href="resume.pdf" display="flex" alignItems="center">
            <Icon as={MdDownload} mr="1" />
            <Text color="blue" textDecoration="underline">Download PDF</Text>
          </Link>
        </GridItem>
        <GridItem colSpan={HALF_SPAN}>
          <Link as={NextLink} href="/" color="blue" textDecoration="underline">Back to Home</Link>
        </GridItem>
        <GridItem colSpan={SHARED_COL_SPAN}>
          <TextGridItem title="Title" value="Staff Software Engineer" />
        </GridItem>
        <GridItem colSpan={SHARED_COL_SPAN}>
          <TextGridItem title="Pronouns" value="He/Him/His" />
        </GridItem>
        <GridItem colSpan={SHARED_COL_SPAN}>
          <TextGridItem title="Email" value={(
            <Link href="mailto: matthew.f.benjamin@gmail.com" alignItems="center" color="blue" textDecoration="underline" display="inline">
              matthew.f.benjamin@gmail.com
            </Link>
          )} />
        </GridItem>
        <GridItem colSpan={NUMBER_OF_COLUMNS}>
          {directions.map((direction, index) => (
              <Flex
                key={direction.title}
                direction={{ base: 'column', md: 'row' }}
                gap="2"
                borderTopStyle="dotted"
                borderTopWidth={1}
                borderTopColor="gray"
                borderBottomStyle="dotted"
                borderBottomWidth={1}
                borderBottomColor="gray"
                py="3"
                justify={{ base: 'space-evenly', md: 'space-between' }}
                align={{ base: 'flex-start', md: 'center' }}
              >
                <Flex flex="1">
                  <direction.Icon minW={{ base: 'fit-content', md: '75%', lg: '50%' }} />
                </Flex>
                <Flex flex="3">
                <Text><Text as="span" fontWeight="bold">{index + 1}.</Text> {direction.title}</Text>
                </Flex>
                <Flex flex="1">
                  <Text>{direction.dates}</Text>
                </Flex>
              </Flex>
          ))}
        </GridItem>
      </Grid>
    </>
  )
}
