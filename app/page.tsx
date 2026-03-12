"use client";

import { ToDo } from "./components/ToDo";

export default function App() {
	return (
		<main>
			<h1>My todos</h1>

			<ToDo />

			<div>
				🥳 App successfully hosted. Try creating a new todo.
				<br />
				<a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
					Review next steps of this tutorial.
				</a>
			</div>
		</main>
	);
}
