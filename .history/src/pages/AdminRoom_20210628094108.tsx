import logoImg from '../assets/images/logo.svg';
import { useParams } from 'react-router';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../styles/rooms.scss';
import { useAuth } from '../hooks/useAuth';
import { Question } from '../components/Question';
import { useRoom } from '../hooks/useRoom';
import deleteImg from '../assets/images/delete.svg';
import { database } from '../services/firebase';
import { useHistory } from 'react-router-dom';
import checkImg from '../assets/images/check.svg';
import answerImg from '../assets/images/answer.svg';

 type RoomParams = {
	id: string;
}

export function AdminRoom(){
  const {user} = useAuth(); 
  const history = useHistory()
  const params = useParams<RoomParams>();  
  const roomId = params.id;  
  const { title, questions } = useRoom(roomId);

  async function handleEndRoom(){
     await database.ref(`rooms/${roomId}`).update({
	   endedAt: new Date(),
     });	

     history.push('/')
  }

  async function handleDeleteQuestion(questionId : string){
	if(window.confirm('Quer mesmo deletar?')){
	   await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
	}
  }

  async function handleCheckQuestionAsAnswered(questionId : string){
	if(window.confirm('Quer mesmo deletar?')){
	   await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
	}
  }

  async function handleHighlightQuestion(questionId : string){
	if(window.confirm('Quer mesmo deletar?')){
	   await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
	}
  }

  return (
   <div id="page-room">		
		<header>
		   <div className="content">
	    	      <img src={logoImg} alt="Letmeask"/>     
		      <div>
			 <RoomCode code={roomId}/>
		     	 <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
		      </div>
		   </div>	
		</header>

		   <main>			
			<div className="room-title">
				<h1>Sala {title}</h1>
				{questions.length > 0 && <span>{questions.length} perguntas</span>}
			</div>				

			<div className="question-list">
				{questions.map(question => {
				return (
				 <Question
					key={question.id}
					content={question.content}
					author={question.author}
				 >

				  <button type="button" onClick={() => handleCheckQuestionAsAnswered(question.id)}>
				     <img src={checkImg} alt="Marcar como respondida"/>
				  </button>
				  <button type="button" onClick={() => handleHighlightQuestion(question.id)}>
				     <img src={answerImg} alt="Dar destaque pra pergunta"/>
				  </button>
				  <button type="button" onClick={() => handleDeleteQuestion(question.id)}>
				     <img src={deleteImg} alt="remover pergunta"/>
				  </button>
				 </Question>
				);
				})}
			</div>	
			
			{/* {JSON.stringify(questions)}	 */}
		</main>
 </div>	
  );
}