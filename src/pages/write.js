import { Flex, Box, Heading, Input, Text, Button, Image } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useState } from 'react';

export default function Books(props) {
    const [books, setBooks] = useState(['']);
    const [livro, setLivro] = ['livro1'];

    // Api GraphQL
    fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
            'Authorization': 'aa46008d60bb2aeeecbd5ef2d4d140',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            "query": `query {
                    allBooks(orderBy: _createdAt_DESC) {
                      _publishedAt
                      id
                      titulo
                      updatedAt
                      capa
                      conteudo
                    }
                  }` })
    })

    return (
        <>
            <Layout>
                <Flex height="60vh" direction="column" alignItems="center" justifyContent="center">
                    <Flex direction="column" alignItems="center" p={12} border="0.5px" rounded={6}>
                        <Box>
                            <form onSubmit={function handleCriaLivro(e) {
                                e.preventDefault();
                                const livrosAtt = [...livro, 'livro1']
                                setLivro(livrosAtt)

                                const dadosDoForm = new FormData(e.target);

                                const book = {
                                    titulo: dadosDoForm.get('titulo'),
                                    capa: dadosDoForm.get('capa'),
                                    autor: user.email,
                                    conteudo: dadosdoForm.get('conteudo')
                                }

                                fetch('/api/books', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(book)
                                })
                                    .then(async (response) => {
                                        const dados = await response.json();
                                        console.log(dados.registroCriado);
                                        const book = dados.registroCriado;
                                        const booksAtualizados = [...books, book];
                                        setBooks(booksAtualizados)
                                    })
                            }}>
                                <Box>
                                    <Input placeholder="Título da Obra" name="titulo" border="0.5px solid black" bg="#f5f5f5" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="text" />
                                </Box>

                                <Box>
                                    <Input placeholder="Url da Capa" name="capa" border="0.5px solid black" bg="#f5f5f5" mb={6} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="text" />
                                </Box>

                                <Box>
                                    <Input placeholder="Conteúdo" name="conteudo" border="0.5px solid black" bg="#f5f5f5" mb={8} isRequired errorBorderColor="crimson" focusBorderColor="black" boxShadow="xl" type="textarea" />
                                </Box>

                                <Button
                                    backgroundColor="#f5f5f5"
                                    color="black"
                                    width="240px"
                                    fontSize="18px"
                                    fontWeight="medium"
                                    variant="outline"
                                    focusBorderColor="black" boxShadow="xl"
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
                        <Box>
                            <h2>
                                Livros ({books.length})
                            </h2>
                            <ul>
                                {books.map((itemAtual) => {
                                    return (
                                        <li key={itemAtual.titulo}>
                                            <a href={`/books/${itemAtual.titulo}`} key={itemAtual.title}>
                                                <Image src={itemAtual.capa} />
                                                <Text>{itemAtual}</Text>
                                            </a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </Box>
                    </Flex>
                </Flex>
            </Layout>
        </>
    )
}
