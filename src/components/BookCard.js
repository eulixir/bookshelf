import { useRouter } from 'next/router';
import { Box, Badge, Image, Text } from '@chakra-ui/react';

function BookCard({ book }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`//${book.slug}`);
  };

  return (
    <Box
      onClick={handleClick}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      cursor="pointer"
    >
      <Image src={book.thumbUrl.url} alt={book.title} />
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            Novo
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {book.seasons.length} temporada(s)
          </Box>
        </Box>

        <Box my={2} fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
          {book.titulo}
        </Box>
        <Text
          style={{
            display: '-webkit-box',
            '-webkit-line-clamp': '3',
            overflow: 'hidden',
            '-webkit-box-orient': 'vertical',
          }}
          fontSize="sm"
        >
          {' '}
          {book.conteudo}
        </Text>
      </Box>
    </Box>
  );
}

export default BookCard;
