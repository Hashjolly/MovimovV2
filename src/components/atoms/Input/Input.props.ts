type TSearch = React.FormEvent<HTMLFormElement> | React.MouseEvent<SVGElement, MouseEvent>

export interface IInputProps {
    width: string;
    height: string;
    placeholder?: string;
    searchEmpty?: boolean;
    onSearch?: (event : TSearch) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}