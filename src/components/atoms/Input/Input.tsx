import React from 'react';
import styled from 'styled-components';
import './Input.css';

interface IInputProps {
    width: string;
    height: string;
    theme: 'neutral' | 'colored';
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyledInput = styled.input<IInputProps>`
    width: ${(props: IInputProps) => props.width};
    height: ${(props: IInputProps) => props.height};
    background-color: ${(props: IInputProps) =>
        props.theme === 'neutral' ? '#ccc' : '#F04FFF'};
    color: ${(props: IInputProps) => (props.theme === 'neutral' ? '#000' : '#fff')};

    &:focus {
        outline: none;
        background-color: ${(props: IInputProps) => (props.theme === 'neutral' ? '#aaa' : '#0056b3')};
    }
`;

const Input: React.FC<IInputProps> = ({ width, height, theme, placeholder, onChange }) => {
    return (
        <StyledInput
            className='generic-input'
            width={width}
            height={height}
            theme={theme}
            placeholder={placeholder}
            onChange={onChange}
        />
    );
};

export default Input;