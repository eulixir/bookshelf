import Layout from 'src/components/Layout';
function BookPage({ book }) {
  return (
    <Layout
      title={book.titulo}
      path={`/${book.slug}`}
      conteudo={book.conteudo}
    ></Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const slug = params?.slug;
  const books = await getAllBooks();
  const book = books.find((s) => s.slug === slug) || null;

  if (!book) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      book,
      allBoooks: books,
    },
    revalidate: 60,
  };
};

export const getStaticPaths = async () => {
  const books = await getAllBooks();
  const slugs = books.map((s) => ({ params: { slug: s.slug } }));

  return {
    paths: slugs,
    fallback: false,
  };
};

export default BookPage;
