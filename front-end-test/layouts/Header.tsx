import React from "react";

export const AppHeader: React.FC = () => {
    return (
        <header role="heading">
            <div className="logo">
                <img src="/poke-logo.png" alt="poke logo" />
            </div>
            <div className="title">
                <h4>discover all pokemon information in one place</h4>
            </div>
        </header>
    );
};

AppHeader.displayName = "AppHeader";
