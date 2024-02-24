/* eslint-disable quote-props */
import { createAsyncThunk, createSlice, isRejectedWithValue } from '@reduxjs/toolkit';
import { API_URL } from '../../const';

export const submitCartForm = createAsyncThunk(
	'formCart/submitCartForm',
	async (formData, { getState, rejectWithValue }) => {
		const state = getState();
		const token = state.auth.accessToken;

		try {
			const response = await fetch(`${API_URL}api/orders`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${token}`,
				},
				body: JSON.stringify(formData),
			});
			if (!response.ok) {
				throw new Error('Ошибка при отправке данных');
			}
			const responseData = await response.json();
			return responseData.orderId;
		} catch (error) {
			return isRejectedWithValue(error.message);
		}
	},
);

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
	extraReducers: builder => {
		builder
			.addCase(submitCartForm.pending, state => {
				state.loading = true;
				state.error = null;
				state.success = false;
			})
			.addCase(submitCartForm.fulfilled, (state, action) => {
				state.loading = false;
				state.error = null;
				state.success = true;
				state.orderId = action.payload;
			})
			.addCase(submitCartForm.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
				state.success = false;
			});
	},
});

export default formCartSlice.reducer;
