import React, { useState } from "react";
import { themes } from "../App";

interface createProps {
	createHandler: (note: string) => void;
	themeChangeHandler: () => void;
	theme: themes;
}

export default function CreateTodo(props: createProps) {
	const [newNote, setNewNote] = useState<string>("");

	const onEnterPress = (e: any) => {
		if (e.keyCode === 13 && e.shiftKey === false) {
			e.preventDefault();
			let temp: HTMLInputElement = document.querySelector("#helloworld")!;
			temp.click();
		}
	};
	return (
		<div className="upper">
			<div className="container">
				<div className="upper__title flex flex-sb">
					<h1 className="upper__text">TODO</h1>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						viewBox="0 0 30 30"
						className="upper__icon"
						onClick={props.themeChangeHandler}
					>
						{props.theme === themes.light ? (
							<path
								fill="#FFF"
								fill-rule="evenodd"
								d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
							/>
						) : (
							<path
								fill="#FFF"
								fill-rule="evenodd"
								d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
							/>
						)}
					</svg>
				</div>
				<div className="todo">
					<form
						onSubmit={(evnt) => {
							evnt.preventDefault();
							props.createHandler(newNote);
							setNewNote("");
						}}
						id="upperform"
					>
						{/* <input
							className="todo__content upper__input"
							type="textarea"
							value={newNote}
							onChange={(evnt) => {
								setNewNote(evnt.target.value);
							}}
						/> */}
						<textarea
							id="testing"
							className="todo__content upper__input"
							value={newNote}
							onChange={(evnt) => {
								setNewNote(evnt.target.value);
							}}
							form="upperform"
							onKeyDown={onEnterPress}
							style={{ resize: "none" }}
						/>
						<div className="todo__cb-container">
							<div className="todo__round">
								<input
									id="checkbox"
									type="checkbox"
									className="todo__checkbox"
								/>
								<label
									htmlFor="checkbox"
									className="checked"
								></label>
							</div>
						</div>
						<input
							type="submit"
							id="helloworld"
							style={{ display: "none" }}
						/>
					</form>
				</div>
			</div>
		</div>
	);
}
