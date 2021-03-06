import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import {Button} from '../components/Button';

export function NewRoom(){
	return(
	   <div id="page-auth">
		<aside>
		     <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostar" />
		     <strong>Crie salas de Q&amp;A ao-vivo</strong>
		     <p>Tire as duvidas da sua audiência em tempo-real</p>
		</aside>
		<main>
		    <div className="main-content">
			<img src={logoImg} alt="Letmeask" />			
			<div className="separator">ou entre em uma sala</div>
			<form>
				<input 
				   type="text" 
				   placeholder="Digete o codigo da sala"
				/>
				<Button type="submit">
				    Entrar na sala	
				</Button>
			</form>
		    </div>	
		</main>
	   </div>
	)
}