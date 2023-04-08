import { Grid, GridItem, Icon, Link, ResponsiveValue, Table, TableContainer, Text, Th, Thead, Tr } from "@chakra-ui/react";
import NextLink from 'next/link';
import { MdDownload } from 'react-icons/md';

import { Header } from "../components";
import { AppComponentProps } from "./_app";

const NUMBER_OF_COLUMNS = 6
const HALF_SPAN = NUMBER_OF_COLUMNS / 2
const SHARED_COL_SPAN: ResponsiveValue<number | "auto"> = [NUMBER_OF_COLUMNS, null, null, HALF_SPAN]

const TextGridItem = ({ title, value }: { title: string; value: string | JSX.Element }) => (
  <Text><b>{title}:</b> {value}</Text>
)

export default function Resume({ navOnOpen }: AppComponentProps) {
  return (
    <>
      <Header onOpen={navOnOpen} subText='Download My Resume!' />
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
        <GridItem colSpan={SHARED_COL_SPAN}>
          <TextGridItem title="Phone" value="(516) 232-6709" />
        </GridItem>
      </Grid>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>
                Directions
              </Th>
              <Th>
                Distance
              </Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
    </>
  )
}

/*
<TableContainer>
  <Table variant='simple'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>inches</Td>
        <Td>millimetres (mm)</Td>
        <Td isNumeric>25.4</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
*/