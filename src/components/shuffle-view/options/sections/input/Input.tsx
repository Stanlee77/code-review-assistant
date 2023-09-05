import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <div class="flex flex-col">
            <label for="pr-link" class="text-xl">Pull Request Link</label>
            <input
                id="pr-link"
                autoComplete="none"
                type="text"
                spellcheck={false}
                class="bg-transparent outline-none border-b-2 border-white text-gray-400 ml-1 mt-1"
            />
        </div>
    )
});