import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';

export function Room(){
  return (
   <div id="page-room">		
		<header>
		   <div className="content">
	    	      <img src={logoImg} alt="Letmeask"/>     
			  <div>codigo</div>  
		   </div>	
		</header>
		   <main className="content">			
			<div className="room-title">
				<h1>Sala React</h1>
				<span>4 perguntas</span>
			</div>			
			<form >
				<textarea 
				   placeholder="O que voce quer perguntar?"
				/>
				<div className="form-footer">
				   <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
				   <Button>Enviar pergunta</Button>
				</div>
				<input 
				   type="text" 
				   placeholder="Nome da sala"
				   onChange={event => setNewRoom(event.target.value)}
				   value={newRoom}
				/>
				<Button type="submit">
				    Criar sala	
				</Button>				
			</form>
			<p>
			   Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>		
			</p>
		    </div>	
		</main>
 </div>	
  );
}