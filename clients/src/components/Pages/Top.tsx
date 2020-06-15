import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import { RestaurantState, getRestaurantInfo } from '@/modules/restaurantList';
import { RestaurantListsCard } from '@/components/Organism/RestaurantListsCard';

type UseHooksProps = RestaurantState & { getRestaurantList: () => void };
const useHooksProps = (): UseHooksProps => {
  // state
  const state = useSelector((state: RootState) => state.restaurantList);
  // dispatch
  const dispatch = useDispatch();

  return {
    ...state,
    getRestaurantList: React.useCallback(() => {
      dispatch(getRestaurantInfo({ limit: state.limit, page: state.page }));
    }, [dispatch]),
  };
};

type Props = ReturnType<typeof useHooksProps>;
// presentational Component
export const Top: React.FC<Props> = (props: Props) => {
  const { isGetting, restaurantInfo, page, limit, getRestaurantList } = props;

  return (
    <div>
      {isGetting && <span>isGetting...</span>}
      <button onClick={getRestaurantList}>fetch</button>
      <p>Page:{page}</p>
      <p>Limit:{limit}</p>
      <RestaurantListsCard restaurantInfo={restaurantInfo} />
    </div>
  );
};

// props mock
const mock = {
  isGetting: false,
  restaurantInfo: [
    {
      restaurantId: 1,
      restaurantName: 'デニーズ',
      area: 'NE',
      mediaUrl:
        'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
    },
    {
      restaurantId: 2,
      restaurantName: 'さくら水産',
      area: 'NE',
      mediaUrl:
        'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
    },
    {
      restaurantId: 3,
      restaurantName: '山田うどん',
      area: 'NE',
      mediaUrl:
        'https://firebasestorage.googleapis.com/v0/b/kosugi-lunchmap.appspot.com/o/public%2Frestaurants%2F1%2FIBUS458A1871_TP_V4.jpg?alt=media',
    },
  ],
  limit: 10,
  page: 1,
};

// container Component
export default function TopContainer(): JSX.Element {
  const _props = { ...useHooksProps(), ...mock };
  return <Top {..._props} />;
}
