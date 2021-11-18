import NextLink from 'next/link';
import {
    Box,
    Flex,
    HStack,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Stack,
    Center,
    Image
} from '@chakra-ui/react';
import { FaShoppingCart, FaBell, FaRegCommentAlt, FaHome } from 'react-icons/fa';
import useAuth from 'src/hooks/useAuth';
import Auth from './Auth';

const NavLink = ({ children }) => (

    <Link
        px={2}
        py={1}
        rounded={'md'}
        color="white"
        _hover={{
            textDecoration: 'none',
            border: '1px white solid',
        }}
        href={'#'}>
        {children}
    </Link>
);

export default function Nav() {
    const { user, signout } = useAuth();
    return (
        <>
            <Box bg={'black'} px={6}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <HStack spacing={430} alignItems={'center'}>
                        <Box><Link href="/dashboard"><Image boxSize="50px"
                            objectFit="cover" src="./logowhite.png"></Image></Link></Box>

                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            <NavLink href="/dashboard"><FaHome size={30} /></NavLink>
                            <NavLink href="/shop"><FaShoppingCart size={30} /></NavLink>
                            <NavLink href="/write"><Image boxSize="50px" objectFit="cover" src="./penicon.png"></Image></NavLink>
                            <NavLink href="/notification"><FaBell size={30} /></NavLink>
                            <NavLink href="/messages"><FaRegCommentAlt size={30} /></NavLink>
                            <NextLink href="/write" passHref>
                                <Link mr={4}><Image boxSize="50px" objectFit="cover" src="./penicon.png"></Image></Link>
                            </NextLink>
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>

                            <Menu>
                                <MenuButton
                                    as={Avatar}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    name={'luiz'}
                                    src={'https://picsum.photos/200/300'}
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'3xl'}
                                            src={'https://picsum.photos/200/300'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>user</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem><Link href="/profile">Perfil</Link></MenuItem>
                                    <MenuItem onClick={() => signout()} >Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}