import { useState, useEffect ,useRef} from "react";
import {StyledButton,AppContemner, InputBox, Ul, Input,ListItem} from "./style"
function App() {
  const [value, setValue] = useState("");
  const [item, setItem] = useState([]);
  const focusInput=useRef()
  useEffect(() => {
    const itemLocal = localStorage.getItem("items");
    const localString = JSON.parse(itemLocal);
    if (localString) setItem(localString);
  }, []);
  const dateId=()=>{
    return  new Date().getTime().toString()
  }
  const handelAdd = () => {
    const newItem = { id:dateId(), title: value };
    setItem([...item, newItem]);
    localStorage.setItem("items", JSON.stringify([...item, newItem]));
    setValue("");
  };
  const handelDelete = (task) => {
    const del = item.filter((obj) => {
      return task.id !== obj.id;
    });
    setItem(del);
    localStorage.setItem("items", JSON.stringify(del));
  };
  const handelEdit = (ele) => {
    let couranteVal = item.find((item) => {
      return item.id === ele.id;
    });
    setValue(couranteVal.title);
    handelDelete(ele);
    focusInput.current.focus()
  };
  return (
    <AppContemner>
      <h1>ToDO List </h1>
      <InputBox>
        <Input
        ref={focusInput}
          type="text"
          placeholder="write the task"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <StyledButton onClick={handelAdd}>
          Add
        </StyledButton>
      </InputBox>
      <Ul>
        {item?.map((item) => {
          return (
            <ListItem key={item.id} >
              <span>{item.title}♪</span>
              <div>
                <StyledButton
                  onClick={() => handelDelete(item)}
                >
                  Delete
                </StyledButton>
                <StyledButton
                  onClick={() => handelEdit(item)}
                >
                  Edit
                </StyledButton>
              </div>
            </ListItem>
          );
        })}
      </Ul>
    </AppContemner>
  );
}

export default App;
