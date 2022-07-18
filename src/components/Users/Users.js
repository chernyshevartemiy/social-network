import React from "react";
import s from './Users.module.css';
import userImg from '../../img/profile.png';
import { NavLink } from "react-router-dom";

let Users = (props) => {
	let pagesCount = Math.ceil(
		props.totalUsersCount / props.pageSize
	);

	let pages = [];
	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i);
	}
	return (
		<div>
			{props.users.map((e) => {
				return <div className = {s.User} key = {`${e.id}_${e.name}`}>
					<div className = {s.User__profile}>
						<NavLink to="/Profile">
								<img className = {s.User__img} src={e?.photos?.small || userImg} alt="#"/>
						</NavLink>
								{e.followed ? <button className = {s.User__button} onClick = {() => { props.unfollow(e.id) }}>Unfollow</button> : <button className = {s.User__button} onClick = {() => { props.follow(e.id) }}>Follow</button>}
							</div>
							<div className = {s.User__info}>
								<div className = {s.User__initials}>
									<div className = {s.User__name}>Name: {e.name}</div>
									<div className = {s.User_description}>Status: {e.status}</div>
								</div>
								<div className = {s.User__area}>
									<div className = {s.User__country}>Country: {"e.location.country"}</div>
									<div className = {s.User__city}>City: {"e.location.city"}</div>
								</div>
							</div>
					   </div>
			})}
					   {pages.map(p => {
						   return <span className = {props.currentPage === p && s.selectedPage} onClick = {() => {props.onPageChanged(p)}}>{p}</span>
					   })}	   
		</div>
	)
};

export default Users
