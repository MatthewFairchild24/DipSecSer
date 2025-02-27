import { useState } from 'react'

import styles from './ImageSlider.module.scss'

export default function ImageSlider({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const slideStyles = {
		width: '100%',
		height: '100%',
		borderRadius: '10px',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundImage: `url(${slides[currentIndex].url})`,
	}

	return (
		<>
			<div className={styles.slider}>
				<div style={slideStyles}></div>
			</div>
		</>
	)
}
