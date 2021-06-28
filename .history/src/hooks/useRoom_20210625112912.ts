import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";

type QuestionType = {
	id: string;
        author: {
	  name: string;
	  avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
}

type FirebaseQuestions = Record<string, { //um objeto que recebe como parametro uma string e um outro objeto
	author: {
	  name: string;
	  avatar: string;
	}
	content: string;
	isAnswered: boolean;
	isHighlighted: boolean;
	likes: Record<string, {
	   authorId: string;
	}>
}>

export function useRoom(roomId: string){
	const [questions, setQuestions] = useState<QuestionType[]>([]); 
	const [title, setTitle] = useState(''); 
	const {user} = useAuth();

	useEffect(()=> {
		const roomRef = database.ref(`rooms/${roomId}`);

		roomRef.on('value', room => {
			const databaseRoom = room.val();
			const firebaseQuestions : FirebaseQuestions = databaseRoom.questions ?? {};

			const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
			return {
				id: key,
				content: value.content,
				author: value.author,
				isHighlighted: value.isHighlighted,
				isAnswered: value.isAnswered,
				likeCount: Object.values(value.likes ?? {}).length,
				hasLiked: Object.values(value.likes ?? {}).some(like => like.authorId === user?.id)
			     }
			})

			setTitle(databaseRoom.title);
			setQuestions(parsedQuestions);
		})

		return () =>{
		   roomRef.off('value');
		}

	}, [roomId, user?.id])

    return {questions, title}
}