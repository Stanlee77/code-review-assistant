import type { Signal } from "@builder.io/qwik";
import {
  component$,
  useContext,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import { PeopleContext } from "~/routes";
import type { Person } from "../ShuffleView.types";
import styles from "./Roller.css?inline";
interface RollerProps {
  rolling: Signal<boolean>;
  rollResult: Signal<Person[]>;
}

const animationFactors = {
  roll: [
    { items: 1, duration: "3s", delay: 0.6 },
    { items: 2, duration: "3s", delay: 0.6 },
    { items: 3, duration: "3s", delay: 0.6 },
    {
      items: 4,
      duration: "3s",
      delay: 0.6,
    },
    {
      items: 5,
      duration: "3s",
      delay: 0.6,
    },
  ],
  tilt: [
    { items: 1, duration: "3s", delay: 0.6 },
    { items: 2, duration: "3s", delay: 0.6 },
    { items: 3, duration: "3s", delay: 0.6 },
    { items: 4, duration: "3s", delay: 0.6 },
    { items: 5, duration: "3s", delay: 0.6 },
  ],
};

export default component$<RollerProps>(
  ({ rolling, rollResult, currentIdx }) => {
    useStyles$(styles);
    const hasBeenRolled = useSignal(false);
    const allPeople = useContext(PeopleContext);
    const availablePeople = allPeople.filter((person) => person.selected);
    if (rolling.value) hasBeenRolled.value = true;
    const names = [
      ...availablePeople,
      ...availablePeople,
      ...availablePeople,
      ...availablePeople,
      ...availablePeople,
    ]
      .slice(0, 10)
      .map((person, idx) => (
        <li
          key={person.fullName}
          class="absolute opacity-25 w-300"
          style={{
            animationPlayState:
              !hasBeenRolled.value || rolling.value ? "running" : "paused",
            animationDuration: "3s",
            animationDelay: idx * 0.6 + "s",
            perspective: "300px",
          }}
        >
          <div
            class="border-solid border-b-2 border-white py-2"
            style={{
              animationPlayState:
                !hasBeenRolled.value || rolling.value ? "running" : "paused",
              animationDuration: "3s",
              animationDelay: idx * 0.6 + "s",
              transformOrigin: "center bottom",
            }}
          >
            {person.fullName}
          </div>
        </li>
      ));

    return (
      <div>
        <ul class="custom-roll-animation text-4xl flex flex-gap flex-col gap-2 items-center relative">
          {names}
        </ul>
      </div>
    );
  }
);
