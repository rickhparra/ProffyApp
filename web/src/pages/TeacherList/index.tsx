import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import api from '../../services/api';

import {
  Container,
  FormSearchTeacher,
  Content
} from './styles';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
  async function handleSearchTeachers(e: FormEvent) {
    e.preventDefault();

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return(
    <Container>
      <PageHeader title='Estes são os proffys disponíveis.'>
        <FormSearchTeacher onSubmit={handleSearchTeachers}>
          <Select 
            label='Matéria'
            name='subject'
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Matematica', label: 'Matematica'},
            ]}
            value={subject}
            onChange={(e) => { setSubject(e.target.value) }}
          />
          <Select 
            label='Dia da Semana'
            name='week_day'
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
            ]}
            value={week_day}
            onChange={(e) => { setWeekDay(e.target.value) }}
          />          
          <Input 
            label='Hora' 
            name='time' 
            type='time'
            value={time}
            onChange={(e) => { setTime(e.target.value) }}
          />

          <button type='submit'>
            Buscar
          </button>   
        </FormSearchTeacher>
      </PageHeader>

      <Content>
        {teachers.map((teacher: ITeacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} /> 
        })}               
      </Content>
    </Container>
  );
}

export default TeacherList;