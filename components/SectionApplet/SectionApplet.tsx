import { Box, Flex, FlexProps, Link, ListItem, Text, UnorderedList } from "@chakra-ui/react";

type SectionLinks = { name: string; url: string; description: string; }
interface SectionAppletProps extends FlexProps { imageUrl: string; sectionTitle: string; sectionLinks: SectionLinks[] }

const SectionApplet = ({ imageUrl, sectionTitle, sectionLinks = [], ...rest }: SectionAppletProps) => {
  return (
    <Flex flexDir="column" {...rest}>
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
          px="2"
          py="1"
          fontFamily="sans-serif"
          href="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/61ddbb10b10b2958cfb75afa_k6keaSHL8_BcvdOGQBcYvpJjo67edGz4fbGwoLvP3X7e4wj-n1lXQffjq_oKH7ijOLXjEvmIgTl4DSwWbV6ZVoyMXs1wPBo8Gg-PkyHXDvNwpir8kQASNfAiOOtadwzwSruAtGWm.png"
          target="_blank"
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
