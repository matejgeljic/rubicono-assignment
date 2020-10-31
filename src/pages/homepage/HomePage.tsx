import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import { getItems } from '../../store/actions/itemActions';

import CollectionsList from '../../components/CollectionsList/CollectionsList';
import SearchInput from '../../components/SearchInput/SearchInput';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs';
import usePage from '../../usePage';

interface Props {}

const HomePage: React.FC<Props> = (props: Props) => {
  usePage('Rubicon Assignment');

  const dispatch = useDispatch();

  const itemState = useSelector((state: RootStore) => state.items.items);
  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );
  const searchResults = useSelector((state: RootStore) => state.controls.items);

  useEffect(() => {
    dispatch(getItems(currentTab));
  }, [currentTab, dispatch]);

  return (
    <div>
      <CategoryTabs />
      <br />
      <SearchInput />
      {searchResults.length < 1 ? (
        <CollectionsList items={itemState} />
      ) : (
        <CollectionsList items={searchResults} />
      )}
    </div>
  );
};

export default HomePage;
