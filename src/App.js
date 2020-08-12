import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

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


const App = () => {
    return (
        <div>
            <Search />
            {/* <Accordion items={items} /> */}
        </div>
    );
};

export default App;