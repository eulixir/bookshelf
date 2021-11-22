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

import { FaShoppingCart, FaBook, FaRegCommentAlt, FaHome } from 'react-icons/fa';
import useAuth from 'src/hooks/useAuth';
import { logout } from '../lib/firebase';
import { useRouter } from 'next/router';



export default function Nav() {
    const { user } = useAuth();
    const router = useRouter();

    async function handleLogout() {
        try {
            router.push('/');
        } catch {
            alert("Error");
        }
    }

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
                            <NextLink href="/dashboard" passHref>
                                <Link mr={8}><FaHome size={30} color="#ffffff" /></Link>
                            </NextLink>
                            <NextLink href="/shop" passHref>
                                <Link mr={8}><FaShoppingCart color="#ffffff" size={30} /></Link>
                            </NextLink>
                            <NextLink href="/write" passHref>
                                <Link ml={8} mr={8}><Image boxSize="50px" objectFit="cover" src="./penicon.png"></Image></Link>
                            </NextLink>
                            <NextLink href="/book/slug" passHref>
                                <Link mr={8}><FaBook color="#ffffff" size={30} /></Link>
                            </NextLink>
                            <NextLink href="/messages" passHref>
                                <Link><FaRegCommentAlt color="#ffffff" size={30} /></Link>
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
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
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
                                    <MenuItem as='button' onClick={handleLogout} >Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}