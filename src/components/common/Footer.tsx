import React from 'react';
import { useLocation } from 'wouter';
import { Box, Flex, Link, Text, Image } from '@chakra-ui/react';
//import { useDispatch } from '../../reducer';
import minter from './assets/minter.svg';

//const url = "https://github.com/tqtezos/minter/blob/main/src/components/common/assets/splash-logo.svg";

interface MobileHeaderLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

interface DesktopHeaderLinkProps {
  to: string;
  children: React.ReactNode;
}

function FooterLink(props: DesktopHeaderLinkProps) {
  const [location, setLocation] = useLocation();
  return (
    <Link
      href={props.to}
      onClick={e => {
        e.preventDefault();
        setLocation(props.to);
      }}
      textDecor="none"
      borderRadius="0px"
      alignItems="center"
      fontWeight="450"
      px={3}
      py={1}
      ml={2}
      fontSize="0.8rem"
      color={'brand.White'}
      display="flex"
      transition="none"
      _hover={{
        textDecor: 'none',
        color: 'brand.gray'
      }}
    >
      {props.children}
    </Link>
  );
}

function NavItems() {
  return (
    <Flex width="100%">
      {/* <Flex justify="left" ml={10} mt={20} flexDirection={['column', 'row']}> */}
      {/* <Text mt={6}>Powered By</Text>
        <Image src={minter} ml={2} mt={4} height="auto" width="20"/> */}
      {/* </Flex> */}
      <Flex
        flex="1"
        my={[10, 2]}
        justify="space-around"
        mx={'4%'}
        flexDirection={['column', 'row']}
      >
        <Flex direction="column" alignItems="flex-end" mx={5} my={[8, 0]}>
          <Text px={3} py={2} ml={4} fontWeight={480} textTransform="uppercase">
            Social
          </Text>
          <FooterLink to="/about">
            <Text ml={2}>About</Text>
          </FooterLink>
          <Link
            href="https://twitter.com/MemoraOfficial"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2} fontSize="0.8rem">
              Twitter
            </Text>
          </Link>
          <Link
            href="https://www.youtube.com/watch?v=8uKxaVhIte0"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>Youtube</Text>
          </Link>
        </Flex>
        <Flex direction="column" alignItems="flex-end" mx={5} my={[8, 0]}>
          <Text px={3} py={2} ml={4} fontWeight={480} textTransform="uppercase">
            Social
          </Text>

          <Link
            href="https://medium.com/@MemoraOfficial"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2} fontSize="0.8rem">
              Medium
            </Text>
          </Link>
          <Link
            href="https://discord.gg/yJVb5ssSq6"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2} fontSize="0.8rem">
              Discord
            </Text>
          </Link>
          <Link
            href="https://t.me/MemoraOfficial"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>Telegram</Text>
          </Link>
        </Flex>
        <Flex direction="column" alignItems="flex-end" mx={5} my={[8, 0]}>
          <Text px={3} py={2} ml={4} fontWeight={480} textTransform="uppercase">
            Support
          </Text>
          <Link
            href="https://opensource.org/licenses/MIT"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>License</Text>
          </Link>
          <Link
            href="https://www.freeprivacypolicy.com/live/e01564fc-e397-4b23-8164-df679e684d99"
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="0.8rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>Privacy</Text>
          </Link>
        </Flex>
        {/* <Flex direction="column" alignItems="flex-end" mx={5} my={[8, 0]}>
          <Link
            href=""
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="1rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>Careers</Text>
          </Link>
          <Link
            href=""
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="1rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>Change Country</Text>
          </Link>
          <Link
            href=""
            textDecor="none"
            borderRadius="0px"
            alignItems="center"
            fontWeight="450"
            px={3}
            py={1}
            ml={2}
            fontSize="1rem"
            color={'brand.White'}
            display="flex"
            transition="none"
            _hover={{
              textDecor: 'none',
              color: 'brand.gray'
            }}
          >
            <Text ml={2}>FAQ</Text>
          </Link>
        </Flex> */}
      </Flex>
    </Flex>
  );
}

export function Footer() {
  return (
    <Box width="100%" bg="#111111" paddingX={2} paddingY={2}>
      <NavItems />
    </Box>
  );
}

export default Footer;
