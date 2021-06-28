import logoImg from '../assets/images/logo.svg';
import { useParams } from 'react-router';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../styles/rooms.scss';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

  type RoomParams = {
	  id: string;
  }

export function Room(){
  const {user} = useAuth(); 
  const params = useParams<RoomParams>();  
  const [newQuestion, setNewQuestion] = useState('');

  const romId = params.id;

  async function handleSendQuestion(){
	if(newQuestion.trim() === '') return;

	if(!user) {
	  throw new Error('You must be logged in');
	}

	const question = {
	   content: newQuestion,
	   author:{
	      name: user?.name,
	   },
	};
  }

  return (
   <div id="page-room">		
		<header>
		   <div className="content">
	    	      <img src={logoImg} alt="Letmeask"/>     
		      <RoomCode code={romId}/>
		   </div>	
		</header>

		   <main>			
			<div className="room-title">
				<h1>Sala React</h1>
				<span>4 perguntas</span>
			</div>	

			<form >
				<textarea 
				   placeholder="O que voce quer perguntar?"
				   onChange={event => setNewQuestion(event.target.value)}
				   value={newQuestion}
				/>

				<div className="form-footer">
				   <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
				   <Button type="submit">Enviar pergunta</Button>
				</div>				
			</form>			
		</main>
 </div>	
  );
}