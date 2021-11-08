import { Image } from '@chakra-ui/react';

export function Logo() {
    return (
        <Image boxSize="150px"
            objectFit="cover" src="./logo.png">

        </Image>
    )
};

export default Logo;