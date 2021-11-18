import { Flex, Heading, Input, Box, Link } from '@chakra-ui/react';
import Logo from '../components/Logo';
import { useAuth } from '../lib/firebase';
import { useRef, useState, Route } from 'react';
import { AuthProvider, login } from '../contexts/AuthContext';


export default function Login() {

    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleLogin() {

        try {
            await login(emailRef.current.value, passwordRef.current.value);
        } catch {
            alert("error");
        }
    }

    return (
        <Flex height="80vh" direction="column" alignItems="center" justifyContent="center">
            <Flex mt={8} mb={4}><Logo /></Flex>
            <Flex direction="column" alignItems="center" p={12} bgColor="#E8E8E8" border="0.5px" borderColor="#969696" rounded={6}>
                <Heading mb={6} color="#212121">Login</Heading>
                <Input placeholder="Email" ref={emailRef} border="none" bg="white" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="email" />
                <Input placeholder="Senha" ref={passwordRef} border="none" bg="white" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="password" />
                <Box as="button"
                    size="md"
                    height="40px"
                    width="278px"
                    color="#FFFFFF"
                    bg="#212121"
                    fontSize="18px"
                    fontWeight="medium"
                    borderRadius="4px"
                    boxShadow="xl"
                    onClick={handleLogin}
                >
                    Enviar
                </Box>
            </Flex>
        </Flex>
    )
};