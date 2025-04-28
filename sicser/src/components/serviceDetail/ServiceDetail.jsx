import styles from '../serviceDetail/ServiceDetail.module.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApiUrl from '../../hooks/useApiUrl'

export default function ServiceDetail() {
	const { id } = useParams()
	const [serviceDetailed, setServiceDetailed] = useState(null)
	const [images, setImages] = useState([])
	// const [image1, setImage1] = useState('')
	// const [image2, setImage2] = useState('')
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		const fetchServiceDetails = async () => {
			try {
				const response = await fetch(getApiUrl(`ServiceDetailedes/${id}`))
				if (!response.ok) {
					throw new Error('Connection failed! ', response.statusText)
				}
				const data = await response.json()

				if (JSON.stringify(data) !== JSON.stringify(serviceDetailed)) {
					setServiceDetailed(data)
				}
			} catch (error) {
				console.error('Error fetching service details', error)
			}
		}
		const fetchGallery = async () => {
			try {
				const response = await fetch(getApiUrl(`Galleries`))
				if (!response.ok) {
					throw new Error(`Connection failed! ${response.statusText}`)
				}
				const data = await response.json()
				setImages(data)
			} catch (error) {
				console.error('Error fetching service details', error)
			}
		}
		// setServiceDetailed(null)
		// setImage1('')
		// setImage2('')

		fetchServiceDetails()
		fetchGallery()
	}, [id])

	const findImage = (images, galleryId) => {
		return images.find((image) => image.id === galleryId || null)
	}

	if (!serviceDetailed) {
		return <div>Loading...</div>
	}

	const image1 = findImage(images, serviceDetailed.galleryId1)
	const image2 = findImage(images, serviceDetailed.galleryId2)
	return (
		<>
			<section className={styles.ServiceDetailed}>
				<div className={styles.mainContainer}>
					<div className={styles.fstContainer}>
						<div className={styles.fstTextContainer}>
							<h1>{serviceDetailed.name}</h1>
							<p>{serviceDetailed.description}</p>
						</div>
						<div className={styles.fstImageContainer}>
							<img src={image1.imagePath} alt='' />
							<div className={styles.backFigure}></div>
						</div>
					</div>
					<div className={styles.scdContainer}>
						<div className={styles.scdImageContainer}>
							<img src={image2.imagePath} alt='' />
						</div>
						<div className={styles.scdTextContainer}>
							<h1>Что мы можем предложить</h1>
							<p>{serviceDetailed.descriptionDetailed}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
