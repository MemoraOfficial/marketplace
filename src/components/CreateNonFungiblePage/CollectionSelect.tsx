import React, { useEffect } from 'react';
import {
  Flex,
  Heading,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption
} from '@chakra-ui/react';
import { CreateCollectionButton } from '../common/modals/CreateCollection';
import { useSelector, useDispatch } from '../../reducer';
import { selectCollection } from '../../reducer/slices/createNft';
import { getWalletAssetContractsQuery } from '../../reducer/async/queries';
import { ChevronDown } from 'react-feather';

export default function CollectionSelect() {
  const collections = useSelector(s => s.collections.collections);
  const state = useSelector(s => s.createNft);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWalletAssetContractsQuery());
  }, [collections, dispatch]);

  return (
    <Flex pb={8} flexDir="column">
      <Flex pb={4} align="center" justify="space-between">
        <Heading size="md">Select a collection</Heading>
        <CreateCollectionButton sync={true} />
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          border="1px solid"
          borderColor="brand.gray"
          borderRadius="0px"
          fontSize="lg"
          fontWeight="normal"
          py={3}
          height="auto"
          backgroundColor="#111"
          color={'#fff'}
        >
          <Flex align="center">
            <Box mr={3}>
              <ChevronDown />
            </Box>
            {(state.collectionAddress &&
              collections[state.collectionAddress]?.metadata?.name) ||
              'No collection selected'}
          </Flex>
        </MenuButton>
        <MenuList backgroundColor="#111">
          <MenuOptionGroup
            type="radio"
            borderRadius="0px"
            //variant="primaryAction"
            backgroundColor="#111"
            defaultValue={state.collectionAddress || ''}
          >
            {Object.keys(collections).map(address => (
              <MenuItemOption
                key={address}
                value={address}
                selected={address === state.collectionAddress}
                onClick={() => dispatch(selectCollection(address))}
              >
                <div style={{ color: '#aaa' }}>
                  {collections[address].metadata.name}
                </div>
              </MenuItemOption>
            ))}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Flex>
  );
}
