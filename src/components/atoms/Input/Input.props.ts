export interface IInputProps {
    width: string;
    height: string;
    theme: 'neutral' | 'colored';
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}