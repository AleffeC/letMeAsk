import copyImg from '../assets/images/copy.svg'

import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}

export function RoomCode(){
	function copyRoomCodeToclipboard(props: RoomCodeProps){
		navigator.clipboard.writeText(props.code)
	}

	return (
	   <button className="room-code">
              <div>
		 <img src={copyImg} alt="Copy room code"/>
	      </div>
	      <span>Sala #1238123767123</span>
	   </button>
	);
}