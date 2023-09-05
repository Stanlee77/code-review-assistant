import { component$, useSignal, $, useContext } from "@builder.io/qwik";
import RollButton from "./roll-button/RollButton";
import Roller from "./roller/Roller";
import Options from "./options/Options";
import type { Person } from "./ShuffleView.types";
import { PeopleContext } from "~/routes";

export default component$(() => {
    const rolling = useSignal(false);
    const rollResult = useSignal<Person[]>([])

	const allPeople = useContext(PeopleContext)
    const ROLL_AMOUNT = 2;

    const getRandomIdx = $((arr: Array<unknown>) => Math.floor(Math.random() * arr.length));
    const getAvailablePeople = $(() => allPeople.filter((person) => person.selected));

    const getRandomPeople = $(async (peopleNumber: number) => {
        const randomPeople = [];
        for (let i = 0; i < peopleNumber; i++) {
            const availablePeople = await getAvailablePeople();
            const randomIdx = await getRandomIdx(availablePeople);
            randomPeople.push(availablePeople[randomIdx]);
            availablePeople.splice(randomIdx, 1);
        }
        return randomPeople;
    });

    const handleRoll = $(
        async () => {
            if(ROLL_AMOUNT > (await getAvailablePeople()).length) {
                alert("You can't roll more people than there are selected in the list!");
                return;
            }

            rolling.value = true;
            setTimeout(() => {
                rolling.value = false;
            }, 1000);

            rollResult.value = Array.from(await getRandomPeople(ROLL_AMOUNT));
        }
    )

    return (
        <div class="grid grid-columns-main">
            <div class="centered-column px-7">
                <Options />
            </div>
            <div class="centered-column">
                <Roller
                    rolling={rolling}
                    rollResult={rollResult}
                />
            </div>
            <div class="centered-column">
                <RollButton
                    isRolling={rolling.value}
                    handleRoll={handleRoll}
                />
            </div>
        </div>
    )
});