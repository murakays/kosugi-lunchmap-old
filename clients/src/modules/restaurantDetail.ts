import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '@/store/configureStore';

import { fetchFunctions } from '@/lib/firebase.ts';

export type ISns = {
  twitter?: string;
  instagram?: string;
};

export type IBusinessDay = {
  sun: boolean;
  mon: boolean;
  tue: boolean;
  wed: boolean;
  thu: boolean;
  fri: boolean;
  sat: boolean;
};

export type IRestaurantDetailInfo = {
  restaurantName: string;
  area: string;
  address: string;
  smoking: string;
  eMoney: string;
  sns: ISns;
};

export type RestaurantDetailState = {
  isGetting: boolean;
  restaurantDetailInfo: IRestaurantDetailInfo;
  businessDay: IBusinessDay;
  mediaUrl: string;
};

const initialState: RestaurantDetailState = {
  isGetting: false,
  restaurantDetailInfo: {
    restaurantName: '',
    area: '',
    address: '',
    smoking: '',
    eMoney: '',
    sns: {},
  },
  businessDay: {
    sun: false,
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: false,
    sat: false,
  },
  mediaUrl: '',
};

export const restaurantDetailModule = createSlice({
  name: 'restaurantDetail',
  initialState,
  reducers: {
    requestGetDetailInfo: (state: RestaurantDetailState): void => {
      state.isGetting = true;
      return;
    },
    successGetDetailInfo: (state: RestaurantDetailState, action): void => {
      state.isGetting = false;
      const { restaurantDetail, businessDay, mediaUrl } = action.payload.data;
      state.restaurantDetailInfo = restaurantDetail;
      state.businessDay = businessDay;
      state.mediaUrl = mediaUrl;
      return;
    },
    failureGetDetailInfo: (state: RestaurantDetailState): void => {
      state.isGetting = false;
      return;
    },
  },
});

export const restaurantDetailActions = restaurantDetailModule.actions;

type GetRestaurantDetail = {
  restaurantId: string;
};

export function getRestaurantDetail(
  props: GetRestaurantDetail,
): (dispatch: AppDispatch) => Promise<void> {
  const { restaurantId } = props;

  return async function(dispatch): Promise<void> {
    dispatch(restaurantDetailActions.requestGetDetailInfo());
    try {
      const getRestaurantDetailInfo = fetchFunctions('getRestaurantDetail');
      const response = await getRestaurantDetailInfo({ restaurantId });
      dispatch(restaurantDetailActions.successGetDetailInfo(response));
    } catch (e) {
      console.error(e);
      dispatch(restaurantDetailActions.failureGetDetailInfo());
    }
  };
}
