import React, { FC } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../modules/redux/index';
import { actionCreators as chartsActions } from '../modules/redux/charts';

import Index from '../components/Index/Index';
import SlideModal from '../components/SlideModal/SlideModal';

interface Props {
  isVisible: boolean;
  modal: string;
}

const ModalContainer: FC<Props> = ({ isVisible, modal }) => {
  return (
    <>
      {modal === 'SLIDE' && <SlideModal isVisible={isVisible} />}
      {modal === 'INDEX' && (
        <Index
          text={['WELCOME', 'TO', 'MUSIC', 'CHART']}
          isVisible={isVisible}
        />
      )}
    </>
  );
};

export default connect(
  ({ modal }: StoreState) => ({
    isVisible: modal.get('isVisible'),
    modal: modal.get('modal'),
  }),
  dispatch => ({
    ChartsActions: bindActionCreators(chartsActions, dispatch),
  }),
)(ModalContainer);
