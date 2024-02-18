import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	orderId: null,
};

const formCartSlice = createSlice({
	name: 'formCArt',
	initialState,
	reducers: {},
});
