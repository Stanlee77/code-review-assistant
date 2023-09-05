import { component$, createContextId, useContextProvider } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { PEOPLE_EXAMPLE } from "~/components/shuffle-view/ ShuffleView.utils";
import ShuffleView from "~/components/shuffle-view/ShuffleView";
import type { Person } from "~/components/shuffle-view/ShuffleView.types";

export const PeopleContext = createContextId<Person[]>("PeopleContext");

export default component$(() => {
	const people = JSON.parse(import.meta.env.PUBLIC_PEOPLE);
	useContextProvider(PeopleContext, people ?? PEOPLE_EXAMPLE);

  return (
    <ShuffleView />
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
