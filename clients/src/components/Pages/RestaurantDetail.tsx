import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import { RestaurantDetailState, getRestaurantDetail } from '@/modules/restaurantDetail';
import CircularProgress from '@/components/Atom/CircularProgress';
import { RestaurantDetailCard } from '@/components/Organism/RestaurantDetailCard';

type UseHooksProps = RestaurantDetailState & {
  getRestaurantDetail: (restaurantId: string) => void;
};
const useHooksProps = (): UseHooksProps => {
  // state
  const state = useSelector((state: RootState) => state.restaurantDetail);
  // dispatch
  const dispatch = useDispatch();

  return {
    ...state,
    getRestaurantDetail: React.useCallback(
      (restaurantId: string) => {
        dispatch(getRestaurantDetail({ restaurantId: restaurantId }));
      },
      [dispatch],
    ),
  };
};

type Props = ReturnType<typeof useHooksProps> & RouteComponentProps<{ id: string }>;
// presentational Component
export const RestaurantDetail: React.FC<Props> = (props: Props) => {
  const { getRestaurantDetail, match, isGetting, restaurantDetailInfo, businessDay } = props;
  const detailId = match.params.id;

  useEffect(() => {
    getRestaurantDetail(detailId);
  }, []);

  return (
    <div>
      {isGetting ? (
        <CircularProgress />
      ) : (
        <div>
          <p>{detailId}</p>
          <div>パンくず</div>
          <RestaurantDetailCard
            restaurantDetailInfo={restaurantDetailInfo}
            businessDay={businessDay}
          />
        </div>
      )}
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
