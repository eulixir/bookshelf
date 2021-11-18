import Nav from '../../components/Nav';
import getStaticProps from 'index';
import getAllBooks from '../../lib/dato-cms';
import Layout from '../../components/Layout';
import React from 'react';

export default function Libros(books) {
    const [books, setBooks] = React.useState([]);

    React.useEffect(function () {
        fetch('https://api.github.com/users/luiz1gustavo2/followers')
            .then(function (respostaDoServidor) {
                return respostaDoServidor.json();
            })
            .then(function (respostaCompleta) {
                setSeguidores(respostaCompleta);
            })

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
            allBooks {
                id
                titulo
                capa {
                  url
                }
                createdAt
                conteudo {
                  url
                }
                _status
                _firstPublishedAt
              }
            
              _allBooksMeta {
                count
              }
            }` })
        })
            .then((response) => response.json())
            .then((respostaCompleta) => {
                const livrosVindasDoDato = respostaCompleta.data.allBooks;
                console.log(livrosVindasDoDato)
                setBooks(livrosVindasDoDato)
            })
    }, [])

    return (
        <Layout>
            <div>
                <Box title="Seguidores" items={seguidores} />
                <Box>
                    <h2>
                        Livros ({livros.length})
                    </h2>
                    <ul>
                        {livros.map((itemAtual) => {
                            return (
                                <li key={itemAtual.id}>
                                    <a href={`/livros/${itemAtual.id}`} key={itemAtual.title}>
                                        <img src={itemAtual.imageUrl} />
                                        <span>{itemAtual.title}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Box>
                <Box>

                    <ul>
                        {pessoasFavoritas.map((itemAtual) => {
                            return (
                                <li key={itemAtual}>
                                    <a href={'/users/${itemAtual}'} key={itemAtual}>
                                        <img src={`https://github.com/${itemAtual}.png`} />
                                        <span>{itemAtual}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </Box>
            </div>
        </Layout>
    )

}

export const getStaticProps = async () => {
    const books = await getAllBooks();
    return {
        props: {
            books,
        },
        revalidate: 120,
    };
};

export default Shop;