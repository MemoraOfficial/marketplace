import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import ReactPlayer from 'react-player';

const vid_url = 'https://vimeo.com/580763194';

const Hero: React.FC = () => {
  return (
    <Flex direction={['column-reverse', 'row']}>
      <Flex
        justifyContent="start"
        h={['100%', '100%', '100vh']}
        width={'100vw'}
      >
        {/* <ReactPlayer
          url={vid_url}
          width="100vw"
          height="100%"
          playing={true}
          loop={true}
        /> */}
        {/*<Iframe source={vid_url}/>*/}
        <Flex w="100vw" justify="center">
          <Flex direction="column" justify="center" m="auto" mx={8} w="60vw">
            <Box mt="1rem" fontSize="4.5rem" textAlign="center">
              MEMORA
            </Box>
            <Box mt="1rem" fontSize="2rem" textAlign="center">
              Digitally memorialize your collectables
            </Box>
            <Box mt="1rem" fontSize="1rem" textAlign="center">
              Memora enables creators and collectors by providing accessible
              legal infrastructure, tokenization protocols, and business logic
              to power W3 commercial economies.
            </Box>
            <Box mt="1.2rem" fontSize="1.2rem" textAlign="center">
              Join Our Beta Today!
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
