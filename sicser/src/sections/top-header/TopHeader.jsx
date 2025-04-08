import axios from 'axios'
import './TopHeader.scss'
import { useState, useEffect } from 'react'
import useApiUrl from '../../hooks/useApiUrl'

export default function TopHeader() {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchData = async () => {
			try {
				const url = getApiUrl('Contacts/1')
				const response = await axios.get(url)
				setData(response.data)
			} catch (error) {
				setError(error.message)
			}
		}
		fetchData()
	}, [])

	if (error) return <div>Error: {error}</div>

	return (
		<>
			<div className='top-header'>
				<span>{data.email}</span>
				<span>{data.phone}</span>
			</div>
		</>
	)
}
