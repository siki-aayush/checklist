import React, { useState } from "react";
import sunIcon from "../images/icon-sun.svg";

interface createProps {
	createHandler: (note: string) => void;
}

export default function CreateTodo(props: createProps) {
	const [newNote, setNewNote] = useState<string>("");
	return (
		<div className="upper">
			<div className="container">
				<div className="upper__title flex flex-sb">
					<h1 className="upper__text">TODO</h1>
					<img src={sunIcon} className="upper__icon" alt="" />
				</div>
				<div className="todo">
					<form
						onSubmit={(evnt) => {
							evnt.preventDefault();
							props.createHandler(newNote);
							setNewNote("");
						}}
					>
						<input
							className="todo__content upper__input"
							type="text"
							value={newNote}
							onChange={(evnt) => {
								setNewNote(evnt.target.value);
							}}
						/>
						<div className="todo__cb-container">
							<div className="todo__round">
								<input
									type="checkbox"
									className="todo__checkbox"
								/>
								<label
									htmlFor="checkbox"
									className="checked"
								></label>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
