import type { QwikMouseEvent} from "@builder.io/qwik";
import { component$, useStyles$ } from "@builder.io/qwik";
import style from "./checkboxes.css?inline";
import If from "~/components/If/If";
import type { Person } from "~/components/shuffle-view/ShuffleView.types";

interface CheckboxProps {
	id: string;
	label: string;
	selected?: boolean;
	handleClick: (e: QwikMouseEvent) => void ;
}

const Checkbox = component$<CheckboxProps>(({ id, label, selected, handleClick }) => (
	<div>
		<input id={id} type="checkbox" class="custom-checkbox" checked={selected} onClick$={handleClick}/>
		<label for={id}>{label}</label>
	</div>
));

export default component$<{ availablePeople: Person[], handlePersonSelection: (e: QwikMouseEvent) => void }>(({ availablePeople, handlePersonSelection }) => {
	useStyles$(style)

	return (
		<div>
			<label for="people" class="text-xl">People</label>
			<div class="flex flex-wrap gap-2 p-1">
				<If
					condition={availablePeople.length > 0}
					otherwise={<div class="text-red-500">No teammates found! Check .env file.</div>}
				>
					{availablePeople.map(
						(person) => <Checkbox
										key={person.username}
										id={person.username}
										label={person.fullName}
										selected={person.selected}
										handleClick={handlePersonSelection}
									/>
					)}
				</If>
			</div>
		</div>
	)
});
