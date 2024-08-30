import { useQuery } from "react-query";
import { fetchCoinDetails } from "../Services/fetchcoindetails.js";
import useCurrencyStore from '../Stores/Stores.js';

function useFetchCoin(coinId) {
    // Access currency from the store
    const { currency } = useCurrencyStore();

    // Use React Query to fetch coin details
    const { isError, isLoading, data: coin } = useQuery(
        ["coin", coinId], // Query key
        () => fetchCoinDetails(coinId), // Query function
        {
            cacheTime: 1000 * 60 * 2, // Cache time: 2 minutes
            staleTime: 1000 * 60 * 2, // Stale time: 2 minutes
            onError: (error) => {
                console.error("Error fetching coin details:", error);
            }
        }
    );

    return {
        currency,
        isError,
        isLoading,
        coin
    };
}

export default useFetchCoin;
