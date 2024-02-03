import { Container } from '../Container/Container';
import { CardItem } from '../../components/CardItem/CardItem';
import s from './Goods.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../store/products/products.slice';
import { useSearchParams } from 'react-router-dom';

export const Goods = () => {
	const dispatch = useDispatch();
	const [searchParam] = useSearchParams();
	const category = searchParam.get('category');
	const q = searchParam.get('q');

	const { data, loading, error } = useSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchProducts({ category, q }));
	}, [dispatch, category, q]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;

	return (
		<section className={s.goods}>
			<Container>
				<h2 className={`${s.title} visually-hidden`}>Список товаров</h2>
				{data?.length ? (
					<ul className={s.list}>
						{data.map(item => (
							<li key={item.id}>
								<CardItem {...item} />
							</li>
						))}
					</ul>
				) : (
					<p>По вашему запросу ничего не найдено.</p>
				)}
			</Container>
		</section>
	);
};
