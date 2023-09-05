import type { QwikMouseEvent } from "@builder.io/qwik";
import { component$, useContext, $ } from "@builder.io/qwik";
// import Input from "./sections/input/Input";
import Checkboxes from "./sections/checkboxes/Checkboxes";
// import Autocomplete from "./sections/autocomplete/Autocomplete";
import { PeopleContext } from "~/routes";

export default component$(() => {
	const availablePeople = useContext(PeopleContext);

	const handlePersonSelection = $(
		(e: QwikMouseEvent) => {
			const { id, checked } = e.target as HTMLInputElement;
			availablePeople
				.forEach((person) => {
					if(person.username === id) person.selected = checked;
				})
		}
	);

    return (
		<div class="flex flex-col gap-5">
			{/* <Input /> */}
			<Checkboxes
				handlePersonSelection={handlePersonSelection}
				availablePeople={availablePeople}
			/>
			{/* <Autocomplete /> */}
		</div>
    );
});