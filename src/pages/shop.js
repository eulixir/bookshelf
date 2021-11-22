import Nav from '../components/Nav';
import Layout from '../components/Layout'
import { Flex, Box, Heading, Input, Text, Button } from '@chakra-ui/react';

function Shop() {

    return (
        <Layout>
            <Flex height="60vh" direction="column" alignItems="center" justifyContent="center">
                <Flex direction="column" alignItems="center" p={12} border="0.5px" rounded={6}>
                    <Box>
                        <Heading>Em breve</Heading>
                    </Box>
                </Flex>
            </Flex>
        </Layout>
    )
}

export default Shop;