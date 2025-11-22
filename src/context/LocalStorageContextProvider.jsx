import { LocalStorageContext } from './LocalStorageContext';

export const LocalStorageContextProvider = ({ children }) => {
    const getLocalStorageData = (key) => {
        const data = localStorage.getItem(key);

        if (!data) {
            return null;
        }

        return JSON.parse(data);
    };

    const setLocalStorageData = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    return (
        <LocalStorageContext.Provider value={{
            getLocalStorageData,
            setLocalStorageData
        }}>
            {children}
        </LocalStorageContext.Provider>
    );
};