/// <reference types="react" />
export interface RadioBoxProps {
    description?: string;
    disabled?: boolean;
    label: string;
    selected?: string | null;
    value: string;
    onClick?: React.MouseEventHandler<HTMLElement>;
}
