import s from './Users.module.css'
import * as axios from 'axios'
import userImg from '../../img/profile.png'
import React from 'react'

class UserC extends React.Component {
	constructor(props) {
		super(props);
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
			this.props.setUsers(response.data.items)
			this.props.setTotalUsersCount(response.data.totalCount)
		});
	}
	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber);
			axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
				this.props.setUsers(response.data.items);
				})};

	render() {

		let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

		let pages = [];
		for (let i = 1; i<= pagesCount; i++) {
			pages.push(i);
		}
			return (
		<div>
			{this.props.users.map((e) => {
				return <div className = {s.User} key = {`${e.id}_${e.name}`}>
							<div className = {s.User__profile}>
								<img className = {s.User__img} src={e?.photos?.small || userImg} alt="#"/>
								{e.followed ? <button className = {s.User__button} onClick = {() => { this.props.unfollow(e.id) }}>Unfollow</button> : <button className = {s.User__button} onClick = {() => { this.props.follow(e.id) }}>Follow</button>}
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

						   return <span className = {this.props.currentPage === p && s.selectedPage} onClick = {() => {this.onPageChanged(p)}}>{p}</span>
					   })}	   
		</div>
	)

	}
}

export default UserC
