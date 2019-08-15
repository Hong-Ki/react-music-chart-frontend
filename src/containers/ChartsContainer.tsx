import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import axios from 'axios';

import { StoreState } from '../modules/index';
import { actionCreators as modalActions } from '../modules/modal';
import {
  actionCreators as chartsActions,
  ChartData,
  Platform,
} from '../modules/charts';

import Navigator from '../components/Navigation/Navigation';
import Chart from '../components/Chart/Chart';

interface Props {
  current: Platform;
  platforms: Platform[];
  data: ChartData[] | null;
  ModalActions: typeof modalActions;
  ChartsActions: typeof chartsActions;
}

const ChartsContainer: FC<Props> = ({
  current,
  platforms,
  data,
  ModalActions,
  ChartsActions,
}) => {
  useEffect(() => {
    setTimeout(() => {
      ModalActions.toggleVisible();
    }, 2000);
  }, [current, ModalActions]);

  useEffect(() => {
    axios
      .get(
        'https://qe8kql35vb.execute-api.ap-northeast-1.amazonaws.com/dev/load',
      )
      .then(({ data }) => ChartsActions.setData(data));
  }, [ChartsActions]);

  const onClick = (platform: Platform) => {
    if (platform !== current) {
      ModalActions.setModal('SLIDE');
      ChartsActions.setMenu(platform);
    }
  };

  return (
    <>
      <Navigator current={current} platforms={platforms} onClick={onClick} />
      {data && <Chart data={data} current={current} />}
    </>
  );
};

export default connect(
  ({ charts }: StoreState) => ({
    current: charts.get('current'),
    platforms: charts.get('platforms'),
    data: charts.get('data'),
  }),
  dispatch => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    ChartsActions: bindActionCreators(chartsActions, dispatch),
  }),
)(ChartsContainer);
