import axios from 'axios'
import store from '@/store/index.js'
// import {Toast} from 'vant';
import {TIME_OUT_MAX, local, host} from '@/config/config'
import qs from 'qs'

// let loadingInstance = null

const debug = process.env.NODE_ENV !== 'production'

const Service = axios.create({
	timeout: TIME_OUT_MAX, // 请求超时时间
	baseURL: debug ? local : host,
	headers: {
		'Content-Type': 'application/x-www-form-urlencoded'
	}
})

Service.interceptors.request.use(
	config => {
		// loadingInstance = Toast.loading({
		// 	message: '加载中...',
		// 	forbidClick: true
		// });
        // 请求头添加token
        if (store.state.userToken) {
            config.headers.Authorization = store.state.userToken
        }
		if (config.method == 'post') {
			config.data = qs.stringify(config.data)
		}
		return config
	},
	error => {
		return Promise.reject(error)
	}
)
// 添加响应拦截器
Service.interceptors.response.use(
	res => {
		// loadingInstance.close()
		if (res.data.status == 200) {
			return res.data.data
		} else {
			vant.Toast(res.data.error)
		}
	},
	error => {
		// loadingInstance.close()
		if (error && error.response) {
			switch (error.response.status) {
				case 400:
					error.message = '请求出错'
					break
				case 401:
					error.message = '授权失败，请重新登录'
					vant.Toast.fail(error.message)
					store.commit('LOGIN_OUT')
					setTimeout(() => {
						window.location.reload()
					}, 1000)

					return
				case 403:
					error.message = '拒绝访问'
					break
				case 404:
					error.message = '请求错误,未找到该资源'
					break
				case 500:
					error.message = '服务器端出错'
					break
			}
		} else {
			error.message = '连接服务器失败'
		}
		vant.Toast.fail(error.message);
		return Promise.reject(error)
	})

export default Service
