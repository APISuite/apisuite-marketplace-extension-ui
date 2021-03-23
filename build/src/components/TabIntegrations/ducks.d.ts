import { Reducer } from 'redux';
/**
 * This is a special root reducer for the services configuration state
 * It holds no state by itself, just checks if the user is logging out and
 * sends an undefined state to the nested reducers which will make them reset
 * their state.
 *
 * @param state
 * @param action
 */
declare const reducer: Reducer<any, any>;
export default reducer;
