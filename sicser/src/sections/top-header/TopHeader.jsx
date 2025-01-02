import axios from 'axios'
import './TopHeader.scss'
import React from 'react'
import { useState, useEffect } from 'react'

export default function TopHeader() {
	const [data, setData] = useState([])
	const [error, setError] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					'https://localhost:7263/api/Contacts/1'
				)
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
