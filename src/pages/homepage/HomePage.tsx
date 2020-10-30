import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import { getItems } from '../../store/actions/itemActions';
import { searchItems } from '../../store/actions/controlActions';
import debounce from 'lodash.debounce';

import CollectionsList from '../../components/CollectionsList/CollectionsList';
import SearchInput from '../../components/SearchInput/SearchInput';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs';

interface Props {}

const HomePage = (props: Props) => {
  const dispatch = useDispatch();

  const itemState = useSelector((state: RootStore) => state.items.items);
  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );
  const searchQuerry = useSelector((state: RootStore) => state.controls.search);
  const searchResults = useSelector((state: RootStore) => state.controls.items);

  useEffect(() => {
    dispatch(getItems(currentTab));
  }, [currentTab, dispatch]);

  useEffect(() => {
    dispatch(searchItems(currentTab, searchQuerry));
  }, [currentTab, dispatch, searchQuerry]);

  return (
    <div>
      <CategoryTabs />
      <br />
      <SearchInput />
      {searchQuerry.length < 3 ? (
        <CollectionsList items={itemState} />
      ) : (
        <CollectionsList items={searchResults} />
      )}
    </div>
  );
};

export default HomePage;
