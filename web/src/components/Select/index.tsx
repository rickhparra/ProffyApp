import React, { SelectHTMLAttributes } from 'react';

import { SelectBlock } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;  
  name: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return(
    <SelectBlock>
      <label htmlFor={ name }>{ label }</label>
      <select value='' id={ name } { ...rest }>
        <option value='' disabled hidden>Selecione uma opção</option>
        {options.map(opt => {
          return <option key={opt.value} value={opt.value}>{opt.label}</option>
        })}
      </select>
    </SelectBlock>
  );
}

export default Select;