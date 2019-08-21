import { handleActions, createAction, Action } from 'redux-actions';
import { Record } from 'immutable';

interface State {
  isVisible: boolean;
  modal: string;
}

const initialStateRecord = Record<State>({
  isVisible: true,
  modal: 'INDEX',
});

const initialState: Record<State> = initialStateRecord();
export type ModalState = Record<State>;

const TOGGLE_VISIBLE = 'modal/TOGGLE_VISIBLE';
const SET_MODAL = 'modal/SET_MODAL';

type SetModalPayload = string;

export const actionCreators = {
  toggleVisible: createAction(TOGGLE_VISIBLE),
  setModal: createAction<SetModalPayload>(SET_MODAL),
};

export default handleActions<ModalState, any>(
  {
    [TOGGLE_VISIBLE]: state => {
      return state.set('isVisible', !state.get('isVisible'));
    },
    [SET_MODAL]: (state, action: Action<SetModalPayload>) => {
      return state.set('modal', action.payload).set('isVisible', true);
    },
  },
  initialState,
);
