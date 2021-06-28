import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIcon from '../assets/images/google-icon.svg'

export function Home(){
	return(
	   <div>
		<aside>
		     <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostar" />
		     <strong>Crie salas de Q&amp; A ao-vivo</strong>
		     <p>Tire as duvidas da sua audiência em tempo-real</p>
		</aside>
		<main>
		    <div>
			<img src={logoImg} alt ="Letmeask" />
			<button>
				<img src={googleIcon} alt=""/>
			   Crie sua sala com o Google
			</button>
		    </div>	
		</main>
	   </div>
	)
}