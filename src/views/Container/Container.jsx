import s from './Container.module.sass';

export const Container = props =>
	props.className ? (
		<div className={`${s.container} ${props.className}`}>{props.children}</div>
	) : (
		<div className={s.container}>{props.children}</div>
	);
