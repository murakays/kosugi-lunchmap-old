import { restaurantListModule } from './restaurantList';
import { restaurantDetailModule } from '@/modules/restaurantDetail';
// Reducers
const restaurantListReducer = restaurantListModule.reducer;
const restaurantDetailReducer = restaurantDetailModule.reducer;

export { restaurantListReducer, restaurantDetailReducer };
