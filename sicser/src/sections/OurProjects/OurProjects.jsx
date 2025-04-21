import styles from './OurProjects.module.scss'

import ImageSlider from '../../components/imageSlider/ImageSlider'

export default function OurProjects() {
	const slides = [
		{ url: '../image/SliderProject/image-1.jpg', title: 'build' },
		{ url: '../image/SliderProject/image-2.jpg', title: 'build' },
		{ url: '../image/SliderProject/image-3.jpg', title: 'build' },
		{ url: '../image/SliderProject/image-4.jpg', title: 'build' },
		{ url: '../image/SliderProject/image-5.jpg', title: 'build' },
		{ url: '../image/SliderProject/image-6.jpg', title: 'build' },
	]

	const GetYearSince2004 = () => {
		const currentYear = new Date().getFullYear()
		const startYear = 1995
		return currentYear - startYear
	}

	return (
		<>
			<section id='OurProjects' className={styles.sliderOP}>
				<div className={styles.titleOP}>
					<h3 className={styles.titleText}>Фото наших работ</h3>
					<p>Более {GetYearSince2004()} лет дарим людям радость</p>
				</div>
				<div className={styles.containerSlider}>
					<ImageSlider slides={slides} />
				</div>
			</section>
		</>
	)
}
