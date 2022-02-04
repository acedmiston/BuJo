import React, { useState } from 'react';

function Weeks(){
    const [tasksList, setTasksList] = useState([{task: ""}]);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...tasksList];
        list[index][name] = value;
        setTasksList(list);
    }

    const handleRemove = (index) => {
        const list = [...tasksList];
        list.splice(index,1);
        setTasksList(list);
    }

    const handleAdd = () => {
        setTasksList([...tasksList, {task: ""}])
    }

    const handleKeyPress = e => {
        if(e.code === "Enter" || e.code === "NumpadEnter"){
            handleAdd();
        }
    } 

    return ( 
        <div>
            <label>Week 1: </label>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>M</th>
                        <th>Tu</th>
                        <th>W</th>
                        <th>Th</th>
                        <th>F</th>
                        <th>S</th>
                        <th>S</th>
                        <th>Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasksList.map((g,index) => {
                        <tr key={index}>
                            <input 
                            name="task"
                            type="text"
                            id="task"
                            placeholder='Add a Task'
                            value={g.task}
                            onChange={(e) => handleChange(e, index)}
                            onKeyPress={(e) => handleKeyPress(e)}
                            required                    
                            />
                            {tasksList.length !== 1 && (
                            <button
                            type="button"
                            onClick={() => handleRemove(index)}
                            >
                            <span>X</span>
                            </button>
                            )}
                        </tr>
                    })}
                    </tbody>       
                </table>
            </div>
        </div> 
    );
}

export default Weeks;