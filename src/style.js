import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const AppContemner = styled(Flex)`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  flex-direction: column;
`;
export const InputBox = styled(Flex)`
  width: 60%;
  justify-content: space-between;
  margin: 1rem 0;
`;
export const Ul = styled(Flex)`
  width: 62%;
  flex-direction: column;
  justify-content: space-around;
  max-height: 40vh;
  overflow: auto;
`;
export const StyledButton = styled.button`
  min-width: 20%;
  border: none;
  border-radius: 15px;
  min-height: 2rem;
  padding: 0 3rem;
  text-align: center;
  color: aliceblue;
  background-color: black;
`;
export const Input = styled.input`
  width: 78%;
  min-height: 2rem;
  border: none;
  border-radius: 15px;
  padding-left: 1rem;
  outline: none;
`;
export const ListItem = styled(Flex)`
  margin-bottom: 0.2rem;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border: 1px black solid;
  border-radius: 15px;
`;
