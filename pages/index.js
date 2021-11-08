import { Link, VStack, Flex, Text, StackDivider, Box, Button, ButtonGroup, Image } from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

export default function Home() {

  return (
    <Flex boxShadow="xl" rounded="md" bg="white">
      <Box p="140">
        <Text
          fontSize="34px"
          fontWeight="medium">
          Conecte-se em uma rede social para Amantes de Livros
        </Text>
      </Box>

      <VStack p="100" mr="35"
        divider={<StackDivider borderColor="white" />}
        spacing={1}
        align="stretch"
      >
        <Box mb="30">
          <Image boxSize="100px" objectFit="cover" src="./logo.png" />
          <Text fontSize="50px" color="black" fontWeight="bold">BookShelf</Text>
        </Box>
        <Box as="button"
          size="md"
          height="40px"
          width="278px"
          color="#FFFFFF"
          bg="#212121"
          fontSize="18px"
          fontWeight="medium"
          borderRadius="4px"
          href="signup"
        >
          CADASTRAR
        </Box>
        <Button colorScheme="facebook" leftIcon={<FaFacebook />}
          height="40px"
          width="278px"
          fontSize="18px"
        >
          facebook
        </Button>
        <Button leftIcon={<FaTwitter />} colorScheme="twitter"
          height="40px"
          width="278px"
          fontSize="18px"
        >
          twitter
        </Button>
        <Box>
          <Link href="/login">Já possuo uma conta</Link>
        </Box>
      </VStack>
    </Flex >
  );
}
