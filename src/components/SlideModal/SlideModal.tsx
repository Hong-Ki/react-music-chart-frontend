import React, { FC } from 'react';

import styles from './SlideModal.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  isVisible: boolean;
}

const SlideModal: FC<Props> = ({ isVisible }) => {
  const elements = [];
  for (let i = 0; i < 5; i++) {
    elements.push(<div key={i} className={cx(`line-${i + 1}`)} />);
  }

  return (
    <div className={cx('modal', { show: isVisible, hide: !isVisible })}>
      {isVisible && elements}
    </div>
  );
};

export default SlideModal;
