import {
  Flex,
  Box,
  Heading,
  Input,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useState } from 'react';
import Cookies from 'js-cookie';

export default function Books() {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = (e) => {
    e.preventDefault();

    const email = Cookies.get('email');
  };

  return (
    <>
      <Layout>
        <Flex
          height="60vh"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            direction="column"
            alignItems="center"
            p={12}
            border="0.5px"
            rounded={6}
          >
            <Box>
              <form onSubmit={handleCreate}>
                <Box>
                  <Input
                    placeholder="Título da Obra"
                    onChange={(e) => setTitle(e.target.value)}
                    name="titulo"
                    border="0.5px solid black"
                    bg="#f5f5f5"
                    mb={6}
                    isRequired
                    errorBorderColor="crimson"
                    focusBorderColor="black"
                    boxShadow="xl"
                    type="text"
                  />
                </Box>

                <Box>
                  <Input
                    placeholder="Url da Capa"
                    name="capa"
                    border="0.5px solid black"
                    onChange={(event) => setUrl(event.target.value)}
                    bg="#f5f5f5"
                    mb={6}
                    isRequired
                    errorBorderColor="crimson"
                    focusBorderColor="black"
                    boxShadow="xl"
                    type="text"
                  />
                </Box>

                <Box>
                  <Input
                    placeholder="Conteúdo"
                    onChange={(event) => setDescription(event.target.value)}
                    name="conteudo"
                    border="0.5px solid black"
                    bg="#f5f5f5"
                    mb={8}
                    isRequired
                    errorBorderColor="crimson"
                    focusBorderColor="black"
                    boxShadow="xl"
                    type="textarea"
                  />
                </Box>

                <Button
                  backgroundColor="#f5f5f5"
                  color="black"
                  width="240px"
                  fontSize="18px"
                  fontWeight="medium"
                  variant="outline"
                  type="submit"
                  focusBorderColor="black"
                  boxShadow="xl"
                  _hover={{ bg: 'green.300' }}
                  _active={{
                    bg: 'green.100',
                    transform: 'scale(0.95)',
                  }}
                >
                  LANÇAR OBRA
                </Button>
              </form>
            </Box>
          </Flex>
        </Flex>
      </Layout>
    </>
  );
}
