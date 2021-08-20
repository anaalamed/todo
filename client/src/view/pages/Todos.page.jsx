import Todo from '../Todo.view';
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTodos } from '../../state/slices/todos.slice'
import AddTodoForm from '../AddTodoForm.view';
import '../../styles/animation.css'



const Todos = () => {
    const { todo, is_loading, error_msg } = useSelector(state => state.todos);
    const { me } = useSelector(state => state.users);

    const dispatch = useDispatch();

    // fetch on the start 
    if (Object.keys(me).length !== 0) {
        useEffect(() => {
            dispatch(fetchTodos(me._id));
        }, []);
    }

    var bubbles = [];
    for (var i = 0; i < 100; i++) {
        bubbles.push(<div className="bubble x">X</div>);
        bubbles.push(<div className="bubble v">V</div>);
    }

    if (is_loading === true) return (<Main />)
    if (error_msg) return (<p>{error_msg}</p>)

    return (
        <>
            <Main>
                <Title>ToDo List</Title>
                {(Object.keys(me).length !== 0) ? (<AddTodoForm userId={me._id} />) : (<a href="/login">Log In</a>)}

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
            <div className="bottom-particles">{bubbles}</div>
        </>
    )
}

export default Todos;

const Main = styled.main`
    height: 100%;
    width: 100%;
    padding: 7rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

`;

const Section = styled.section`
    width: 55%;
    margin: 1rem;
    border: 3px solid midnightblue;
    background-color: moccasin;
    padding: 1rem;
    min-height: 10rem;
    border-radius: 1rem;
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