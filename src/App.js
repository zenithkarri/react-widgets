import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';



const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend Javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favourite js library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];

const options = [
    {
        label: 'Red',
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    }
];



const App = () => {
    const [ selected, setSelected ] = useState(options[0]);

    return (
        <div>
            <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
            {/* <Accordion items={items} /> */}
        </div>
    );
};

export default App;