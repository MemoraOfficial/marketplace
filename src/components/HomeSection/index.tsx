import React, { useRef } from 'react';
import { Flex, Box } from '@chakra-ui/react';
import image from '../common/assets/new_logo_2.jpeg';

const HomeSection: React.FC = () => {
  const step1 = useRef(null);
  const step2 = useRef(null);
  const step3 = useRef(null);
  return (
    <>
      <Flex direction={['column-reverse', 'row']}>
        <Flex
          justifyContent="start"
          h={['25%', '25%', '25vh']}
          width={'100vw'}
          flexDirection="column"
        >
          <Flex w="100vw" justify="center">
            <Flex direction="column" justify="center" m="auto" mx={8} w="60vw">
              <Box mt="1rem" fontSize="2rem" textAlign="center">
                Your collections is your business!
              </Box>
              <Box mt="1rem" fontSize="1rem">
                The Memora Protocol uniquely combines digital smart contracts
                and asset identity tokens for real-world, physical assets with
                custody, authentication, dispute resolution and transaction
                warranties. We empower private and public art collectors to
                experience a memorable digital economy for the arts. Launching
                Q1 2022
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={['column-reverse', 'row']}>
        <Flex justifyContent="start" width={'100vw'} flexDirection="column">
          <Flex w="100vw" justify="center">
            <Flex direction="column" justify="center" m="auto" mx={8} w="100vw">
              <Box mt="4rem" fontSize="2rem" textAlign="center">
                Introducing Memora NFT
              </Box>
              <Box
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                backgroundPosition="top center"
                backgroundImage={`url(${image})`}
                height="80vh"
                width="100vw"
                backgroundAttachment="fixed"
              />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={['column-reverse', 'row']} mt={40}>
        <Flex justifyContent="start" h={['25%', '25%', '25vh']} width={'100vw'}>
          <Flex w="100vw" justify="center">
            <Flex direction="row" justify="center" m="auto" mx={8} w="75vw">
              <Box m={5}>
                <Box mt="1rem" fontSize="1.75rem">
                  Private Property NFTs
                </Box>
                <Box mt="1rem" fontSize="1rem">
                  Establish ownership and provenonce of your art collections.
                  Mint your private Memora tokens and make your creations be
                  known!
                </Box>
              </Box>
              <Box m={5}>
                <Box mt="1rem" fontSize="1.75rem">
                  Phygital Modeling
                </Box>
                <Box mt="1rem" fontSize="1rem">
                  Capture the state of your asset by modeling your property and
                  increase asset awareness for the Metaverse and Web 3.0
                  experience.
                </Box>
              </Box>
              <Box m={5}>
                <Box mt="1rem" fontSize="1.75rem">
                  Attestation
                </Box>
                <Box mt="1rem" fontSize="1rem">
                  Enabling expert attestation to build ontological knowledge
                  graphs atop Memora NFTs.
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={['column-reverse', 'column']} mt={40}>
        <Box mt="1rem" fontSize="1.75rem" width={'100vw'}>
          <Flex w="100vw" justify="center">
            Memora Applications
          </Flex>
        </Box>
        <Flex justifyContent="start" h={['25%', '25%', '25vh']} width={'100vw'}>
          <Flex w="100vw" justify="center">
            <Flex direction="row" justify="center" m="auto" w="75vw">
              <Box m={5} bgColor="#555555" borderRadius={15}>
                <Flex direction="column" justify="center">
                  <Box m="2rem" fontSize="1rem" textAlign="center">
                    Memora Exchange Real-World NFT marketplace enabling
                    frictionless trade and disputes resolution.
                  </Box>
                </Flex>
              </Box>
              <Box m={5} bgColor="#555555" borderRadius={15}>
                <Flex direction="column" justify="center">
                  <Box m="2rem" fontSize="1rem" textAlign="center">
                    Memora DEFI Enabling financial services for collectors of
                    time.
                  </Box>
                </Flex>
              </Box>
              <Box m={5} bgColor="#555555" borderRadius={15}>
                <Flex direction="column" justify="center">
                  <Box m="2rem" fontSize="1rem" textAlign="center">
                    Memora Social Powered by verified social proofs. Cardfax,
                    Factfax
                  </Box>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex direction={['column-reverse', 'column']} mt={60}>
        <Box mt="1rem" fontSize="1.75rem" width={'100vw'}>
          <Flex w="100vw" justify="center">
            Powered by the OG Experts
          </Flex>
          <Flex w="75vw" justify="center" width="100vw">
            <Box fontSize="0.9rem" width="60vw">
              Our experts will utilize qualitative and quantitative data sets
              provided by the collectors to assess insurable and tradable value.
              Empowering OG collectors to attest to their opinions of a grade
              facilitate smoother secondary markets.
            </Box>
          </Flex>
        </Box>
        <Flex
          justifyContent="start"
          h={['25%', '25%', '25vh']}
          width={'100vw'}
          mt={8}
          mb={80}
        >
          <Flex w="100vw" justify="center">
            <Flex direction="row" justify="center" m="auto" w="75vw">
              <Box m={5} mr={16} bgColor="#555555" borderRadius={15} maxW="25%">
                <Flex direction="column" justify="center">
                  <Box m="1rem" mb="0.5rem" fontSize="2rem" textAlign="center">
                    STEP 1
                  </Box>
                  <Box
                    m="2rem"
                    mt="0.5rem"
                    fontSize="1rem"
                    textAlign="center"
                    ref={step1}
                  >
                    Create a memora NFT and upload your asset files and proofs
                    of provenance. Demand OG services.
                  </Box>
                </Flex>
              </Box>
              <Box m={5} mr={16} bgColor="#555555" borderRadius={15} maxW="25%">
                <Flex direction="column" justify="center">
                  <Box
                    m="1rem"
                    mb="0.5rem"
                    fontSize="2rem"
                    textAlign="center"
                    ref={step2}
                  >
                    STEP 2
                  </Box>
                  <Box m="2rem" mt="0.5rem" fontSize="1rem" textAlign="center">
                    Enable oracle experts locally to establish proofs of
                    authenticity and grade of the asset and posting Grade Report
                    on NFT.
                  </Box>
                </Flex>
              </Box>
              {/* <Xarrow start={step1} end={step2} color="#eee" /> */}
              <Box
                ref={step3}
                m={5}
                bgColor="#555555"
                borderRadius={15}
                maxW="25%"
              >
                <Flex direction="column" justify="center">
                  <Box m="1rem" mb="0.5rem" fontSize="2rem" textAlign="center">
                    STEP 3
                  </Box>
                  <Box m="2rem" mt="0.5rem" fontSize="1rem" textAlign="center">
                    Memora Social Powered by verified social proofs. Cardfax,
                    Factfax
                  </Box>
                </Flex>
              </Box>
              {/* <Xarrow start={step2} end={step3} color="#eee" /> */}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeSection;
