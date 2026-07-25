const {
    VITE_MODE: MODE,
    VITE_API_URL: API_URL,
    VITE_API_KEY: API_KEY
} = import.meta.env;

const config = {
    MODE,
    API: {
        url: API_URL,
        key: API_KEY
    }
};

export default config
