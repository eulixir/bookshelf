import { Link, VStack, Flex, Text, StackDivider, Box, Button, Image } from '@chakra-ui/react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from 'src/hooks/useAuth';

export default function AuthPage() {
    const { signinGoogle } = useAuth();

    const handleSigninGoogle = () => {
        signinGoogle();
    };

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
                <Button
                    onClick={() => handleSigninGoogle()}
                    backgroundColor="white"
                    color="gray.900"
                    variant="outline"
                    fontWeight="medium"
                    leftIcon={<FaGoogle />}
                    mt={4}
                    _hover={{ bg: 'gray.100' }}
                    _active={{
                        bg: 'gray.100',
                        transform: 'scale(0.95)',
                    }}
                >
                    Continuar com Google
                </Button>
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
