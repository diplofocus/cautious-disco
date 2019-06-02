import React from 'react';
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
} from '@material-ui/core';

import { MySelect } from './App';

const isps = [
  {
    label: 'whatevs',
    value: 'asdfa',
  },
  {
    label: 'whateverss',
    value: 'asdfqwera',
  },
];

const oss = [
  {
    value: 'qwer',
    label: 'qwerkj',
  },
  {
    value: 'qwerwer',
    label: 'qwasdferkj',
  },
];

const MyCheckbox = ({ label, name }) => (
  <FormControlLabel control={<Checkbox />} label={label} name={name} />
);

const Oprema = () => (
  <>
    <MyCheckbox label="Internet" name="internet" />
    <MySelect label="Internet provajder" name="internet_provajder">
      {isps.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </MySelect>
    <MyCheckbox label="Racunar" name="racunar" />
    <MyCheckbox label="Tastatura" name="tastatura" />
    <MyCheckbox label="Mis" name="mis" />
    <MySelect label="Operativni sistem" name="os">
      {oss.map(({ label, value }) => (
        <option value={value} key={value}>
          {label}
        </option>
      ))}
    </MySelect>
    <MyCheckbox label="Kablovi" name="kablovi" />
    <MyCheckbox label="Stampac" name="stampac" />
    <MyCheckbox label="Tip posedovanja" name="tip_posedovanja" />
    <MyCheckbox label="POS Terminal" name="pos_terminal" />
    <MyCheckbox label="Banka za POS Terminal" name="banka_za_pos_terminal" />
  </>
);

export default Oprema;
