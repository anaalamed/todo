import React from "react";
import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      {/* <Title>ToDo List</Title> */}
      <div>
        {/* <img src="https://www.oberlo.com/media/1605011858-to-do-list.jpg?fit=max&fm=webp&w=1824" /> */}
        <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_2164,w_3845,x_0,y_259/v1554918405/shape/mentalfloss/94735-istock-863607936.jpg?itok=ZYfiTd6J" />
      </div>
    </Main>
  );
};
export default Home;

const Main = styled.main`
  height: 100%;
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  line-height: 1.15;
  font-size: 4rem;
  text-align: center;
  background-color: white;
  padding: 2.2rem 4.4rem;
  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 2rem rgba(184, 187, 200, 0.3);
`;
const Description = styled.p`
  line-height: 2;
  text-align: center;
  font-size: 1.6rem;
`;
