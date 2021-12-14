import React, { useRef } from 'react';
import { useLocation } from 'wouter';
import {
  Box,
  Flex,
  Image,
  Link,
  Text,
  Menu,
  MenuButton,
  MenuList,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Heading,
  IconButton
} from '@chakra-ui/react';
import { Menu as HamburgerIcon } from 'react-feather';
// import headerLogo from './assets/header-logo.svg';
import headerLogo from './assets/new_logo.jpeg';
import { useSelector, useDispatch } from '../../reducer';
import { connectWallet, disconnectWallet } from '../../reducer/async/wallet';
import { MinterButton } from '.';
// import logo from './assets/splash-logo.svg';
// import logo from './assets/new_logo.jpeg';
import logo from './assets/memora_logo.svg';

import wallet_icon from './assets/wallet.svg';
import { DragHandleIcon } from '@chakra-ui/icons';
// import ReactPlayer from 'react-player/soundcloud';

// const mus_url = 'https://soundcloud.com/charlotte-ross-817255127/dont-save-me-ro-mix-audio-animals-master';

interface MobileHeaderLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

function MobileHeaderLink(props: MobileHeaderLinkProps) {
  const [location, setLocation] = useLocation();
  const selected = location === props.to;
  return (
    <Link
      href={props.to}
      onClick={e => {
        e.preventDefault();
        setLocation(props.to);
        if (props.onClick) {
          props.onClick();
        }
      }}
      textDecor="none"
    >
      <Heading
        fontWeight={selected ? '600' : 'normal'}
        color="brand.brightGray"
        mb={4}
        pl={selected ? 4 : 0}
        borderColor="brand.black"
      >
        {props.children}
      </Heading>
    </Link>
  );
}

interface DesktopHeaderLinkProps {
  to: string;
  children: React.ReactNode;
}

function DesktopHeaderLink(props: DesktopHeaderLinkProps) {
  const [location, setLocation] = useLocation();
  const selected = location === props.to;
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
      py={2}
      ml={4}
      color={selected ? 'brand.blue' : 'brand.brightGray'}
      display="flex"
      transition="none"
      _hover={{
        textDecor: 'none',
        color: 'brand.blue'
      }}
    >
      {props.children}
    </Link>
  );
}

function WalletInfo(props: { tzPublicKey: string }) {
  return (
    <Flex flexDir="row" align="center" my={4}>
      <Box borderRadius="0px" width={10} height={10} p={1}>
        <Image
          src={`https://services.tzkt.io/v1/avatars2/${props.tzPublicKey}`}
        />
      </Box>
      <Text fontFamily="mono" ml={2} color="brand.white">
        {props.tzPublicKey}
      </Text>
    </Flex>
  );
}

function WalletDisplay() {
  const [, setLocation] = useLocation();
  const system = useSelector(s => s.system);
  const dispatch = useDispatch();
  return (
    <>
      {system.status === 'WalletConnected' ? (
        <Menu placement="bottom-end" offset={[4, 24]}>
          <MenuButton
            padding={0}
            color="#fff"
            background="#111"
            borderRadius="0px"
            bg="#111"
            as={IconButton}
            icon={<DragHandleIcon />}
            _hover={{
              textDecoration: 'none',
              color: '#555',
              background: '#000'
            }}
          ></MenuButton>
          <MenuList
            color="#fff"
            background="#111"
            borderRadius="0px"
            borderWidth="1px"
            borderColor="#000"
            pt={0}
            pb={0}
          >
            <Flex flexDir="column" px={4} py={2}>
              <Text fontSize={16} fontWeight="600" color="#fff">
                Network: {system.config.network}
              </Text>
              <WalletInfo tzPublicKey={system.tzPublicKey} />
              <MinterButton
                alignSelf="flex-start"
                variant="cancelAction"
                borderRadius="0px"
                onClick={async () => {
                  await dispatch(disconnectWallet());
                  setLocation('/');
                }}
              >
                Disconnect
              </MinterButton>
            </Flex>
          </MenuList>
        </Menu>
      ) : (
        <MinterButton
          variant="secondaryAction"
          onClick={e => {
            e.preventDefault();
            dispatch(connectWallet());
          }}
        >
          Connect Wallet
        </MinterButton>
      )}
    </>
  );
}

