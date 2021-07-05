import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAsync } from '../state/slices/todos.slice'
import { MdAdd } from 'react-icons/md';


const AddTodoForm = () => {
    const [value, setValue] = useState("");

    const dispatch = useDispatch();

    const onSubmitForm = (event) => {
        event.preventDefault();
        dispatch(addTodoAsync({ title: value }));
        setValue('');
    };

    return (
        <Main>
            <form onSubmit={onSubmitForm}>
                <label>ToDo:
                <Input
                        type="text"
                        placeholder="write here to add toDo"
                        onChange={(event) => setValue(event.target.value)}
                        value={value}
                    ></Input>
                </label>
                <Button type="submit" ><h2><MdAdd /></h2></Button>
            </form>
        </Main>
    )
}

export default AddTodoForm;

const Main = styled.div`
    width: 80%;
    padding: 3rem 0;
    margin: 0 auto;
    /* padding-left: 20%; */
  /* border: 3px solid midnightblue; */
  border-radius: 1rem;
`;

const Input = styled.input`
    width: 66%;
    padding: 3rem 0;
`;

const Button = styled.button`
    width: 10rem;
    padding: 2rem 0;

`;