import { useEffect, useState } from "react";

function getStorageValue(key: string, defaultValue: string) {
    const saved = localStorage.getItem(key);
    const initial = saved && JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(() => getStorageValue(key, defaultValue));

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}