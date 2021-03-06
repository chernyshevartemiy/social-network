import * as axios from "axios";

const instance = axios.create({
	withCredentials: true,
	headers: { "API-KEY": "e39f05dc-90c5-4281-8f15-354bc4f9a221" },
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

const userAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then((response) => {
				return response.data;
			});
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {});
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`);
	},
	getProfile(userId) {
		return instance.get(`profile/${userId}`);
	},
};

export const profileAPI = {
	getProfile (userId) {
		return instance.get(`profile/${userId}`)
	},
	getStatus (userId) {
		return instance.get(`profile/status/${userId}`)
	},
	updateStatus(status) {
		return instance.put(`profile/status`, {status: status})
	}
}

const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
};

export { authAPI };
export default userAPI;
