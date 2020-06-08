import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/configureStore';
import {
  RestaurantState,
  // restaurantListActions,
  getRestaurantInfo,
} from '@/modules/restaurantList';
import { restaurantArea } from '@/const/restaurant';

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
      {restaurantInfo.map((value, index) => {
        return (
          <div key={index}>
            <ul>
              <li>restaurantId:{value.restaurantId}</li>
              <li>name:{value.name}</li>
              <li>area:{restaurantArea[value.area]}</li>
            </ul>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

// container Component
export default function TopContainer(): JSX.Element {
  const _props = { ...useHooksProps() };
  return <Top {..._props} />;
}
