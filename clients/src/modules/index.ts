import { testModule } from './test';
import { restaurantListModule } from './restaurantList';
import { restaurantDetailModule } from '@/modules/restaurantDetail';
// Reducers
const testReducer = testModule.reducer;
const restaurantListReducer = restaurantListModule.reducer;
const restaurantDetailReducer = restaurantDetailModule.reducer;

export { testReducer, restaurantListReducer, restaurantDetailReducer };
