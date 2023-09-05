import type { Signal} from "@builder.io/qwik";
import { component$, useContext } from "@builder.io/qwik";
import { PeopleContext } from "~/routes";
import type { Person } from "../ShuffleView.types";
import If from "~/components/If/If";

interface RollerProps {
	rolling: Signal<boolean>;
	rollResult: Signal<Person[]>;
}

export default component$<RollerProps>(({ rolling, rollResult }) => {
	const allPeople = useContext(PeopleContext)
	const availablePeople = allPeople.filter((person) => person.selected);
	const names = availablePeople.map((person) => <li key={person.fullName}>{person.fullName}</li>);
	const resultNames = rollResult.value.length
		? rollResult.value
			.map((person) => <li key={person.username}>{person.fullName}</li>)
		: null;

    return (
		<div>
			<If condition={Boolean(!rolling.value)} otherwise={<h1 class="text-2xl">Rolling...</h1>}>
				<If condition={Boolean(rollResult.value.length)} otherwise={<h1 class="text-2xl">Let's roll!</h1>}>
					<h1 class="text-2xl">The chosen ones:</h1>
				</If>
			</If>
			<ul class="text-3xl">
				{rolling.value ? names : resultNames}
			</ul>
		</div>
    );
});