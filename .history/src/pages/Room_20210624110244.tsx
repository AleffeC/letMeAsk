import logoImg from '../assets/images/logo.svg';

export function Room(){
  return (
   <div id="page-room">		
		<header>
		   <div className="content">
	    	      <img src={logoImg}></img>       
		   </div>	
		</header>
		    <div className="main-content">
			<img src={logoImg} alt="Letmeask" />			
			<h2>Criar uma nova sala</h2>			
			<form onSubmit={handleCreateRoom}>
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
 </div>	
  );
}