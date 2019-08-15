import React, { SFC } from 'react';

import styles from './Navigation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  current: string;
  platforms: string[];
  onClick?(platform: string): void;
}

const Navigation: SFC<Props> = ({ current, platforms, onClick }) => {
  const elements = platforms.map(platform => (
    <span
      className={cx({ active: current === platform })}
      onClick={() => {
        if (onClick) onClick(platform);
      }}
    >
      {platform}
    </span>
  ));

  return <div className={cx('navi')}>{elements}</div>;
};

export default Navigation;
