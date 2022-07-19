import s from "./ProfileInfo.module.css"
import Preloader from '../../common/preloader/Preloader'

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
    return (
        <div className={s.ProfileInfo}>
            <img className={s.Profile__img}
                 src="https://images.unsplash.com/photo-1653641563301-bbb49a19d18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
				alt="#"/>
			<img src={props.profile.photos.small} alt=""/>
            <div className={s.User}>
                <img className={s.User__avatar}
                     src="https://images.unsplash.com/photo-1653718308697-90caaf8b6b8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                     alt="#"/>
                <div className={s.User__data}>
                    <ul className={s.User__dataList}>
                        <li className={s.User__dataItem}><span>Date of birth: </span>14 September</li>
                        <li className={s.User__dataItem}><span>City: </span> Kazan</li>
                        <li className={s.User__dataItem}><span>Education: </span>Harvard University</li>
                        <li className={s.User__dataItem}><span>Web Site: </span> You're already here;)</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo
