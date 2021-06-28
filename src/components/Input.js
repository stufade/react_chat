import {useState} from "react";

/**
 * Компонент поля ввода
 * @param {object} props
 * @param {function} props.onEnterClick Обработчик нажатия на Enter
 */

function Input({ onEnterClick }) {
    const [textValue, setTextValue] = useState("");

    const onChangeHandler = (e) => {
        setTextValue(e.target.value);
    }

    const onSubmit = (e) => {
        if (e.key !== "Enter" || !textValue) return;

        onEnterClick(textValue);
        setTextValue("");
    }

    return (
        <input
            type="text"
            className="input"
            value={textValue}
            onChange={onChangeHandler}
            onKeyDown={onSubmit}
        />
    );
}

export default Input;