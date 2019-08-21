import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../modules/redux/index';
import { actionCreators as modalActions } from '../modules/redux/modal';
import {
  actionCreators as chartsActions,
  ChartData,
  Platform,
} from '../modules/redux/charts';

import Navigator from '../components/Navigation/Navigation';
import Chart from '../components/Chart/Chart';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { GET_CHARTS } from './query';
import Index from '../components/Index/Index';

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
  ModalActions,
  ChartsActions,
}) => {
  const { loading, error, data: resultData } = useQuery(gql(GET_CHARTS));
  useEffect(() => {
    setTimeout(() => {
      ModalActions.toggleVisible();
    }, 2000);
  }, [current, ModalActions]);

  const onClick = (platform: Platform) => {
    if (platform !== current) {
      ModalActions.setModal('SLIDE');
      ChartsActions.setMenu(platform);
    }
  };

  if (loading)
    return (
      <Index isVisible={true} text={['WELCOME', 'TO', 'MUSIC', 'CHART']} />
    );
  if (error) return <p>Error...</p>;
  const { chart } = resultData;
  return (
    <>
      <Navigator current={current} platforms={platforms} onClick={onClick} />
      {chart && <Chart data={chart} current={current} />}
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
