import { component$ } from "@builder.io/qwik";

interface RollButtonProps {
	handleRoll: () => void;
	isRolling: boolean;
}

export default component$<RollButtonProps>(({ handleRoll, isRolling }) => {
	return (
		!isRolling ? (
			<button
				class="border-2 border-solid border-white px-10 py-0 hover:bg-white text-2xl text-white hover:text-black rounded-md transition duration-200 ease-out transform hover:scale-110"
				onClick$={handleRoll}
			>
				ROLL
			</button>
		)
		: null
	);
});