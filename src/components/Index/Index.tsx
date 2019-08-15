import React, { FC } from 'react';

import styles from './Index.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  text: string[];
  isVisible: boolean;
}

const Index: FC<Props> = ({ text, isVisible }) => {
  const elements = [];
  let idx = 0;
  for (const c of text) {
    elements.push(
      <span key={idx++} className={cx(`line-${idx}`)}>
        {c}
      </span>,
    );
  }

  return (
    <div className={cx('modal', { show: isVisible, hide: !isVisible })}>
      {elements}
    </div>
  );
};

export default Index;
