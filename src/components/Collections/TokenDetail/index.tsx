import React, { useEffect } from 'react';
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Menu,
  MenuList,
  Modal,
  ModalCloseButton,
  ModalContent,
  Text,
  useDisclosure
} from '@chakra-ui/react';
import { ChevronLeft, HelpCircle, MoreHorizontal } from 'react-feather';
import { MinterButton, MinterMenuButton, MinterMenuItem } from '../../common';
import { TransferTokenModal } from '../../common/modals/TransferToken';
import { SellTokenButton } from '../../common/modals/SellToken';
import { CancelTokenSaleButton } from '../../common/modals/CancelTokenSale';
import { BuyTokenButton } from '../../common/modals/BuyToken';
import { useSelector, useDispatch } from '../../../reducer';
import {
  getContractNftsQuery,
  getNftAssetContractQuery
} from '../../../reducer/async/queries';
import { TokenMedia } from '../../common/TokenMedia';
import lk from '../../common/assets/link-icon.svg';
import tz from '../../common/assets/tezos-sym.svg';
import { Maximize2 } from 'react-feather';

function NotFound() {
  return (
    <Flex flex="1" width="100%" justify="center" bg="#111">
      <Flex w="100%" flex="1" flexDir="column" align="center">
        <Flex
          px={32}
          py={16}
          bg="#111"
          textAlign="center"
          align="center"
          borderRadius="5px"
          flexDir="column"
          fontSize="xl"
          borderColor="gray.200"
          borderWidth="5px"
          mt={36}
          color="gray.300"
        >
          <HelpCircle size="100px" />
          <Heading size="xl" fontWeight="normal" pt={8} color="gray.400">
            Token not found
          </Heading>
        </Flex>
      </Flex>
    </Flex>
  );
}

interface TokenDetailProps {
  contractAddress: string;
  tokenId: number;
}

