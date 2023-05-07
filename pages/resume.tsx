import { Flex, Grid, GridItem, Icon, Link, ResponsiveValue, Text } from "@chakra-ui/react";
import NextLink from 'next/link';
import { MdDownload } from 'react-icons/md';

import { DirectionIcon, Header, StartIcon } from "../components";

const NUMBER_OF_COLUMNS = 6
const HALF_SPAN = NUMBER_OF_COLUMNS / 2
const SHARED_COL_SPAN: ResponsiveValue<number | "auto"> = [NUMBER_OF_COLUMNS, null, null, HALF_SPAN]

const TextGridItem = ({ title, value }: { title: string; value: string | JSX.Element }) => (
  <Text><b>{title}:</b> {value}</Text>
)

const directions: { Icon: () => JSX.Element, title: string, dates: string }[] = [
  {
    Icon: StartIcon,
    title: 'Engineer Manager at Rakuten Rewards',
    dates: 'June 2022 - Present'
  },
  {
    Icon: () => <DirectionIcon direction="bearLeft" />,
    title: 'Staff Software Engineer at Rakuten Rewards',
    dates: 'March 2021 - June 2022'
  },
  {
    Icon: () => <DirectionIcon direction="right" />,
    title: 'Senior Software Engineer at Rakuten Rewards',
    dates: 'September 2019 – March 2021'
  },
  {
    Icon: () => <DirectionIcon direction="bearRight" />,
    title: 'Software Engineer II at Rakuten Rewards',
    dates: 'February 2019 – August 2019'
  },
]

export default function Resume() {
  return (
    <>
      <Header subText='Download My Resume!' />
      <Grid templateColumns={`repeat(${NUMBER_OF_COLUMNS}, 1fr)`} px="10" rowGap="3">
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
                  <direction.Icon />
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

/*
<TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                Directions
              </Th>
              <Th />
              <Th>
                Distance
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td><StartIcon /></Td>
              <Td>Engineer Manager at Rakuten Rewards</Td>
              <Td>June 2022 - Present</Td>
            </Tr>

            <Tr><DirectionIcon direction="bearLeft" /></Tr>
          </Tbody>
        </Table>
      </TableContainer>
*/