import s from './Developers.module.sass';

export const Developers = () => (
	<ul className={s.developers}>
		<li className={s.item}>
			Designer:&nbsp;
			<a className={s.link} href='https://t.me/Mrshmallowww' target='_blank' rel='noreferrer'>
				Anastasia Ilina
			</a>
		</li>
		<li className={s.item}>
			Developer:&nbsp;
			<a className={s.link} href='https://t.me/Kostyantin' target='_blank' rel='noreferrer'>
				Kostyantin
			</a>
		</li>
	</ul>
);
