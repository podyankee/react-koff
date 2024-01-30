import { Container } from '../Container/Container.jsx';
import { Logo } from '../../components/Logo/Logo.jsx';
import { Contacts } from '../../components/Contacts/Contacts.jsx';
import { Developers } from '../../components/Developers/Developers.jsx';
import s from './Footer.module.sass';

export const Footer = () => (
	<footer className={s.footer}>
		<Container className={s.container}>
			<div className={s.logo}>
				<Logo />
			</div>
			<div className={s.contacts}>
				<Contacts />
			</div>
			<div className={s.developers}>
				<Developers />
			</div>
			<p className={s.copyright}> &copy; Koff 2023 </p>
		</Container>
	</footer>
);
