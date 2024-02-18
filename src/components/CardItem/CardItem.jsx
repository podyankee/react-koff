/* eslint-disable max-len */
import { Link } from 'react-router-dom';
import { API_URL } from '../../const.js';
import s from './CardItem.module.sass';
import { FavoriteButton } from '../FavoriteButton/FavoriteButton';
import { AddCartButton } from '../AddCartButton/AddCartButton';

export const CardItem = ({ name, images: [image], price, id }) => (
	<article className={s.card}>
		<Link className={s.link} to={`/product/${id}`}>
			<img className={s.img} src={`${API_URL}${image}`} alt={name} />
		</Link>
		<div className={s.info}>
			<h3 className={s.title}>
				<Link className={s.link} to={`/product/${id}`}>
					{name}
				</Link>
			</h3>
			<p className={s.price}>{price.toLocaleString()}&nbsp; &#x20bd;</p>
		</div>
		<AddCartButton className={s.btn} id={id} />
		<FavoriteButton className={s.favorite} id={id} />
	</article>
);
