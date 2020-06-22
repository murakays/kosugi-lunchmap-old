import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '@/store/configureStore';

import { fetchFunctions } from '@/lib/firebase.ts';

export type restaurantInfo = {
  restaurantId: number;
  restaurantName: string;
  area: string;
  mediaUrl: string;
};

export type RestaurantState = {
  isGetting: boolean;
  restaurantInfo: restaurantInfo[];
  limit: number;
  page: number;
};

const initialState: RestaurantState = {
  isGetting: false,
  restaurantInfo: [],
  limit: 10,
  page: 1,
};

export const restaurantListModule = createSlice({
  name: 'restaurantList',
  initialState,
  reducers: {
    requestGetInfo: (state: RestaurantState): void => {
      state.isGetting = true;
      return;
    },
    successGetInfo: (state: RestaurantState, action): void => {
      state.isGetting = false;
      const { restaurant } = action.payload.data;
      state.restaurantInfo = restaurant;
      return;
    },
    failureGetInfo: (state: RestaurantState): void => {
      state.isGetting = false;
      return;
    },
  },
});

export const restaurantListActions = restaurantListModule.actions;

// fetch data from functions
type GetRestaurantInfo = {
  limit: number;
  page: number;
};

export function getRestaurantInfo(
  props: GetRestaurantInfo,
): (dispatch: AppDispatch) => Promise<void> {
  const { limit, page } = props;

  return async function(dispatch: AppDispatch): Promise<void> {
    dispatch(restaurantListActions.requestGetInfo());
    try {
      const getRestaurantInfo = fetchFunctions('getRestaurantList');
      const response = await getRestaurantInfo({ limit, page });
      dispatch(restaurantListActions.successGetInfo(response));
    } catch (e) {
      console.error(e);
      dispatch(restaurantListActions.failureGetInfo());
    }
  };
}
