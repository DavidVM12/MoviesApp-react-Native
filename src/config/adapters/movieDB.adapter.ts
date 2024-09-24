import { AxiosAdapter } from "./http/axios.adapter";



export const movieDBFetcher = new AxiosAdapter({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '16fe65bea731ef1fae00ca665fa89c93',
        language: 'es'
    }
})