import { Container } from '../Container/Container';
import { CardItem } from '../../components/CardItem/CardItem';
import s from './Goods.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';

export const Goods = () => {
	const dispatch = useDispatch();

	const { data, loading, error } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<section className={s.goods}>
			<Container>
				{data?.length ? (
					<>
						<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
						<ul className={s.list}>
							{data.map(item => (
								<li key={item.id}>
									<CardItem {...item} />
								</li>
							))}
						</ul>
					</>
				) : (
					<p>Список пуст</p>
				)}
			</Container>
		</section>
	);
};
