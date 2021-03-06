import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';


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
        <div className="ui container" style={{marginTop:"20px"}}>
            <Header />
            <Route path={'/'}>
                <Accordion items={items}/>
            </Route>
            <Route path={'/list'}>
                <Search />
            </Route>
            <Route path={'/dropdown'}>
                <Dropdown label={'Pick a color'} options={options} selected={selected} onSelectedChange={setSelected} />
            </Route>
            <Route path={'/translate'}>
                <Translate />
            </Route>
        </div>
    );
};

export default App;