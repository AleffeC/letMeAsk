// type ButtonProps = {
// 	children?: string;
// }

// import { useState } from "react";
import {ButtonHTMLAttributes} from 'react';

import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){
	// // let counter = 0;
	// const [counter, setCounter] = useState(0) // Variavel de stado

	// function increment(){
	//   setCounter(counter + 1); // manipular variavel de etado
	// //   counter += 1;
	// }

	return (
	  // <button>{props.children || 'Default'}</button>
	  <button className="button"{...props} />	 
	)	
}
