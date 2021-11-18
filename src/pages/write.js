import { Flex, Box, Heading, Input, Text } from '@chakra-ui/react';
import Nav from '../components/Nav';
import db from '../lib/firebase';

function Write() {

    return (
        <>
            <Nav />
            <Box>
                <form onSubmit={function handleCriaLivro(e) {
                    e.preventDefault();
                    const dadosDoForm = new FormData(e.target);

                    const livro = {
                        title: dadosDoForm.get('title'),
                        imageUrl: dadosDoForm.get('capa'),
                        autor: user,
                        conteudo: dadosdoForm.get('conteudo')
                    }

                    fetch('/api/livros', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(livro)
                    })
                        .then(async (response) => {
                            const dados = await response.json();
                            console.log(dados.registroCriado);
                            const livro = dados.registroCriado;
                            const livrosAtualizados = [...livros, livro];
                            setComunidades(livrosAtualizados)
                        })
                }}>

                    <div>
                        <input placeholder="Nome da obra"
                            name="title" aria-label="Qual vai ser o nome da obra?"
                            type="text" />
                    </div>

                    <div>
                        <input placeholder="Capa da obra"
                            name="image" aria-label="Coloque uma imagem para capa"
                        />
                    </div>

                    <div>
                        <input placeholder="Coloque um pdf para o conteúdo do livro"
                            name="conteudo" aria-label="Coloque uma URL para usarmos de capa"
                        />
                    </div>

                    <button>
                        Lançar Obra
                    </button>

                </form>
            </Box>
        </>
    )
}

export default Write;