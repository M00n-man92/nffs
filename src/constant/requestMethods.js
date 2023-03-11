import axios from 'axios'
// urls imported from the .env file
const baseUrl = process.env.REACT_APP_API_URL
const otherUrl = process.env.REACT_APP_LOCAL_URL
// getting the elements form the localstorage
var saved = JSON.parse(localStorage.getItem("persist:arch"))

var token
if (saved) {
	var user = saved.user
	if (user) {
		var currentUser = JSON.parse(user).currentUser
		if(currentUser) token = currentUser.data.token
	}
}
export const publicRequest = axios.create({ baseURL: baseUrl })
export const userRequest=axios.create({baseURL:baseUrl,headers:{token:`Bearer ${token}` }})
