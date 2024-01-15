import s from './Logo.module.sass';

export const Logo = () => (
	<a className={s.link} href='/'>
		<img className={s.img} src='/img/logo.svg' alt='Логотип мебельного маркета Koff' />
	</a>
);
