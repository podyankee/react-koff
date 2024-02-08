import s from './CartProducts.module.sass';

export const CartProducts = () => (
	<ul className={s.products}>
		<li className={s.product} key={1}>
			<img
				className={s.img}
				src='https://koff-api.vercel.app/img//1hb4405mef8h0jrm.jpg'
				alt='Прямой диван ракушка'
			/>
			<h3 className={s.titleProduct}>Прямой диван ракушка</h3>
			<p className={s.price}>{'48263'.toLocaleString()}&nbsp;&#x20bd;</p>
			<p className={s.article}>арт. 16955809458</p>

			<div className={s.productControl}>
				<button className={s.productBtn}>-</button>
				<p className={s.productCount}>3</p>
				<button className={s.productBtn}>+</button>
			</div>
		</li>
		<li className={s.product} key={2}>
			<img
				className={s.img}
				src='https://koff-api.vercel.app/img//1hb4405mef8h0jrm.jpg'
				alt='Прямой диван ракушка'
			/>
			<h3 className={s.titleProduct}>Прямой диван ракушка</h3>
			<p className={s.price}>{'48263'.toLocaleString()}&nbsp;&#x20bd;</p>
			<p className={s.article}>арт. 16955809458</p>

			<div className={s.productControl}>
				<button className={s.productBtn}>-</button>
				<p className={s.productCount}>3</p>
				<button className={s.productBtn}>+</button>
			</div>
		</li>
		<li className={s.product} key={3}>
			<img
				className={s.img}
				src='https://koff-api.vercel.app/img//1hb4405mef8h0jrm.jpg'
				alt='Прямой диван ракушка'
			/>
			<h3 className={s.titleProduct}>Прямой диван ракушка</h3>
			<p className={s.price}>{'48263'.toLocaleString()}&nbsp;&#x20bd;</p>
			<p className={s.article}>арт. 16955809458</p>

			<div className={s.productControl}>
				<button className={s.productBtn}>-</button>
				<p className={s.productCount}>3</p>
				<button className={s.productBtn}>+</button>
			</div>
		</li>
	</ul>
);
