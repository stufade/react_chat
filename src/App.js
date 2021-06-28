import {useState, useEffect} from "react";
import Input from "./components/Input";
import Window from "./components/Window";
import io from "socket.io-client";
import "./styles/style.css";

const socket = io();

function App() {
  const [messageTexts, setMessageTexts] = useState([]);

  useEffect(() => {
    socket.on("new message", text => {
      setMessageTexts((oldTexts) => [...oldTexts, text]);
    });

    return () => {socket.disconnect()};
  }, []);

  /**
   * Обработчик отправки сообщения
   *
   * @param text Текст сообщения
   */
  const onSubmitHandler = (text) => {
    socket.emit("message", text);
  }

  return (
    <div className="main">
      <Window messageTexts={messageTexts} />
      <Input onEnterClick={onSubmitHandler} />
    </div>
  );
}

export default App;