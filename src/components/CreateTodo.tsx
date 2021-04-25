import React, { useState } from "react";

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
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="26"
						height="26"
						className="upper__icon"
					>
						<path
							fill="#FFF"
							fill-rule="evenodd"
							d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
						/>
					</svg>
					{/* <img src={sunIcon} className="upper__icon" alt="" /> */}
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
