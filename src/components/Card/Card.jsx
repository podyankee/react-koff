/* eslint-disable max-len */
import { useParams } from 'react-router-dom';
import { Container } from '../../views/Container/Container';
import s from './Card.module.sass';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/product/product.slice';
import { Slider } from '../Slider/Slider';

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
				<h2 className={s.title}>Кресло с подлокотниками</h2>
				<Slider data={data} />
				<div className={s.info}>
					<p className={s.price}>{'5000'.toLocaleString()}&nbsp; &#x20bd;</p>
					<p className={s.article}>арт. 879879879876</p>
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
						<button className={s.btn}>В корзину</button>
						<button className={s.like}>
							<svg
								width='16'
								height='16'
								viewBox='0 0 16 16'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z'
									fill='white'
									stroke='#1C1C1C'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</Container>
		</section>
	);
};
