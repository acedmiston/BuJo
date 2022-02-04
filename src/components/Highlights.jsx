import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {styled } from '@mui/material/styles';

function Highlights() {
    const [highlightsList, setHighlightsList] = useState([{highlight: ""}]);

    const handleChange = (e, index) => {
        const {name, value} = e.target;
        const list = [...highlightsList];
        list[index][name] = value;
        setHighlightsList(list);
    }

    const handleRemove = (index) => {
        const list = [...highlightsList];
        list.splice(index,1);
        setHighlightsList(list);
    }

    const handleAdd = () => {
        setHighlightsList([...highlightsList, {highlight: ""}])
    }

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
        <div>
            <label>Highlights</label>
            {highlightsList.map((g, index) => (
                <div key={index} className='input-container'>
                    <div>
                        {/* <input 
                            name="highlight"
                            type="text"
                            id="highlight"
                            placeholder='Add a Highlight'
                            value={g.highlight}
                            onChange={(e) => handleChange(e, index)}
                            onKeyPress={(e) => handleKeyPress(e)}
                            required
                        /> */}
                        <Box component="form" noValidate autoComplete="off">
                                <CssTextField 
                                    autoFocus="autoFocus"
                                    name="highlight"
                                    type="text"
                                    id="highlight"
                                    placeholder='Add a Highlight'
                                    value={g.highlight}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyPress={(e) => handleKeyPress(e)}
                                    required 
                                />
                            </Box>
                        {/* {highlightsList.length - 1 === index && (
                            <button
                            type="button"
                            onClick={handleAdd}
                            >
                            <span>Add a Highlight</span>
                            </button>
                        )} */}
                    </div>
                    <div className='button-container'>
                    {highlightsList.length !== 1 && (
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
    );
}

export default Highlights;