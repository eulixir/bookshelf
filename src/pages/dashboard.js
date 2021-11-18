import Nav from '../components/Nav';
import { Flex, Button, Box, Heading, Input, Text, Textarea, Avatar } from '@chakra-ui/react';

function Dashboard() {

    return (
        <>
            <Nav />
            <Flex direction="column" alignItems="center" p={10}>
                <Textarea border="1px solid black" mb={4} placeholder="Qual seu livro favorito?" />
                <Button height="30px"
                    width="100px"
                    fontSize="18px"
                    bg="white"
                    border="black 0.5px solid"
                >POSTAR
                </Button>
            </Flex>
            <Flex p={8} border="0.1px solid gray">
                <Avatar src="https://bit.ly/sage-adebayo" />
                <Box ml="5">
                    <Text fontWeight="bold">
                        Nome
                    </Text>
                    <Text fontSize="sm">Usuário</Text>
                </Box>
                <Box ml="3">
                    <Text>Texto do post</Text>
                </Box>
            </Flex>
        </>
    )
}

export default Dashboard;