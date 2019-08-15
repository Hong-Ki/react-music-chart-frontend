import { handleActions, createAction, Action } from 'redux-actions';
import { Record } from 'immutable';

export type Platform = 'BUGS' | 'GENIE' | 'MELON' | 'NAVER';
export interface ChartData {
  _id: string;
  date: string;
  BUGS: SongInfo[];
  GENIE: SongInfo[];
  MELON: SongInfo[];
  NAVER: SongInfo[];
}
interface SongInfo {
  _id: string;
  rank: number;
  title: string;
  artist: string;
}

interface State {
  current: Platform;
  platforms: Platform[];
  data: ChartData[] | null;
}

const initialStateRecord = Record<State>({
  platforms: ['BUGS', 'GENIE', 'MELON', 'NAVER'],
  current: 'BUGS',
  data: null,
});

const initialState: Record<State> = initialStateRecord();
export type ChartsState = Record<State>;

const SET_MENU = 'charts/SET_MENU';
type SetMenuPayload = Platform;

const SET_DATA = 'charts/SET_DATA';
type SetDataPayload = ChartData[];

export const actionCreators = {
  setMenu: createAction<SetMenuPayload>(SET_MENU),
  setData: createAction<SetDataPayload>(SET_DATA),
};

export default handleActions<ChartsState, any>(
  {
    [SET_MENU]: (state, action: Action<SetMenuPayload>) => {
      return state.set('current', action.payload);
    },
    [SET_DATA]: (state, action: Action<SetDataPayload>) => {
      return state.set('data', action.payload);
    },
  },
  initialState,
);
