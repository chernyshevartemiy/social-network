import s from "./NewPost.module.css"

const NewPost = (props) => {
    return (
        <div className={s.NewPost}>
            {props.message}
        </div>
    )
}

export default NewPost