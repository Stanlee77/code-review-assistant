import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1 class="text-3xl text-white text-center">Hello World</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: "CR Assistant",
  meta: [
    {
      name: "description",
      content: "Webapp to automatically assign and notify team members to perform CRs.",
    },
  ],
};
