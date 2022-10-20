import React, {useEffect, useState} from 'react';

const App = () => {
    const [data, setState] = useState(null)
    const [toggle, setToggle] = useState(false)
    const [value, setValue] = useState('')
    const toggleHandler = () => setToggle(p => !p)
    useEffect(() => {
        setTimeout(() => {
            setState({})
        }, 100)
    }, [])
    return (
        <div>
            <div data-testid={'value'}>{value}</div>
            {data && <div>data</div>}
            {toggle && <div data-testid={'menu'}>menu</div>}
            <h1>Hello world</h1>
            <button data-testid="toggle-btn" onClick={toggleHandler}>click me</button>
            <input type="text" placeholder="input-text" value={value} onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
};

export default App;