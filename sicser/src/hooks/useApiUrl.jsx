import { useMemo } from 'react'

const BASE_URL = 'https://localhost:7263/api/'

export default function useApiUrl() {
	const getApiUrl = (path) => {
		return `${BASE_URL}${path}`
	}
	return { getApiUrl }
}
