import { Flex, Box, Heading, Input, Text } from '@chakra-ui/react';
import { signup, useAuth } from "../lib/firebase";
import Logo from '../components/Logo';
import { useRef, useState, Route, Router } from 'react';
import { useRouter } from 'next/router';
export default function SignUp() {

    const emailRef = useRef();
    const passwordRef = useRef();
    const router = useRouter();

    async function handleSignup() {

        try {
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(() => {
                    router.push('/dashboard');
                })
        } catch {
            alert("Error");
        }
    }

    return (
        <Flex height="80vh" direction="column" alignItems="center" justifyContent="center">
            <Flex mt={8} mb={4}><Logo /></Flex>
            <Flex direction="column" alignItems="center" border="1px" borderColor="black" bgColor="#E8E8E8" p={8} rounded={6}>

                <Heading mb={6} color="#212121">Cadastrar</Heading>

                <Input ref={emailRef} placeholder="Email" border="none" bg="white" mb={3} focusBorderColor="black" boxShadow="xl"
                    isRequired errorBorderColor="crimson" type="email" />

                <Input ref={passwordRef} placeholder="Senha" border="none" bg="white" boxShadow="xl" focusBorderColor="black"
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
                    boxShadow="xl"
                    onClick={handleSignup}
                >
                    Enviar
                </Box>
            </Flex>
        </Flex>
    )
};