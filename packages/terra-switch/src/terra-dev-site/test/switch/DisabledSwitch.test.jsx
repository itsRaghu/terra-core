import React from 'react';
import classNames from 'classnames/bind';
import Switch from '../../../Switch';
import styles from './SwitchCommonExample.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div className={cx('container')}>
    <Switch
      id="disabledSwitch"
      labelId="label2"
      checked
      label="Label"
      disabled
    />
  </div>
);
