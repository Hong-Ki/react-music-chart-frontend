import { combineReducers } from 'redux';

import charts, { ChartsState } from './charts';
import modal, { ModalState } from './modal';

export default combineReducers({
  charts,
  modal,
});

export interface StoreState {
  charts: ChartsState;
  modal: ModalState;
}
