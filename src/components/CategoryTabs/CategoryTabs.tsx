import React from 'react';
import './CategoryTabs.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import { changeTab } from '../../store/actions/controlActions';

interface Props {}

const CategoryTabs = (props: Props) => {
  const dispatch = useDispatch();
  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );

  return (
    <div className="tabs">
      <button
        className={'tab ' + (currentTab === 'movie' ? 'tab-presed' : '')}
        onClick={() => {
          dispatch(changeTab('movie'));
        }}
      >
        Movies
      </button>
      <button
        className={'tab ' + (currentTab === 'tv' ? 'tab-presed' : '')}
        onClick={() => {
          dispatch(changeTab('tv'));
        }}
      >
        TV Shows
      </button>
    </div>
  );
};

export default CategoryTabs;
