import { create } from 'zustand';

const useCurrencyStore = create((set) => ({
    currency: 'usd',
    setCurrency: (newCurrency) => set(() => ({
        currency: newCurrency
    }))
}));

export default useCurrencyStore;
