import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen ] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (e) => {
            //This will check if the element that was clicked on is inside of our dropdown component (JSX)
            if (ref.current.contains(e.target)) {
                return;
            }
            // console.log(e.target);
            setOpen(false);
        }
        
        document.body.addEventListener('click', onBodyClick);

        return () => {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);
    

    const renderedOptions = options.map((option) => {
        if (option.value === selected.value){
            return null;
        };

        return (
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });
    
    // console.log(ref.current);

    return (
        <div>
            <div ref={ref} className="ui form">
                <div className="field">
                    <label className="label">
                        {label}
                    </label>
                    <div 
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    >
                        <i className="dropdown icon"></i>
                        <div className="text">{selected.label}</div>
                        <div 
                        
                        className={`menu ${open ? 'visible transition' : ''}`}
                        >
                            {renderedOptions}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Dropdown;