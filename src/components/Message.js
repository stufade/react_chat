/**
 * Компонент сообщения
 *
 * @param {object} props
 * @param {string} props.text Текст сообщения
 */

function Message({text}) {
    return (
        <div className="message">
            {text}
        </div>
    );
}

export default Message;