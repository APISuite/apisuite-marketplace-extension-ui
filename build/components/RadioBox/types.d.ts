/// <reference types="react" />
export interface RadioBoxProps {
    description?: string;
    disabled?: boolean;
    label: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
    selected?: string | null;
    value: string;
}
