import { writable, type Writable } from "@amadeus-it-group/tansu";

export type ButtonState = {
    disabled: boolean;
    label: string;
    onClick: () => void;
};

export function buttonStateFactory(initialState?: Partial<ButtonState>): {[prop in keyof ButtonState]: Writable<ButtonState[prop]>} {
    return {
        disabled: writable(initialState?.disabled ?? false),
        label: writable(initialState?.label ?? ''),
        onClick: writable(initialState?.onClick ?? (() => {}))
    };
}