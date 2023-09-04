import { component$ } from "@builder.io/qwik"

export default component$(() => {
    return (
        <div class="flex flex-col">
        <label for="username" class="text-xl">You</label>
        <input
            id="username"
            autoComplete="none"
            type="text"
            spellcheck={false}
            class="bg-transparent outline-none border-b-2 border-white text-gray-300 ml-1 mt-1"
        />
        </div>
    )
});