const API_URL = 'https://graphql.datocms.com/';
const API_TOKEN = process.env.aa46008d60bb2aeeecbd5ef2d4d140;

async function fetchCmsAPI(query, { variables } = {}) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    throw new Error('Failed to fetch API');
  }

  return json.data;
}

export async function getAllBooks() {
  const data = await fetchCmsAPI(`
    {
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
    }
  `);

  return data.allBooks;
}

export default { getAllBooks };