import React from 'react';
import styled from 'styled-components';

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
        props.theme === 'neutral' ? '#ccc' : '#007BFF'};
    color: ${(props: IButtonProps) => (props.theme === 'neutral' ? '#000' : '#fff')};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
        opacity: 0.8;
    }
`;

const Button: React.FC<IButtonProps> = ({ width, height, theme, onClick, content }) => {
    return (
        <StyledButton width={width} height={height} theme={theme} onClick={onClick}>
            {content}
        </StyledButton>
    );
};

export default Button;