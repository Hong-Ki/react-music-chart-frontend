import React, { SFC } from 'react';

import styles from './Tooltip.module.scss';
import classNames from 'classnames/bind';
import { TooltipPayload } from 'recharts';

const cx = classNames.bind(styles);

interface Props {
  payload?: TooltipPayload[];
  label?: string | number;
}

const Tooltip: SFC<Props> = ({ payload = [], label }) => {
  if (payload && payload.length > 0) {
    const {
      payload: { date, time },
    } = payload[0];

    console.log(payload);

    const list = payload
      .sort(({ value: a }, { value: b }) => (a < b ? -1 : 1))
      .map(({ name, value }, idx = 0) => (
        <div className={cx({ last: ++idx === payload.length })}>
          <span className={cx('rank')}>{value}</span>
          <span className={cx('value')}>{name}</span>
        </div>
      ));
    return (
      <div className={cx('tooltip')}>
        <p>{`${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6, 2)}, 
        ${Number(time)}`}</p>
        {list}
      </div>
    );
  }
  return <div />;
};

export default Tooltip;
