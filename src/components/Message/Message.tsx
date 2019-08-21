import React, { SFC } from 'react';
import classNames from 'classnames/bind';

import styles from './Message.module.scss';

const cx = classNames.bind(styles);

interface Props {
  text: string | string[];
  animation?: 'stretch';
}

const Message: SFC<Props> = ({ text, animation }) => {
  let contents;
  if (Array.isArray(text)) {
    contents = text.map(t => (
      <span className={cx('text', animation)}>{t}</span>
    ));
  } else {
    contents = <span className={cx('text', animation)}>{text}</span>;
  }
  return <div className={'modal'}>{contents}</div>;
};

export default Message;
