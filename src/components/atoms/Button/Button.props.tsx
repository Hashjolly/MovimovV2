export interface IButtonProps {
    width: string;
    height: string;
    theme: 'neutral' | 'colored';
    label?: string;
    disabled?: boolean;
    onClick?: () => void;
}