import React from 'react';
import './SearchInput.css';
import { RootStore } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../store/actions/controlActions';
import useDebouncedSearch from '../../useDebouncedSearch';

interface Props {}

const SearchInput: React.FC<Props> = (props: Props) => {
  const dispatch = useDispatch();

  const searchQuerry = useSelector((state: RootStore) => state.controls.search);
  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    dispatch(setSearch(value));
  };

  let searchTerm = currentTab === 'movie' ? 'Movies' : 'TV Shows';

  useDebouncedSearch();

  return (
    <div className="search-input">
      <input
        type="text"
        name="search"
        autoComplete="off"
        value={searchQuerry}
        onChange={handleSearch}
      />
      <label htmlFor="search" className="search-label">
        <span className="search-content">
          <i className="fas fa-search"></i> Search for {searchTerm}
        </span>
      </label>
    </div>
  );
};

export default SearchInput;
