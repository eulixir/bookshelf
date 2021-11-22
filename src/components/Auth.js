import { Link, VStack, Flex, Text, StackDivider, Box } from '@chakra-ui/react';
import Logo from '../components/Logo';

export default function AuthPage() {

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
                    <Logo />
                    <Text fontSize="50px" color="black" fontWeight="bold">BookShelf</Text>
                </Box>
                <Link href="/signup"><Box as="button"
                    size="md"
                    height="40px"
                    width="278px"
                    color="#FFFFFF"
                    bg="#212121"
                    fontSize="18px"
                    fontWeight="medium"
                    borderRadius="4px"
                    href="/signup"
                >
                    CADASTRAR
                </Box>
                </Link>
                <Link href="/login"><Box as="button"
                    size="md"
                    height="40px"
                    width="278px"
                    color="#FFFFFF"
                    bg="#212121"
                    fontSize="18px"
                    fontWeight="medium"
                    borderRadius="4px"
                    href="/login"
                >
                    ENTRAR
                </Box>
                </Link>
            </VStack>
        </Flex >
    )
}
