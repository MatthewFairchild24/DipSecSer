import { useState, useEffect } from 'react'

import styles from './ImageSlider.module.scss'

export default function ImageSlider({ slides }) {
	const [currentIndex, setCurrentIndex] = useState(0)

	const goToPrevios = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}

	const goToNext = () => {
		const isLastSlide = currentIndex === slides.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}

	useEffect(() => {
		const interval = setInterval(() => {
			goToNext()
		}, 8000)

		return () => clearInterval(interval)
	}, [currentIndex])

	const goToSlide = (slideIndex) => {
		setCurrentIndex(slideIndex)
	}

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
				<div className={styles.rightArrow} onClick={goToPrevios}>
					&#11208;
				</div>
				<div className={styles.leftArrow} onClick={goToNext}>
					&#11207;
				</div>

				{slides.map((slide, index) => (
					<div
						key={index}
						className={`${styles.slide} ${
							index === currentIndex ? styles.active : ''
						}`}
						style={{ backgroundImage: `url(${slide.url})` }}
					></div>
				))}

				<div className={styles.containerDots}>
					{slides.map((slide, slideIndex) => (
						<div
							className={`${styles.dot} ${
								slideIndex === currentIndex ? styles.active : ''
							}`}
							key={slideIndex}
							onClick={() => goToSlide(slideIndex)}
						>
							&#x2022;
						</div>
					))}
				</div>
			</div>
		</>
	)
}