function TokenDetail({ contractAddress, tokenId }: TokenDetailProps) {
  const { system, collections: state } = useSelector(s => s);
  const disclosure = useDisclosure();
  const dispatch = useDispatch();
  const collection = state.collections[contractAddress];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const collectionUndefined = collection === undefined;

  useEffect(() => {
    if (collectionUndefined) {
      dispatch(getNftAssetContractQuery(contractAddress));
    } else {
      dispatch(getContractNftsQuery(contractAddress));
    }
  }, [contractAddress, tokenId, collectionUndefined, dispatch]);

  if (!collection?.tokens) {
    return null;
  }

  const token = collection.tokens.find(token => token.id === tokenId);
  if (!token) {
    return <NotFound />;
  }

  const isOwner =
    system.tzPublicKey &&
    (system.tzPublicKey === token.owner ||
      system.tzPublicKey === token.sale?.seller);

  /*TODO: Sort out mobile layout in this*/
  return (
    <Flex direction={['column', 'row']} flexDir={['column', 'row']} bg="#111" flexGrow={1}>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        scrollBehavior="inside"
      >
        <ModalContent
          height="100vh"
          maxHeight="unset"
          width="100vw"
          display="flex"
          flexDirection="column"
          flexWrap="nowrap"
          justifyContent="center"
          alignItems="center"
          position="relative"
          backgroundColor="#111111fc"
          zIndex="2000"
          margin="0 !important"
          borderRadius="0"
        >
          <TokenMedia
            key={`${token.address}-${token.id}`}
            config={system.config}
            {...token}
            metadata={token?.metadata}
            maxW="95vw"
            maxH="95vh"
            objectFit="scale-down"
          />
          <ModalCloseButton
            position="absolute"
            right="0px !important"
            display="block !important"
            fontSize="18px"
            top="0px !important"
            color="white"
            borderTop="0px solid #aaa"
            width="2rem"
            height="2rem"
            border="0"
          />
        </ModalContent>
      </Modal>
      <Flex justifyContent="flex-start" width="4rem">
        <MinterButton
          variant="primaryAction"
          onClick={e => {
            e.preventDefault();
            window.history.back();
          }}
        >
          <Box color="currentcolor">
            <ChevronLeft size={24} strokeWidth="3" />
          </Box>
        </MinterButton>
      </Flex>
      <Flex
        //px={[8, 8]}
        pt={[100, 120]}
        pb={[100, 50]}
        width={['50%']}
        maxHeight={['60vh', '70vh', '80vh']}
        height={['100%']}
        justifyContent="center"
      >
        <TokenMedia
          key={`${token.address}-${token.id}`}
          config={system.config}
          {...token}
          metadata={token?.metadata}
          maxW="100%"
          maxH="100%"
          objectFit="scale-down"
          cursor="pointer"
          onClick={onOpen}
        />
      </Flex>
      <Flex
        width="40vw"
        height="auto"
        justifyContent="flex-end"
        marginBottom={[3, 2]}
        zIndex="50"
      >
        <Button onClick={onOpen} bg="#111" borderRadius="0px"
          _hover={{
            cursor: 'pointer',
            bg: '#000'
          }}
        >
          <Maximize2 size={12} strokeWidth="2" />
        </Button>
      </Flex>
      <Flex width={['100%']} bg="#111" flexDir="column" flexGrow={1}>
        <Flex
          align="center"
          justify="space-between"
          width={['200']}
          mt="100"
        ></Flex>
        <Flex
          width={['90%', '90%', '90%']}
          //mx="auto"
          bg="#111"
          flexDir="column"
          //px={[4, 16]}
          flex="1"
        >
          <Flex
            flexDir="column"
            w="100%"
            bg="#111"
            py={6}
            //p={0}
            mb={10}
            pos="relative"
          >
            <Heading
              textAlign="left"
              color="brand.white"
              width={['100%', '100%', '80%']}
              fontSize={['10vw', '3vw']}
              display="inline-block"
            >
              {token.title}
            </Heading>
            <Text
              fontSize="md"
              color="brand.white"
              fontWeight="bold"
              mt={[2, 4]}
              width={['100%', '100%', '60%']}
            >
              {token.description || 'No description provided'}
            </Text>
            <Accordion allowToggle mt={4}>
              <AccordionItem border="none">
                <AccordionButton p={0}>
                  <Text color="brand.white">Token Info</Text>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <Flex mt={[4, 8]}>
                    <Text color="brand.white">Minter:</Text>
                    <Text
                      color="brand.white"
                      fontWeight="bold"
                      ml={[1]}
                      whiteSpace="nowrap"
                      overflow="hidden"
                    >
                      <Link
                        display="block"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        href={`/creator/${token?.metadata?.minter}`}
                      >
                        {token?.metadata?.minter}&nbsp;
                        <sup>
                          <img
                            src={lk}
                            alt=""
                            width="auto"
                            height="auto"
                            style={{ display: 'inline-block' }}
                          />
                        </sup>
                      </Link>
                    </Text>
                  </Flex>
                  <Flex mt={[4, 8]}>
                    <Text color="brand.white">Collection:</Text>
                    <Text
                      color="brand.white"
                      fontWeight="bold"
                      ml={[1]}
                      whiteSpace="nowrap"
                      overflow="hidden"
                    >
                      <Link
                        display="block"
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="ellipsis"
                        href={`/collection/${contractAddress}`}
                      >
                        {state.selectedCollection
                          ? state.collections[state.selectedCollection]
                              ?.metadata.name
                          : collection?.metadata.name
                          ? collection?.metadata.name
                          : contractAddress}
                        &nbsp;
                        <sup>
                          <img
                            src={lk}
                            alt=""
                            width="auto"
                            height="auto"
                            style={{ display: 'inline-block' }}
                          />
                        </sup>
                      </Link>
                    </Text>
                  </Flex>
                  {token?.metadata?.attributes?.map(({ name, value }) => (
                    <Flex key={name + value} mt={[4, 8]}>
                      <Text color="brand.white">{name}:</Text>
                      <Text
                        display="block"
                        color="brand.white"
                        fontWeight="bold"
                        ml={[1]}
                        whiteSpace="nowrap"
                        overflow="hidden"
                        textOverflow="wrap"
                      >
                        {value}
                      </Text>
                    </Flex>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Flex
              display={['flex']}
              justifyContent="space-between"
              alignItems="center"
              width="100%"
              flexDir={['column', 'row']}
              flexWrap="wrap"
              marginTop={2}
            >
              <Flex
                justifyContent={['flex-start']}
                alignItems="center"
                width="100%"
                marginTop={4}
              >
                {token.sale ? (
                  isOwner ? (
                    <>
                      <Text
                        color="brand.white"
                        fontSize="xl"
                        fontWeight="700"
                        marginRight={8}
                      >
                        {token.sale.price}{' '}
                        <img
                          src={tz}
                          alt=""
                          width={10}
                          height="auto"
                          style={{ display: 'inline-block' }}
                        />
                      </Text>
                      <Box marginRight={8}>
                        <CancelTokenSaleButton
                          contract={token.sale.saleToken.address}
                          tokenId={token.sale.saleToken.tokenId}
                          saleId={token.sale.saleId}
                          saleType={token.sale.type}
                        />
                      </Box>
                    </>
                  ) : (
                    <>
                      <Box mr="10">
                        <BuyTokenButton token={token} />
                      </Box>
                      <Text
                        color="white"
                        fontSize={['md', 'md', 'lg']}
                        mr={1}
                        fontWeight="700"
                        marginRight={8}
                      >
                        {token.sale.price.toFixed(2)}{' '}
                        <img
                          src={tz}
                          alt=""
                          width={10}
                          height="auto"
                          style={{ display: 'inline-block' }}
                        />
                      </Text>
                    </>
                  )
                ) : isOwner ? (
                  <Box marginRight={8}>
                    <SellTokenButton
                      contract={contractAddress}
                      tokenId={tokenId}
                    />
                  </Box>
                ) : (
                  <></>
                )}
                {isOwner ? (
                  <Menu>
                    <MinterMenuButton variant="primaryAction">
                      <MoreHorizontal color="#25282B" />
                    </MinterMenuButton>
                    <MenuList
                      borderColor="brand.lightBlue"
                      borderRadius="2px"
                      p={0}
                      minWidth={[100]}
                    >
                      {token.sale ? (
                        <></>
                      ) : (
                        <MinterMenuItem
                          w={[100]}
                          bg="#111"
                          color="#fff"
                          onClick={disclosure.onOpen}
                          _hover={{
                            bg:"#111",
                            color:"#fff"
                          }}
                        >
                          Transfer
                        </MinterMenuItem>
                      )}
                    </MenuList>
                    <TransferTokenModal
                      contractAddress={contractAddress}
                      tokenId={tokenId}
                      disclosure={disclosure}
                    />
                  </Menu>
                ) : (
                  <></>
                )}
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default TokenDetail;
