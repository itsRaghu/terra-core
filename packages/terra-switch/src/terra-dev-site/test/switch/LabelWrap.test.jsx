import React, { useState } from 'react';
import Switch from '../../../Switch';

const SwitchWithLongLabelText = () => {
  const [value, setValue] = useState(true);
  return (
    <Switch
      switchId="switchWithLongLabel"
      labelId="label3"
      isChecked={value}
      labelText="Long Label Text Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label Text  Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label TextLong Label Text Long Label Text"
      onChange={setValue}
    />
  );
};

export default SwitchWithLongLabelText;
