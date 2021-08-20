import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAsync } from '../state/slices/todos.slice';
import { MdAdd } from 'react-icons/md';


const AddTodoForm = ({ userId }) => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const onSubmitForm = (event) => {
        event.preventDefault();
        dispatch(addTodoAsync({ title: value, user: userId }));
        setValue("");
    };

    return (
        <Main>
            <Form onSubmit={onSubmitForm}>
                <label>ToDo:</label>
                <Input
                    type="text"
                    placeholder="write here to add toDo"
                    onChange={(event) => setValue(event.target.value)}
                    value={value}>
                </Input>
                <Button type="submit" ><h2><MdAdd /></h2></Button>
            </Form>
        </Main>
    )
}

export default AddTodoForm;

const Main = styled.div`
    width: 55%;
    padding: 3rem 0;
    margin: 0 auto;
    border-radius: 1rem;
`;

const Form = styled.form`
    width: 80%;
    margin: 0 auto;
`;


const Input = styled.input`
    width: 60%;
    padding: 3rem 1rem;
    margin-left: 3rem;

`;

const Button = styled.button`
    width: 10rem;
    padding: 1.5rem 0;
    margin-left: 0;
    position: relative;
    top: 0.85rem;
    border-radius: 0;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
`;