import React from "react";
import { todoState, statusOpt } from "../App";
import BottomStatus from "./BottomStatus";

type completeHandler = (id: string) => void;

interface listProps {
	todos: todoState;
	completeHandler: completeHandler;
	statusHandler: (stat: statusOpt) => void;
	deleteHandler: (id: string) => void;
	clearHandler: () => void;
	pendings: number;
}

export default function ListTodo(props: listProps) {
	return (
		<div className="lower container">
			{props.todos.map((todo, idx) => {
				return (
					<div className="todo" key={idx}>
						<div className="todo__cb-container">
							<div className="todo__bg-grad">
								<div className="todo__round">
									<input
										type="checkbox"
										id="checkbox"
										className="todo__checkbox"
										checked={todo.completed}
										onChange={(e) => e.preventDefault()}
									/>
									<label
										htmlFor="checkbox"
										onClick={(e) =>
											props.completeHandler(todo.id)
										}
									></label>
								</div>
							</div>
						</div>
						<p className="todo__content">{todo.note}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							className="todo__cross"
							onClick={() => props.deleteHandler(todo.id)}
						>
							<path
								fill="#494C6B"
								fillRule="evenodd"
								d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
							/>
						</svg>
					</div>
				);
			})}
			<div className="todo todo-container flex flex-sb">
				<p className="todo__time">{`${props.pendings} taks left`}</p>
				<div className="todo__extra flex flex-c">
					<BottomStatus statusHandler={props.statusHandler} />
				</div>
				<p className="todod__clear" onClick={props.clearHandler}>
					Clear completed
				</p>
			</div>
		</div>
	);
}
