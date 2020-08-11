import React, { InputHTMLAttributes } from 'react';

import { InputBlock } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;  
  name: string;
}

const Input: React.FC<IInputProps> = ({ label, name, ...rest }) => {
  return(
    <InputBlock>
      <label htmlFor={ name }>{ label }</label>
      <input type='text' id={ name } { ...rest } />
    </InputBlock>
  );
}

export default Input;