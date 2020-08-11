import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import {  
  Article
} from './styles';

export interface ITeacher {
  id: number;
  avatar: string;
  bio: string;
  cost: number;    
  name: string;
  subject: string;    
  whatsapp: string;
}

interface ITeacherItemProps {
  teacher: ITeacher;
}

const TeacherItem: React.FC<ITeacherItemProps> = (props) => {
  return(
    <Article className='teacher-item'>
      <header>
        <img src='https://randomuser.me/api/portraits/lego/5.jpg' />
        <div>
          <strong>{props.teacher.name}</strong>
          <span>{props.teacher.subject}</span>
        </div>            
      </header>
      <p>
        {props.teacher.bio}
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ {props.teacher.cost}</strong>
        </p>
        <a href={`https://wa.me/${props.teacher.whatsapp}`}>
          <img src={whatsappIcon} alt='Whatsapp' />
          Entrar em contato
        </a>
      </footer>
    </Article>
  );
}

export default TeacherItem;