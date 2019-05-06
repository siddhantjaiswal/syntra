import api from './api'
import { baseURL } from './api'

export function getHomeData(data) {
	const url = `https://jsonplaceholder.typicode.com/users/${data}`
	return {
		type: 'GET_HOME',
		payload: api.get(url)
	}
}

export function loading_true() {
	return {
		type: 'LOADING_TRUE'
	}
}

export function loading_false() {
	return {
		type: 'LOADING_FALSE'
	}
}

export function emptyUploadZipData() {
	return {
		type: 'EMPTY_UPLOAD_DATA'
	}
}


