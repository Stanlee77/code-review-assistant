import { Slot, component$ } from "@builder.io/qwik"
import type { JSX } from "@builder.io/qwik/jsx-runtime";

interface IfProps {
    condition: boolean;
    otherwise?: JSX.Element | JSX.Element[];
}

export default component$<IfProps>(({ condition, otherwise = null }) => {
    return (
        <>
            {condition ? <Slot /> : otherwise}
        </>
    );
});
