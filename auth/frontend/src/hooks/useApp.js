import { useState, useEffect } from 'react';
import { defaultApp } from '../components/login.js';
import app from 'summa-core/app.js';

function useApp(name) {
    
    const [infoApp, setInfoApp] = useState(defaultApp);

    async function setAppInfo(name) {
        const data = await app.info(name)
        setInfoApp(data || defaultApp);
    }

    useEffect(() => {
        setAppInfo(name);
    }, [name]);

    return [infoApp]
}
export default useApp;