import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Container } from '../Container/Container';
import s from './Catalog.module.sass';
import { fetchCategories } from '../../store/categories/categories.slice';

export const Catalog = () => {
	const dispatch = useDispatch();

	const { data, loading, error } = useSelector(state => state.categories);

	useEffect(() => {
		dispatch(fetchCategories());
	}, [dispatch]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<nav className={s.catalog}>
			<Container className={s.container}>
				<ul className={s.list}>
					{data.map((item, i) => (
						<li key={i}>
							<a className={s.link} href={`/category?slug=${item}`}>
								{item}
							</a>
						</li>
					))}
				</ul>
			</Container>
		</nav>
	);
};
