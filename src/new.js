import React, { useState } from 'react';

// the dynamic text prop
const New = ({ text }) => {

    // State to manage the displayed text
    const [showText, setShowText] = useState(text);

    // to handle the displayed text
    const handleClick = () => {
        setShowText('world');
    };

    return <span className="new-span" onClick={handleClick}>{showText}</span>;
};

export default New;
