import { Flex, Box, Heading, Input, Text } from '@chakra-ui/react';
import Logo from '../components/Logo';

export default function SignUp() {
    return (
        <Flex height="80vh" direction="column" alignItems="center" justifyContent="center">
            <Flex mt={8} mb={4}><Logo /></Flex>
            <Flex direction="column" alignItems="center" border="1px" borderColor="black" bgColor="#E8E8E8" p={8} rounded={6}>

                <Heading mb={6} color="#212121">Cadastrar</Heading>

                <Input placeholder="Usuário" border="none" bg="white" mb={3} type="text" focusBorderColor="black" boxShadow="xl"
                    isRequired errorBorderColor="crimson" />

                <Input placeholder="Email" border="none" bg="white" mb={3} focusBorderColor="black" boxShadow="xl"
                    isRequired errorBorderColor="crimson" type="email" />

                <Input placeholder="Senha" border="none" bg="white" boxShadow="xl" focusBorderColor="black"
                    errorBorderColor="crimson" isRequired mb={6} type="password" />

                <Box as="button"
                    size="md"
                    height="40px"
                    width="278px"
                    color="#FFFFFF"
                    bg="#212121"
                    fontSize="18px"
                    fontWeight="medium"
                    borderRadius="4px"
                    href="dashboard"
                    boxShadow="xl"
                >
                    Enviar
                </Box>
            </Flex>
        </Flex>
    )
};