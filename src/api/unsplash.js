import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID K5yNUJXGkjIWwPtNpT3XaDMszUgWuOBL1l6z4Q87WqY'
    }
});