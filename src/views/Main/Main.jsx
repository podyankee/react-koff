import s from './Main.module.sass';
import { useDispatch, useSelector } from 'react-redux';
import { Catalog } from '../../components/Catalog/Catalog';
import { Goods } from '../../components/Goods/Goods';
import { useEffect } from 'react';
import { fetchCategories } from '../../store/categories/categories.slice';
import { fetchProducts } from '../../store/products/products.slice';

export const Main = () => {
	const dispatch = useDispatch();

	const {
		data: dataProducts,
		loading: loadingProducts,
		error: errorProducts,
	} = useSelector(state => state.products);

	useEffect(() => {
		dispatch(fetchCategories());
		dispatch(fetchProducts());
	}, [dispatch]);

	if (loadingProducts) return <div>Загрузка...</div>;
	if (errorProducts) return <div>Ошибка: {errorProducts}</div>;

	return (
		<main className={s.main}>
			<Catalog data={dataCategories} />
			<Goods data={dataProducts} />
		</main>
	);
};
