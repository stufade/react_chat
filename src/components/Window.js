import Message from "./Message";

/**
 * Компонент окна сообщений
 *
 * @param {object} props
 * @param {string[]} props.messageTexts Массив текстов сообщений
 */

function Window({messageTexts}) {
    return (
        <div className="wrapper">
            <div className="window">
                {messageTexts.map((text, index) => <Message text={text} key={index} /> )}
            </div>
        </div>
    );
}

export default Window;