import React from 'react';
import { Flex, Box, FlexProps, Text, Link } from '@chakra-ui/react';

import parth_photo from '../common/assets/photo.jpeg';
import innofund from '../common/assets/innofund.jpg';

const AboutUs: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#111', color: 'white' }}>
      <Flex minHeight="100vh" direction={['column', 'row']}>
        <Flex
          width={['100%', '25%']}
          mt="5rem"
          borderTop="1px solid"
          borderBottom="1px solid"
          borderRight="1px solid"
          borderColor="white"
          flexDirection="column"
        >
          <Flex
            fontSize="3rem"
            marginLeft={'3rem'}
            marginRight={['3rem', 'auto']}
            marginTop="5rem"
            width="100%"
            height="100vh"
          >
            About
          </Flex>
          <Flex
            fontSize="3rem"
            marginLeft={'3rem'}
            marginRight={['3rem', 'auto']}
            marginTop="5rem"
            width="100%"
            height="100vh"
          >
            Founders
          </Flex>
        </Flex>

        <Flex
          width={['100%', '75%']}
          borderTop="1px solid"
          borderBottom="1px solid"
          borderColor="white"
          mt="5rem"
          flexDirection="column"
        >
          <Flex
            direction="column"
            fontSize="1.2rem"
            marginLeft={['3rem', '5rem']}
            maxWidth={['100%', '70%']}
            marginRight={['3rem', 'auto']}
            marginTop={['2rem', '12rem']}
            marginBottom="6rem"
          >
            <div style={{ fontSize: '1.3rem' }}>
              MEMORA is the portal for managing your Digital collections of your
              Physical collectables. Utilizing NFT, blockchain and an immutable
              ledger technology, a memorable experience of your carefully
              curated cards, music, estate documents, almost anything... will be
              able to be preserved and kept under military grade security
              protocol layers, or shared via W3 Metaverse infrastructure.
              Bringing the ability to unlock, understand and uniquely create a
              collection of who you are, digitally & physically, will be the
              light Memora will share with the world.
            </div>
          </Flex>

          <Flex
            direction="column"
            fontSize="1.2rem"
            marginLeft={['3rem', '5rem']}
            maxWidth={['100%', '70%']}
            marginRight={['3rem', 'auto']}
            marginTop={['2rem', '12rem']}
            marginBottom="6rem"
          >
            <Box
              backgroundSize="cover"
              backgroundPosition="top center"
              backgroundImage={`url(${parth_photo})`}
              borderRadius="50%"
              height="250px"
              width="250px"
            />
            <Box fontSize="0.9rem" m="1rem">
              <Text fontSize="1.5rem" textDecoration="underline" mb="1rem">
                Parth Patel
              </Text>
              Parth has a background in finance and macroeconomic analysis. He
              began trading stocks in honor of his Father and quickly traveled
              down the rabbit hole and quickly discovered how the financial
              system operates within fiat constructs. He caught up on the
              historical use cases of money, and applied his studies of
              Philosophy and Economics from Ohio State University to realize the
              core elements of stability within a chaotic system. He started his
              crypto adventures by co-founding a marketing consulting startup by
              the name of Crypton Research in 2017. He gained valuable
              experience learning about distributed ledger technologies within
              healthcare, geographical mapping, media consumption, and commerce.
              Upon the realization that financial charts are a product of
              manifestation, valued within financial and social models, he
              immersed himself into existing economic niches. He found his
              passion following a financial transaction to purchase a socially
              admired entity- namely, LeBron James.
            </Box>
            <Box fontSize="0.9rem" m="1rem">
              He founded Memora at the beginning of 2021 to create applications
              and apply NFT constructs to preserving personal property and
              establish machine learning models for smart recognition of the
              state of an asset. He believes that the consumer model of business
              is a relic of the past and that the world is evolving to perceive
              time from a collector perspective. Consuming resonates with lack
              of will, whereas collecting is done with intention and application
              of will. Imposition of will can often be harmful if outside one's
              stochastic limits, but when applied for the social benefit for
              humankind- the effects to be seen. He believes that by securing
              collectors private property, there will be clarity on items which
              are worth collecting and manifest high energy collections for the
              future. As Founder and CEO of Memora he is dedicated to providing
              value for all collectors of time.
            </Box>
          </Flex>

          <Flex
            direction="column"
            fontSize="1.2rem"
            marginLeft={['3rem', '5rem']}
            maxWidth={['100%', '70%']}
            marginRight={['3rem', 'auto']}
            marginTop={['2rem', '12rem']}
            marginBottom="6rem"
          >
            <Box fontSize="0.9rem" m="1rem">
              <Text fontSize="1.5rem" textDecoration="underline" mb="1rem">
                Lennon Pierce
              </Text>
              Having worn multiple hats through his corporate career, Lennon has
              developed a diverse skill set that is quite unique. Executive
              Chef, Risk Manager for a fortune 500 company, data consultant for
              Oregon Health Authority that worked with CMS (Center for Medicaid
              Services) during opioid epidemic, actuary for multi billion dollar
              companies and cities, commissioned artist, multi-decade musician
              and most importantly a dad. Double majoring in math and physics
              concurrently working forty to fifty hours a week as a chef, Lennon
              completed his Bach of Science from Southern Oregon University, and
              then chose to pursue his financial market interest by attending
              Rutgers, The State University of New Jersey for his Master’s of
              Quantitative Finance Degree, completing a semester early. From an
              early knack in elementary school for numbers and patterns, to the
              artistic side of cooking and painting, Lennon loves to grow
              mentally and expand his abilities whenever he can.
            </Box>
          </Flex>
          <Flex
            direction="column"
            fontSize="1.2rem"
            marginLeft={['3rem', '5rem']}
            maxWidth={['100%', '70%']}
            marginRight={['3rem', 'auto']}
            marginTop={['2rem', '12rem']}
            marginBottom="6rem"
          >
            <Box fontSize="0.9rem" m="1rem" textAlign="center">
              <Text fontSize="2.5rem" textDecoration="underline" mb="1rem">
                Advisors
              </Text>
              All members of the advisory board are acting on their own behalf
              and not in the name of their companies.
              <Link href="https://www.innofund.bm/">
                <Box
                  backgroundSize="cover"
                  backgroundPosition="top center"
                  backgroundImage={`url(${innofund})`}
                  borderRadius="50%"
                  height="200px"
                  width="200px"
                  m="auto"
                  mt="1rem"
                  mb="0.5rem"
                />
                https://www.innofund.bm/
              </Link>
            </Box>
          </Flex>
        </Flex>
      </Flex>
      {/* <Grid
        mx={['1rem', '5rem']}
        mb="5rem"
        mt="100px"
        bg="#111111"
        templateColumns={['repeat(1, 1fr)']}
        templateRows="repeat(2, 1fr)"
        gap={6}
      >
        
        <GridItem>
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
        
        <GridItem>
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
                Parth has a background in finance and macroeconomic analysis. He
                began trading stocks in honor of his Father and quickly traveled
                down the rabbit hole and quickly discovered how the financial
                system operates within fiat constructs. He caught up on the
                historical use cases of money, and applied his studies of
                Philosophy and Economics from Ohio State University to realize
                the core elements of stability within a chaotic system.
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
    </div>
  );
};

export default AboutUs;
