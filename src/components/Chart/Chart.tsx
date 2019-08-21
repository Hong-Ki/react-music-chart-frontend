import React, { FC } from 'react';
import {
  LineChart,
  XAxis,
  Tooltip,
  YAxis,
  CartesianGrid,
  Line,
  ResponsiveContainer,
} from 'recharts';

import CustomTooltip from '../Tooltip/Tooltip';

/* types */
import { ChartData, Platform } from '../../modules/redux/charts';

/* styles */
import styles from './Chart.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface Props {
  data: ChartData[];
  current: Platform;
}

const colorset = [
  '#C09CD9',
  '#8582D9',
  '#04C4D9',
  '#D9D279',
  '#F29188',
  '#F2F2F2',
  '#65BF6B',
  '#F2CB05',
  '#F2A057',
  '#F24444',
  '#B3B3F0',
  '#C0D86D',
  '#F0DF78',
  '#F3B05B',
  '#F44243',
  '#A8E6CF',
  '#DCEDC1',
  '#FFD3B6',
  '#FFAAA5',
  '#FF8B94',
  '#809BBF',
  '#03588C',
  '#F2E085',
  '#F2A679',
  '#F26D6D',
];

const ticks = [...Array(25)].map((_, i = 0) => i + 1);
const Chart: FC<Props> = ({ data, current }) => {
  const songSet = new Set<string>();
  const series = data.map(dateInfo => {
    const info = {
      date: dateInfo.date.substr(0, 8),
      time: dateInfo.date.substr(-2),
    };

    dateInfo[current].forEach(song => {
      const songKey = `${song.title}-${song.artist}`;
      songSet.add(songKey);
      Object.assign(info, { [songKey]: song.rank });
    });

    return info;
  });

  const lines = Array.from(songSet).map((song, idx = 0) => (
    <Line
      type="monotone"
      activeDot={{ stroke: 'white', strokeWidth: 2, r: 10 }}
      dataKey={song}
      stroke={colorset[idx]}
      key={idx++}
    />
  ));
  return (
    <div className={cx('chart')}>
      <ResponsiveContainer height="160%" width="100%">
        <LineChart
          data={series}
          onClick={e => {}}
          margin={{ right: 10, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <XAxis dataKey="time" />
          <YAxis type="number" ticks={ticks} reversed={true} />
          {lines}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
