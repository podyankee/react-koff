import s from './CartPlace.module.sass';

export const CartPlace = () => (
	<div className={s.place}>
		<h3 className={s.subtitle}>Оформление</h3>
		<div className={s.placeInfo}>
			<p>4 товара на сумму:</p>
			<p>20 000&#x20bd;</p>
		</div>
		<p className={s.placeDelivery}>Доставка 0 &#x20bd;</p>
		<button className={s.placeBtn}> Оформить заказ</button>
	</div>
);
