import createStore, { Store } from 'unistore'

export interface StoreState {

}

export const initialState: StoreState = {
  
}

const store: Store<StoreState> = createStore(initialState)


export default store
