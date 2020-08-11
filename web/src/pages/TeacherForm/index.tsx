import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import Select from '../../components/Select';

import api from '../../services/api';

import warningIcon from '../../assets/images/icons/warning.svg';

import {
  Container,
  Content,
  Footer
} from './styles';

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [bio, setBio] = useState('');

  const [subject, setSubject] = useState('');
  const [cost, setCost] = useState('');

  const [scheduleItems, setScheduleItems] =  useState([
    {week_day: 0, from: '', to: ''},    
  ]);

  function addNewScheduleItem() {
    setScheduleItems([ 
      ...scheduleItems,
      {
        week_day: 0,
        from: '',
        to: '',
      }
    ]);
  }

  function setScheduleItemValue(index: number, name: string, value: string) {
    const newArray = scheduleItems.map((scheduleItem, i) => {
      if(index == i) {
        return { ...scheduleItem, [name]: value };
      }      
      return scheduleItem;
    });

    setScheduleItems(newArray);
  }

  function handleFormSubmit(e: FormEvent) {
    e.preventDefault();

    api.post('classes', {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost: Number(cost),
      schedule: scheduleItems
    }).then(() => {
      history.push('/');
    }).catch(() => {
      console.log('Erro no cadastro');
    });
  }

  return(
    <Container>
      <PageHeader 
        title='Que incrível que você quer dar aulas.'
        description='O primeiro passo é preencher esse formulário de inscrição.'
      />

      <Content>
        <form onSubmit={handleFormSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input 
              label='Nome completo'
              name='name' 
              type='text'
              onChange={(e) => { setName(e.target.value) }}
              value={name}
            />
            <Input 
              label='Avatar'
              name='avatar' 
              type='text'
              onChange={(e) => { setAvatar(e.target.value) }}
              value={avatar}
            />
            <Input 
              label='Whatsapp'
              name='whatsapp' 
              type='text'
              onChange={(e) => { setWhatsapp(e.target.value) }}
              value={whatsapp}
            />
            <TextArea 
              label='Biografia'
              name='bio'
              onChange={(e) => { setBio(e.target.value) }}
              value={bio}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

            <Select 
              label='Matéria'
              name='subject'
              options={[
                {value: 'Artes', label: 'Artes'},
                {value: 'Biologia', label: 'Biologia'},
                {value: 'Matematica', label: 'Matematica'},
              ]}
              onChange={(e) => { setSubject(e.target.value) }}
              value={subject}
            />
            <Input 
              label='Custo da sua hora por aula'
              name='cost' 
              type='text'
              onChange={(e) => { setCost(e.target.value) }}
              value={cost}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
              <button type='button' onClick={addNewScheduleItem}>
              + Novo horário       
              </button>
            </legend>
            
            {scheduleItems.map((scheduleItem, index) => {
              return(
                <div className='schedule-item' key={scheduleItem.week_day}>
                  <Select 
                    label='Dia da Semana'
                    name='week_day'
                    options={[
                      {value: '0', label: 'Domingo'},
                      {value: '1', label: 'Segunda-feira'},
                      {value: '2', label: 'Terça-feira'},
                    ]}
                    value={scheduleItem.week_day}
                    onChange={e => { setScheduleItemValue(index, 'week_day', e.target.value) }}
                  />
                  <Input 
                    label='Das'
                    name='from' 
                    type='time'
                    value={scheduleItem.from}
                    onChange={e => { setScheduleItemValue(index, 'from', e.target.value) }}
                  /> 
                  <Input 
                    label='Até'
                    name='to' 
                    type='time'
                    value={scheduleItem.to}
                    onChange={e => { setScheduleItemValue(index, 'to', e.target.value) }}
                  /> 
                </div>
              );
            })}
            
          </fieldset>

          <Footer>
            <p>
              <img src={ warningIcon } alt='Aviso importante' />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type='submit'> 
              Salvar cadastro
            </button>
          </Footer>
        </form>
      </Content>
    </Container>
  );
}

export default TeacherForm;