import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.Post__item}>{props.message}</div>
    )
}

export default Post