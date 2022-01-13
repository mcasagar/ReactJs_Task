
import React from 'react';
import NavItem from './NavItem';

const Navigation = () => {
    return (
        <div>
            <NavItem path="/" label="Veg" />
            <NavItem path="Non_Veg" label="Non_Veg" />
            <NavItem path="Chinese" label="Chinese" />
        </div>
    )
};

export default Navigation;
