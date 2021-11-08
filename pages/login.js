import { Flex, Heading, Input, Box } from '@chakra-ui/react';
import Logo from '../components/Logo';

export default function Login() {
    return (
        <Flex height="80vh" direction="column" alignItems="center" justifyContent="center">
            <Flex mt={8} mb={4}><Logo /></Flex>
            <Flex direction="column" alignItems="center" p={12} bgColor="#E8E8E8" border="0.5px" borderColor="#969696" rounded={6}>
                <Heading mb={6} color="#212121">Login</Heading>
                <Input placeholder="Email" border="none" bg="white" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="email" />
                <Input placeholder="Senha" border="none" bg="white" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="password" />
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