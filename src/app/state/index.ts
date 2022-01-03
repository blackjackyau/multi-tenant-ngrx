import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromProduct from 'src/app/products/state'
import { productsReducer } from '../products/state/reducers/products.reducer';
import { InjectionToken } from '@angular/core';
import { Tenant } from '../model/tenant';

export interface State {
}

export const rootReducer: ActionReducerMap<State> = {
}

export interface BaseState {
  [fromProduct.StateKey]: fromProduct.State;
}

export const baseReducer = (tenant: Tenant) => new InjectionToken<
  ActionReducerMap<BaseState, Action>
>('base reducers token', {
  factory: () => ({
    [fromProduct.StateKey]: productsReducer(tenant)
  }),
});

export function logger(reducer: ActionReducer<BaseState>): ActionReducer<BaseState> {
  return (state, action) => {
    const result = reducer(state, action);
    console.groupCollapsed(action.type);
    console.log('prev state', state);
    console.log('action', action);
    console.log('next state', result);
    console.groupEnd();

    return result;
  };
}

/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
// export const metaReducers: MetaReducer<State>[] = !environment.production
//   ? [logger]
//   : [];