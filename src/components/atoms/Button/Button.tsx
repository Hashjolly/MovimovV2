import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from './Button.props';
import './Button.css';

const StyledButton = styled.button<IButtonProps>`
    width: ${(props: IButtonProps) => props.width};
    height: ${(props: IButtonProps) => props.height};
    background-color: ${(props: IButtonProps) =>
        props.theme === 'neutral' ? '#ccc' : '#04A0F9'};
    color: ${(props: IButtonProps) => (props.theme === 'neutral' ? '#000' : '#fff')};

    &:hover {
        background-color: ${(props: IButtonProps) => (props.theme === 'neutral' ? '#aaa' : '#0056b3')};
    }
`;

const Button: React.FC<IButtonProps> = ({ width, height, theme, label, disabled, onClick }) => {
    return (
        <StyledButton className='generic-button' width={width} height={height} theme={theme} label={label} disabled={disabled} onClick={onClick}>
            {label}
        </StyledButton>
    );
};

export default Button;