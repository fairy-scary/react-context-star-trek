
export const AppContext = createContext('');

export const AppContextProvider = ({children}) => {
    return (
    <AppContext.Provider value={{
        cards: initialCards
    }}>
        {children}
    </AppContext.Provider>
    )
}; 

