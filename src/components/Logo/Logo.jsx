import { Link } from 'react-router-dom';
import s from './Logo.module.sass';

export const Logo = () => (
	<Link className={s.link} to='/'>
		<img className={s.img} src='/img/logo.svg' alt='Логотип мебельного маркета Koff' />
	</Link>
);
