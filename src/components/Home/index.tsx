import React from 'react';
import { Flex, Grid, GridItem, FlexProps } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import Hero from './Hero';
import HomeSection from '../HomeSection';

const CellText: React.FC<{ children: React.ReactNode; style?: FlexProps }> = ({
  children,
  style
}) => (
  <Flex
    margin="auto"
    height="100%"
    alignItems="center"
    width="fit-content"
    {...style}
  >
    {children}
  </Flex>
);

const Home: React.FC = () => {
  return (
    <Flex
      w="100vw"
      h="100%"
      bg="#111111"
      overflowX="hidden"
      overflowY="scroll"
      mt="2rem"
      flexDir="column"
    >
      <Hero />
      <HomeSection />
      {/*<Flex w="90%">
          <Flex p={[0, 12]} m={['0rem', 'auto']} fontSize="1.5rem">
            <Box mb="1rem" fontSize="1.5rem" mx="50px">
            Citius. Altius. Fortius.
            </Box>
            <Box mb="1rem" fontSize="1rem">Faster. Higher. Stronger.</Box>
          </Flex>
      </Flex>*/}
      {/*<Flex p={[0, 12]} m={['1rem', '50px']} fontSize="2rem" maxW="75%">
      
    </Flex>*/}

      {/* <Grid
        mx={['1rem', '5rem']}
        mb="5rem"
        mt="100px"
        bg="#111111"
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']}
        templateRows="repeat(2, 1fr)"
        gap={6}
      >
        
        <GridItem h="300px">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(4, 1fr)"
            h="100%"
            border="1px solid"
            borderColor="brand.gray"
            cursor="pointer"
            _hover={{ color: 'brand.blue', borderColor: 'brand.blue' }}
          >
            <GridItem
              border="1px solid"
              borderColor="brand.gray"
              colSpan={3}
              rowSpan={2}
            >
              <CellText style={{ fontSize: '2rem' }}>The Long Cut</CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              bg="#000"
              rowSpan={3}
            >
              <CellText style={{ width: 'min-content', fontSize: '1.2rem' }}>
                The Long Cut
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem', fontWeight: 400 }}>
                10 AUGUST 2021
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem' }}>
                Curated by Iris Long
              </CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              _hover={{ backgroundColor: 'brand.blue' }}
            >
              <CellText style={{ fontSize: '1.2rem' }}>
                <ArrowForwardIcon fontSize="2.5rem" color="brand.brightGray" />
              </CellText>
            </GridItem>
          </Grid>
        </GridItem>
      
        <GridItem h="300px">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(4, 1fr)"
            h="100%"
            border="1px solid"
            borderColor="brand.gray"
            cursor="pointer"
            _hover={{ color: 'brand.blue', borderColor: 'brand.blue' }}
          >
            <GridItem
              border="1px solid"
              borderColor="brand.gray"
              colSpan={3}
              rowSpan={2}
            >
              <CellText style={{ fontSize: '2rem' }}>The Long Cut</CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              bg="#000"
              rowSpan={3}
            >
              <CellText style={{ width: 'min-content', fontSize: '1.2rem' }}>
                The Long Cut
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem', fontWeight: 400 }}>
                10 AUGUST 2021
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem' }}>
                Curated by Iris Long
              </CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              cursor="pointer"
              _hover={{ backgroundColor: 'brand.blue' }}
            >
              <CellText style={{ fontSize: '1.2rem' }}>
                <ArrowForwardIcon fontSize="2.5rem" color="brand.brightGray" />
              </CellText>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem h="300px">
          <Grid
            templateRows="repeat(4, 1fr)"
            templateColumns="repeat(4, 1fr)"
            h="100%"
            border="1px solid"
            borderColor="brand.gray"
            cursor="pointer"
            _hover={{ color: 'brand.blue', borderColor: 'brand.blue' }}
          >
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              colSpan={3}
              rowSpan={2}
            >
              <CellText style={{ fontSize: '2rem' }}>The Long Cut</CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              bg="#000"
              rowSpan={3}
            >
              <CellText style={{ width: 'min-content', fontSize: '1.2rem' }}>
                The Long Cut
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem', fontWeight: 400 }}>
                10 AUGUST 2021
              </CellText>
            </GridItem>
            <GridItem border="0.5px solid" borderColor="brand.gray" colSpan={3}>
              <CellText style={{ fontSize: '1.2rem' }}>
                Curated by Iris Long
              </CellText>
            </GridItem>
            <GridItem
              border="0.5px solid"
              borderColor="brand.gray"
              cursor="pointer"
              _hover={{ backgroundColor: 'brand.blue' }}
            >
              <CellText>
                <ArrowForwardIcon fontSize="2.5rem" color="brand.brightGray" />
              </CellText>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid> */}
    </Flex>
  );
};

export default Home;
