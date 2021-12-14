import React from 'react';
import { Token } from '../../reducer/slices/collections';
import { useLocation } from 'wouter';
import { IpfsGatewayConfig } from '../../lib/util/ipfs';
import { AspectRatio, Box, Flex } from '@chakra-ui/react';
import { TokenMedia } from './TokenMedia';
import tz from './assets/tezos-sym.svg';

interface TokenCardProps extends Token {
  config: IpfsGatewayConfig;
}

export default function TokenCard(props: TokenCardProps) {
  const [, setLocation] = useLocation();
  return (
    <Flex
      position="relative"
      flexDir="column"
      ratio={1}
      w="100%"
      border="1px solid"
      borderColor="#000"
      overflow="hidden"
      transition="all linear 50ms"
      _hover={{
        cursor: 'pointer',
        borderColor: '#444'
      }}
      onClick={() =>
        setLocation(`/collection/${props.address}/token/${props.id}`)
      }
    >
      <AspectRatio ratio={4/2}>
        <Box>
          <TokenMedia key={`${props.address}-${props.id}`} {...props} />
        </Box>
      </AspectRatio>
      <Flex
        width="100%"
        height="80px"
        px={4}
        py={4}
        bg="#111"
        borderTop="1px solid"
        borderColor="#444"
        flexDir="row"
        justifyContent="space-between"
      >
        <Flex
          display="block"
          fontSize="md"
          width="70%"
          alignItems="center"
          height="100%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {props.title}
        </Flex>
        <Flex
          fontSize="md"
          fontWeight="600"
          width="30%"
          justifyContent="flex-end"
          alignItems="end"
        >
          {props.sale?.price.toFixed(2)}&nbsp;
          <img
            src={tz}
            alt=""
            width={10}
            height="auto"
            style={{
              display: props.sale?.price ? 'inline-block' : 'none',
              filter: 'invert(1)'
            }}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
