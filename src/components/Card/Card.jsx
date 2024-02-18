/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { Container } from '../../views/Container/Container';
import s from './Card.module.sass';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddCartButton } from '../AddCartButton/AddCartButton';

export const Card = () => {
	const { productId } = useParams();
	const dispatch = useDispatch();
	const { data, loading, error } = useSelector(state => state.product);

	useEffect(() => {
		dispatch(fetchProduct(productId));
	}, [dispatch, productId]);

	if (loading) return <div>Загрузка...</div>;
	if (error) return <div>Ошибка: {error}</div>;
	if (!data) {
		return (
			<Container>
				<div>Нет данных...</div>
			</Container>
		);
	}

	return (
		<section className={s.card}>
			<Container className={s.container}>
				<h2 className={s.title}>{data.name}</h2>
				<Slider data={data} />
				<div className={s.info}>
					<p className={s.price}>{data.price.toLocaleString()}&nbsp; &#x20bd;</p>
					<p className={s.article}>арт. {data.article}</p>
					<div>
						<h3 className={s.characteristicsTitle}>Общие характеристики</h3>
						<table className={s.table}>
							<tbody>
								{data?.characteristics.map((item, i) => (
									<tr key={i} className={s.tableRow}>
										<td className={s.field}>{item[0]}</td>
										<td className={s.value}>{item[1]}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className={s.btns}>
						<AddCartButton className={s.btn} id={data.id} />
						<FavoriteButton />
					</div>
				</div>
			</Container>
		</section>
	);
};
