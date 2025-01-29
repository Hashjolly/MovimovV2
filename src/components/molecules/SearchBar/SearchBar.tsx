import React, { useState } from 'react';
import Button from '@components/atoms/Button/Button';
import Input from '@components/atoms/Input/Input';
import "./SearchBar.css";
import { SearchBarProps } from './SearchBar.props';

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar">
            <Input
                width="250px"
                height="40px"
                theme="neutral"
                placeholder="Rechercher un film..."
                onChange={(e) => setQuery(e.target.value)}
            />
            <Button
                width="100px"
                height="40px"
                theme="colored"
                label="Rechercher"
                onClick={handleSearch}
            />
        </div>
    );
};

export default SearchBar;