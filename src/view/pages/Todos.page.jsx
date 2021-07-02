import Todo from '../Todo.view';
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodoAsync, fetchTodos } from '../../state/slices/todos.slice'

const Todos = () => {
    const [value, setValue] = useState("");
    const { todo } = useSelector(state => state.todos);
    const dispatch = useDispatch();

    const onSubmitForm = (event) => {
        event.preventDefault();
        dispatch(addTodoAsync({ title: value }));
        setValue('');
    };

    // fetch every time after change 
    useEffect(() => {
        dispatch(fetchTodos());
    });

    return (
        <Main>
            <Title>ToDo List</Title>

            <form onSubmit={onSubmitForm}>
                <label>ToDo:
                <input
                        type="text"
                        placeholder="write here to add toDo"
                        onChange={(event) => setValue(event.target.value)}
                        value={value}
                    ></input>
                </label>
                <button type="submit" >Add</button>
            </form>

            <h2>ToDo</h2>
            <Section>
                {todo.filter(item => item.completed === false).map(i =>
                    (<Todo key={i._id} {...i}></Todo>)
                )}
            </Section>

            <h2>Done</h2>
            <Section>
                {todo.filter(item => item.completed === true).map(i =>
                    (<Todo key={i._id} {...i}></Todo>)
                )}
            </Section>
        </Main>

    )
}

export default Todos;

const Main = styled.main`
  height: 100%;
  width: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgb(54,25,218);
  background: linear-gradient(0deg, rgba(54,25,218,1) 18%, rgba(253,187,45,1) 100%);
`;

const Section = styled.section`
    width: 65%;
    margin: 1rem;
    border: 3px solid midnightblue;
    background-color: moccasin;
    /* padding: 1rem; */
    min-height: 5rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  color: #1114e7;
  line-height: 1.15;
  font-size: 3rem;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
`;