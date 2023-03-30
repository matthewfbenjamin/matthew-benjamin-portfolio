import { Box, Flex, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

type SectionLinks = { name: string; url: string; description: string; }
type SectionAppletProps = { imageUrl: string; sectionTitle: string; sectionLinks: SectionLinks[] }

const SectionApplet = ({ imageUrl, sectionTitle, sectionLinks = [] }: SectionAppletProps) => {
  return (
    <Flex flexDir="column">
      <Flex justifyContent="space-between" width="100%" alignItems="flex-end" mb="-1.5">
        <Box
          pos="relative"
          borderWidth={8}
          borderStyle="solid"
          borderColor="primary"
          borderRadius="50%"
          overflow="hidden"
          height="20"
          width="50%"
          backgroundImage={`url(\"${imageUrl}\")`}
          backgroundPosition="center center"
          backgroundSize="cover"
        />
        <Link
          borderRadius="50%"
          borderWidth={4}
          borderStyle="solid"
          borderColor="primary"
          background="blue.200"
          fontStyle="italic"
          fontWeight="extrabold"
          px="3"
          py="2"
          fontFamily="sans-serif"
        >
          Let&apos;s Go!
        </Link>
      </Flex>
      <Box
        p="2"
        borderWidth="16px 8px 8px 8px"
        borderStyle="solid"
        borderColor="primary"
      >
        <Text fontWeight="bold" fontSize='3xl'>
          {sectionTitle}
        </Text>
        {sectionLinks.length > 0 ? (
          <UnorderedList listStylePosition="inside" m={0}>
            {sectionLinks.map((sectionLink) => (
              <ListItem key={sectionLink.name} fontSize="2xl">
                <Link href={sectionLink.url} target="_blank" rel="noreferrer" color="blue" textDecoration="underline">
                  {sectionLink.name}
                </Link>
                <Text display="inline">&nbsp; ({sectionLink.description})</Text>
              </ListItem>
            ))}
          </UnorderedList>
        ) : null}
      </Box>
    </Flex>
  )
}

export default SectionApplet;
