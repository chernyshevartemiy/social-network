import s from "./Messages.module.css"

const Messages = (props) => {
    return (
        <div className={s.Messages}>{props.message}</div>
    )
}

export default Messages