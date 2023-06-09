import s from './Header.module.scss'
import { useEffect, useState } from 'react'
import Nav from '../Nav/Nav'


const Header = () => {
	const [isOnTop, setIsOnTop] = useState(true)

	useEffect(() => {
		const topScrollHandler = () => {
			if (window.pageYOffset === 0) {
				setIsOnTop(true)
			}
			if (window.pageYOffset > 1) {
				setIsOnTop(false)
			}
		}

		window.addEventListener('scroll', topScrollHandler)
		return () => removeEventListener('scroll', topScrollHandler)
	}, [window.pageYOffset])

	return (
		<header className={`${s.header} ${isOnTop ? '' : s.active}`}>
			<div className={s.headerWrapper}>
				<div className={s.headerWrapperLeft}>
					<a className={s.logo} href='#firstsection'>
						<img src='logo2.png' alt='logo' />
					</a>
				</div>
				<Nav />
				<div className={s.headerWrapperRight}>
					<a className={s.number} href='#'>
                        <h3>+7 (999) 999-99-99</h3>
                    </a>
				</div>
			</div>
		</header>
	)
}

export default Header