function NavItems() {
  const system = useSelector(s => s.system);
  const dispatch = useDispatch();
  const [, setLocation] = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      {/* Mobile */}
      <Flex
        flex="1"
        justify="flex-end"
        bg="#111"
        color="#fff"
        borderRadius="0px"
        display={{
          base: 'flex',
          md: 'none'
        }}
      >
        <Box ref={btnRef} cursor="pointer" onClick={onOpen}>
          <HamburgerIcon />
        </Box>
        <Drawer
          isOpen={isOpen}
          onClose={onClose}
          placement="right"
          finalFocusRef={btnRef}
        >
          <DrawerOverlay>
            <DrawerContent bg="#111" color="#fff">
              <DrawerCloseButton />
              <DrawerBody mt={10}>
                <Flex
                  flexDir="column"
                  justifyContent="space-between"
                  height="100%"
                  bg="#111"
                  color="#fff"
                >
                  <Flex flexDir="column">
                    <MobileHeaderLink to="/marketplace" onClick={onClose}>
                      Marketplace
                    </MobileHeaderLink>
                    <MobileHeaderLink to="/collections" onClick={onClose}>
                      Gallery
                    </MobileHeaderLink>
                    {system.status === 'WalletConnected' ? (
                      <MobileHeaderLink to="/create" onClick={onClose}>
                        Mint
                      </MobileHeaderLink>
                    ) : null}
                    <MobileHeaderLink to="/about" onClick={onClose}>
                      About
                    </MobileHeaderLink>
                  </Flex>
                  {system.status === 'WalletConnected' ? (
                    <MinterButton
                      variant="cancelAction"
                      onClick={async () => {
                        await dispatch(disconnectWallet());
                        setLocation('/');
                      }}
                      mb={4}
                    >
                      Disconnect Wallet
                    </MinterButton>
                  ) : (
                    <MinterButton
                      variant="secondaryAction"
                      onClick={e => {
                        e.preventDefault();
                        dispatch(connectWallet());
                      }}
                      mb={4}
                    >
                      Connect Wallet
                      <Image
                        src={wallet_icon}
                        width="auto"
                        height="40%"
                        paddingLeft={3}
                      />
                    </MinterButton>
                  )}
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
      {/* Desktop */}
      <Flex
        flex="1"
        justify="center"
        //ml="150px"
        borderRadius="0px"
        display={{
          base: 'none',
          md: 'flex'
        }}
      >
        <DesktopHeaderLink to="/marketplace">
          <Text ml={0}>Marketplace</Text>
        </DesktopHeaderLink>
        {system.status === 'WalletConnected' ? (
          <>
            <DesktopHeaderLink to="/collections">
              <Text ml={0}>Gallery</Text>
            </DesktopHeaderLink>
            <DesktopHeaderLink to="/create">
              <Text ml={0}>Mint</Text>
            </DesktopHeaderLink>
          </>
        ) : null}
        <DesktopHeaderLink to="/about">
          <Text ml={0}>About</Text>
        </DesktopHeaderLink>
      </Flex>
      <Flex
        alignItems="center"
        color="#111"
        paddingLeft={4}
        marginLeft={5}
        marginRight={10}
      >
        <WalletDisplay />
      </Flex>
    </>
  );
}

export function Header() {
  const [, setLocation] = useLocation();

  return (
    <Flex
      width="100%"
      bg="#111111"
      paddingX={4}
      paddingY={2}
      alignItems="center"
      justifyContent="space-between"
      position="fixed"
      zIndex={999}
    >
      <Flex zIndex={-100}>
        {/* <ReactPlayer
          url={mus_url}
          width="0px"
          height="0px"
          playing={true}
          loop={true}
        /> */}
        {/*<Iframe source={'https://audius.co/embed/track/G0wyE?flavor=card'}></Iframe>*/}
      </Flex>
      <Image
        display={{
          base: 'none',
          md: 'block'
        }}
        marginLeft="12px"
        marginRight="12px"
        maxH="28px"
        marginTop="4px"
        src={logo}
        onClick={e => {
          e.preventDefault();
          setLocation('/');
        }}
        cursor="pointer"
      />
      {/* <Image
        display={{
          base: 'block',
          md: 'none'
        }}
        maxW="38px"
        src={headerLogo}
        onClick={e => {
          e.preventDefault();
          setLocation('/');
        }}
        cursor="pointer"
      /> */}
      <Text
        fontSize="1rem"
        pr="0px"
        mr="0px"
        cursor="pointer"
        onClick={e => {
          e.preventDefault();
          setLocation('/');
        }}
      >
        MEMORA
      </Text>
      <NavItems />
    </Flex>
  );
}

export default Header;
