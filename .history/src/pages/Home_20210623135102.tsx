import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { auth, firebase } from '../services/firebase';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIcon from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import {Button} from '../components/Button';

import { TestContext } from '../App';

export function Home(){

	const history = useHistory();
	const {value , setValue} = useContext(TestContext);

	function HandleCreateRoom(){
	   const provider = new firebase.auth.GoogleAuthProvider();

	   auth.signInWithPopup(provider).then(result => {
		 history.push('/rooms/new');
	   });
	   
	}

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
			<button onClick={HandleCreateRoom} className="create-room ">  
			   <img src={googleIcon} alt="Logo do google"/>
			   Crie sua sala com o Google
			</button>
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