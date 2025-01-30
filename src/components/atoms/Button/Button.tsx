import React from 'react';
import styled from 'styled-components';
import { IButtonProps } from './Button.props';
import './Button.css';

const StyledButton = styled.button<IButtonProps>`
    width: ${(props: IButtonProps) => props.width};
    height: ${(props: IButtonProps) => props.height};
    background-color: ${(props: IButtonProps) =>
        props.theme === 'neutral' ? 'var(--main-color)' : 'var(--last-color)'};
    color: ${(props: IButtonProps) => (props.theme === 'neutral' ? '#000' : '#fff')};
`;

export const Button: React.FC<IButtonProps> = ({ width, height, theme, label, disabled, onClick }) => {
    return (
        <StyledButton className='generic-button' width={width} height={height} theme={theme} label={label} disabled={disabled} onClick={onClick}>
            {label}
        </StyledButton>
    );
};