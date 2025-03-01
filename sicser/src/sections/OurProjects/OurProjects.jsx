import styles from './OurProjects.module.scss'

import ImageSlider from '../../components/imageSlider/ImageSlider'

export default function OurProjects() {
	const slides = [
		{
			url: 'https://i.pinimg.com/originals/06/90/89/0690892378ea252c9c37173228cff8e4.jpg',
			title: 'river',
		},
		{ url: '../image/SliderProject/image-2.jpg', title: 'forest' },
		{ url: '../image/SliderProject/image-3.jpg', title: 'city' },
		{ url: '../image/SliderProject/image-4.jpg', title: 'city1' },
		{ url: '../image/SliderProject/image-5.jpg', title: 'build' },
	]

	const GetYearSince2004 = () => {
		const currentYear = new Date().getFullYear()
		const startYear = 1995
		return currentYear - startYear
	}

	return (
		<>
			<section className={styles.sliderOP}>
				<div className={styles.titleOP}>
					<h3 className={styles.titleText}>Наши проекты</h3>
					<p>Более {GetYearSince2004()} лет дарим людям радость</p>
				</div>
				<div className={styles.containerSlider}>
					<ImageSlider slides={slides} />
				</div>
			</section>
		</>
	)
}
