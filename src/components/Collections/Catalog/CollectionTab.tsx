import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { Collection } from '../../../reducer/slices/collections';

interface CollectionTabProps extends Collection {
  selected: boolean;
  onSelect: (address: string) => void;
}

export default function CollectionTab({
  address,
  metadata,
  selected,
  onSelect
}: CollectionTabProps) {
  return (
    <Flex
      align="center"
      py={2}
      px={4}
      bg={selected ? '#222' : '#111'}
      color={selected ? 'brand.white' : '#fff'}
      _hover={{
        cursor: 'pointer',
        color: '#fff'
      }}
      onClick={() => onSelect(address)}
      role="group"
    >
      <Flex
        align="center"
        justify="center"
        w={8}
        h={8}
        bg={selected ? '#111' : '#111'}
        color={selected ? '#fff' : '#fff'}
        borderRadius="100%"
        fontWeight="600"
        _groupHover={{
          color: selected ? '#fff' : '#fff'
        }}
      >
        <Text>{metadata?.name ? metadata.name[0] : '?'}</Text>
      </Flex>
      <Text color="#fff"
      pl={4} fontWeight={selected ? '600' : '600'}>
        {metadata?.name || address}
      </Text>
    </Flex>
  );
}
