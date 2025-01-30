import React from 'react';
import styled from 'styled-components';
import './Input.css';
import { IInputProps } from './Input.props';
import { FaSearch } from "react-icons/fa";

const StyledForm = styled.form<IInputProps>`
    width: ${(props: IInputProps) => props.width};
    height: ${(props: IInputProps) => props.height};
`;

export const Input: React.FC<IInputProps> = ({ width, height, placeholder, onChange }) => {
    return (
        <StyledForm className='search-bar' width={width} height={height} onSubmit={(e) => e.preventDefault()}>
            <FaSearch className="search-icon" />
            <input
                className='search-input-container'
                placeholder={placeholder}
                onChange={onChange}
            />
        </StyledForm>
    );
};