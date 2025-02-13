import React, { useState, useEffect } from 'react'

export default function Test() {
	const [images, setImages] = useState([])
	const [filtImages, setFiltImages] = useState([])

	useEffect(() => {
		const fetchImages = async () => {
			try {
				const response = await fetch('https://localhost:7263/api/Galleries')
				const data = await response.json()
				setImages(data)
				console.log(data)
			} catch (error) {
				console.error('Error fetching images:', error)
			}
		}
		fetchImages()
	}, [])

	useEffect(() => {
		const foundImages = images.filter(
			(image) => image.name === 'AboutCompany' || image.name === 'AboutCompany1'
		)
		setFiltImages(foundImages)
	}, [images])

	return (
		<div>
			{filtImages ? (
				filtImages.map((image, index) => (
					<img key={index} src={image.imagePath} alt='image' />
				))
			) : (
				<p>Loading images...</p>
			)}
		</div>
	)
}
