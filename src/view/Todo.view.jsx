import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleCompleteAsync, deleteTodoAsync } from "../state/slices/todos.slice";
import { AiOutlineDelete, AiFillEdit } from 'react-icons/ai';

// let show_tools = 0;

const Todo = ({ _id, title, completed }) => {
    const dispatch = useDispatch();

    const handleComplete = () => {
        dispatch(toggleCompleteAsync({ _id: _id, completed: !completed }))
    }

    const handleDelete = () => {
        dispatch(deleteTodoAsync({ _id: _id }));
    }

    return (
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
                <button><h3><AiFillEdit /></h3></button>
            </Tools>
        </Box>
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
    padding: 0.4rem;
`;






