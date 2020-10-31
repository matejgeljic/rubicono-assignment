import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import { clearItemList, getItems } from '../../store/actions/itemActions';

import CollectionsList from '../../components/CollectionsList/CollectionsList';
import SearchInput from '../../components/SearchInput/SearchInput';
import CategoryTabs from '../../components/CategoryTabs/CategoryTabs';
import usePage from '../../usePage';
import Spinner from '../../components/Spinner/Spinner';

interface Props {}

const HomePage: React.FC<Props> = (props: Props) => {
  usePage('Rubicon Assignment');

  const dispatch = useDispatch();

  const itemState = useSelector((state: RootStore) => state.items.items);
  const isLoading = useSelector((state: RootStore) => state.items.loading);
  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );
  const searchResults = useSelector((state: RootStore) => state.controls.items);

  useEffect(() => {
    dispatch(getItems(currentTab));

    return () => {
      dispatch(clearItemList());
    };
  }, [currentTab, dispatch]);

  return (
    <div>
      <CategoryTabs />
      <br />
      <SearchInput />
      {isLoading ? (
        <Spinner />
      ) : searchResults.length < 1 ? (
        <CollectionsList items={itemState} />
      ) : (
        <CollectionsList items={searchResults} />
      )}
    </div>
  );
};

export default HomePage;
