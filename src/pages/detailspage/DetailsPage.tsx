import React, { useEffect } from 'react';
import './DetailsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../../store/store';
import {
  getItemDetails,
  clearItemDetails,
} from '../../store/actions/itemDetailsActions';
import { RouteComponentProps } from 'react-router-dom';
import ReactPlayer from 'react-player';
import useVideo from '../../useVideo';
import usePage from '../../usePage';
import Spinner from '../../components/Spinner/Spinner';
import Rating from '../../components/Rating/Rating';
import altImg from '../../alt-img.png';

interface Props extends RouteComponentProps<{ id: string }> {}

const DetailsPage: React.FC<Props> = (props: Props) => {
  usePage('Details');
  const dispatch = useDispatch();

  const currentTab = useSelector(
    (state: RootStore) => state.controls.currentTab
  );
  const isLoading = useSelector((state: RootStore) => state.item.loading);
  const itemId = props.match.params.id;

  useEffect(() => {
    dispatch(getItemDetails(currentTab, itemId));

    return () => {
      dispatch(clearItemDetails());
    };
  }, [currentTab, dispatch, itemId]);

  const selecteItem = useSelector((state: RootStore) => state.item.item);

  const video = useVideo(currentTab, itemId);

  const imageUrl = `https://image.tmdb.org/t/p/w500${selecteItem?.poster_path}`;

  const defaultSrc = (e: any) => {
    e.target.src = altImg;
  };

  return (
    <div className="details">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="back-button" onClick={() => props.history.goBack()}>
            <i className="fas fa-long-arrow-alt-left"></i> Back
          </div>
          <div>
            {video.length > 0 ? (
              <ReactPlayer
                className="react-player"
                url={`https://www.youtube.com/watch?v=${video}`}
                width="80%"
                playing={true}
                controls
                volume={1}
              />
            ) : (
              <img
                className="details-poster"
                src={imageUrl}
                onError={defaultSrc}
                alt="Movie Poster"
              />
            )}
          </div>
          <h3 className="details-title">
            {selecteItem?.name || selecteItem?.title}
          </h3>
          {selecteItem?.vote_average ? (
            <Rating value={selecteItem?.vote_average} />
          ) : null}
          <h3 className="overview-title">Movie Overview:</h3>
          <p className="details-overview">{selecteItem?.overview}</p>
        </>
      )}
    </div>
  );
};

export default DetailsPage;
