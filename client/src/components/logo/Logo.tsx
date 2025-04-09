import React, { JSX } from 'react';
import { FcStumbleupon } from "react-icons/fc";

// Interface for Logo
interface Logo {
    name: string;
    icon: JSX.Element;
}

const LogoComponent = () => {
    const logoData: Logo = {
        name: 'Fashion',
        icon: <FcStumbleupon />
    };

    return (
        <div>
            <div>{logoData.name}</div>
            <h1>{logoData.icon}</h1>
        </div>
    );
}

export default LogoComponent;