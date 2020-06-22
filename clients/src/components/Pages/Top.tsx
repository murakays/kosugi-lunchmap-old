import React, { useEffect } from 'react';
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

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div>
      <p>Page:{page}</p>
      <p>Limit:{limit}</p>
      <RestaurantListsCard restaurantInfo={restaurantInfo} isGetting={isGetting} />
    </div>
  );
};

// container Component
export default function TopContainer(): JSX.Element {
  const _props = { ...useHooksProps() };
  return <Top {..._props} />;
}
