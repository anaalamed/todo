import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync, updateTodoAsync } from "../state/slices/todos.slice";
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';


const Todo = ({ _id, title, completed }) => {
    const [update, setUpdate] = useState(false);
    const [value, setValue] = useState("");
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(toggleCompleteAsync({ _id: _id, completed: !completed }))
    }

    const handleDelete = () => {
        dispatch(deleteTodoAsync({ _id: _id }));
    }

    const handleUpdate = (event) => {
        event.preventDefault();
        console.log("boom");
        console.log(value);
        dispatch(updateTodoAsync({ _id: _id, title: value }))
        setUpdate(false);
        setValue("");
    }

    return (
        <>
            {
                update ? (
                    <form onSubmit={handleUpdate} >
                        <input
                            type="text"
                            placeholder="update toDo"
                            onChange={(event) => setValue(event.target.value)}
                            value={value}>
                        </input>
                    </form >
                ) : (
                        <Box>
                            <span>
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={handleComplete}
                                ></input>
                                <span>{title}</span>
                            </span>
                            <Tools>
                                <button onClick={handleDelete}><h3><AiOutlineDelete /></h3></button>
                                <button onClick={() => setUpdate(true)}><h3><AiFillEdit /></h3></button>
                            </Tools>
                        </Box>
                    )}
        </>
    );
};

export default Todo;

const Box = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    border-radius: 1rem;
    border-bottom: 1px solid midnightblue;
`;

const Tools = styled.div`
    display: none;
    padding: 0.4rem;

    ${Box}:hover & {
        display: inline;
    }
`;






