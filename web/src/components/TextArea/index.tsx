import React, { TextareaHTMLAttributes } from 'react';

import { TextAreaBlock } from './styles';

interface ITextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;  
  name: string;
}

const TextArea: React.FC<ITextAreaProps> = ({ label, name, ...rest }) => {
  return(
    <TextAreaBlock>
      <label htmlFor={ name }>{ label }</label>
      <textarea id={ name } { ...rest } />
    </TextAreaBlock>
  );
}

export default TextArea;