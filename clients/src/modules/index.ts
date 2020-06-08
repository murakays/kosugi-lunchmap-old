import { testModule } from './test';
import { restaurantListModule } from './restaurantList';
// Reducers
const testReducer = testModule.reducer;
const restaurantListReducer = restaurantListModule.reducer;

export { testReducer, restaurantListReducer };
