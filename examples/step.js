import '@gem-mine/rc-time-picker/assets/index.less';

import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
import TimePicker from '@gem-mine/rc-time-picker';

ReactDom.render(
  <TimePicker defaultValue={moment()} showSecond={false} minuteStep={15} />,
  document.getElementById('__react-content'),
);
