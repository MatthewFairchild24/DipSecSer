import styles from '../serviceDetail/ServiceDetail.module.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useApiUrl from '../../hooks/useApiUrl'

export default function ServiceDetail() {
	const { id } = useParams()
	const [serviceDetailed, setServiceDetailed] = useState(null)
	const [images, setImages] = useState([])
	const { getApiUrl } = useApiUrl()

	useEffect(() => {
		fetch(getApiUrl(`ServiceDetailedes/${id}`))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connection failed!')
				}
				return response.json()
			})
			.then((data) => {
				setServiceDetailed(data)
			})
			.catch((error) => {
				console.error('Error fetchiong service detailed', error)
			})

		fetch(getApiUrl('Galleries'))
			.then((response) => {
				if (!response.ok) {
					throw new Error('Connection failed!')
				}
				return response.json()
			})
			.then((data) => {
				setImages(data)
			})
			.catch((error) => {
				console.error('Error on database connection ', error)
			})
	}, [id, getApiUrl])

	if (!serviceDetailed) {
		return <div>Loading...</div>
	}

	const getImagePathById = (id, images) => {
		const image = images.find((img) => img.id === id)

		return image ? image.imagePath : ''
	}
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
							<img
								src={getImagePathById(serviceDetailed.galleryId1, images)}
								alt=''
							/>
							<div className={styles.backFigure}></div>
						</div>
					</div>
					<div className={styles.scdContainer}>
						<div className={styles.scdImageContainer}>
							<img
								src={getImagePathById(serviceDetailed.galleryId2, images)}
								alt=''
							/>
						</div>
						<div className={styles.scdTextContainer}>
							<p>{serviceDetailed.descriptionDetailed}</p>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
