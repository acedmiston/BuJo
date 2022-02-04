import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {styled } from '@mui/material/styles';

function Goals() {
    const [goalsList, setGoalsList] = useState([{goal: ""}]);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...goalsList];
        list[index][name] = value;
        setGoalsList(list);
    }

    const handleRemove = (index) => {
        const list = [...goalsList];
        list.splice(index,1);
        setGoalsList(list);
    }

    const handleAdd = () => {
        setGoalsList([...goalsList, {goal: ""}])
    }

    // need to write a test case to not allow new goal to be created if there is no value
    const handleKeyPress = e => {
        if(e.code === "Enter" || e.code === "NumpadEnter"){
            e.preventDefault();
            handleAdd();
        }
    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    });

    return (
        <form autoComplete='off'>
            <div>
                <label style={{paddingBotom: 5}}>Goals</label>
                {goalsList.map((g, index) => (
                    <div key={index} className='input-container'>
                        <div>
                            {/* <input 
                                name="goal"
                                type="text"
                                id="goal"
                                placeholder='Add a Goal'
                                value={g.goal}
                                onChange={(e) => handleChange(e, index)}
                                onKeyPress={(e) => handleKeyPress(e)}
                                required
                            /> */}
                            <Box component="form" noValidate autoComplete="off">
                                <CssTextField 
                                    autoFocus="autoFocus"
                                    name="goal"
                                    type="text"
                                    id="goal"
                                    placeholder='Add a Goal'
                                    value={g.goal}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    required 
                                />
                            </Box>
                            {/* {goalsList.length - 1 === index && (
                                <button
                                type="button"
                                onClick={handleAdd}
                                >
                                <span>Add a Goal</span>
                                </button>
                            )} */}
                        </div>
                        <div>
                        {goalsList.length !== 1 && (
                            // <button
                            // type="button"
                            // onClick={() => handleRemove(index)}
                            // >
                            // <span>X</span>
                            // </button>
                            <Button color="error" size="large" className='button-placement' onClick={() => handleRemove(index)}>
                                X
                            </Button>
                        )}
                        </div>
                    </div>
                ))}
            </div>
        </form>
    );
}

export default Goals;