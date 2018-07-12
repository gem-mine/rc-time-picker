/* eslint no-console:0 */

import '@sdp.nd/rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';

import moment from 'moment';

import TimePicker from '@sdp.nd/rc-time-picker';

const format = 'h:mm a';

const now = moment().hour(0).minute(0);

function onChange(value) {
  console.log(value && value.format(format));
}

ReactDom.render(
  <TimePicker
    showSecond={false}
    defaultValue={now}
    className="xxx"
    onChange={onChange}
    format={format}
    use12Hours
    inputReadOnly
    placeholder={'请选择时间'}
  />,
  document.getElementById('__react-content')
);
