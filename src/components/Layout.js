import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Nav from './Nav';

function Layout({ children }) {
    const bgColor = '#F4F6F8';

    return (
        <Box bgColor={bgColor} minH="100vh">
            <Nav />
            <Box>
                {children}
            </Box>
        </Box>
    );
}

export default Layout;