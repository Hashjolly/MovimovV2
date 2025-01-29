import React from 'react';
import styled from 'styled-components';
import './Button.css';

interface IButtonProps {
    width: string;
    height: string;
    theme: 'neutral' | 'colored';
    content?: string;
    onClick?: () => void;
}

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

const Button: React.FC<IButtonProps> = ({ width, height, theme, onClick, content }) => {
    return (
        <StyledButton className='generic-button' width={width} height={height} theme={theme} onClick={onClick}>
            {content}
        </StyledButton>
    );
};

export default Button;