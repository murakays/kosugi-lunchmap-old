import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import { RestaurantState, getRestaurantInfo } from '@/modules/restaurantList';

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

type Props = ReturnType<typeof useHooksProps> & RouteComponentProps<{ id: string }>;
// presentational Component
export const RestaurantDetail: React.FC<Props> = (props: Props) => {
  const { getRestaurantList, match } = props;
  const detailId = match.params.id;

  useEffect(() => {
    getRestaurantList();
  }, []);

  return (
    <div>
      <p>{detailId}</p>
      <div>aaaaa</div>
    </div>
  );
};

// container Component
export default function restaurantDetailContainer(
  props: RouteComponentProps<{ id: string }>,
): JSX.Element {
  const { location, history, match } = props;
  const _props = { ...useHooksProps(), location, history, match };
  return <RestaurantDetail {..._props} />;
}
