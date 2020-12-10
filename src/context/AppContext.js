import { useState, useContext, createContext, useCallback } from 'react';
import { initialCards, initialDecks, initialInventory } from '../mockdata/CardData';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const [applicationState, setApplicationState] = useState({
        decks: initialDecks,
        inventory: initialInventory,
    });

    return (
    <AppContext.Provider value={{
        ...applicationState,
        cards: initialCards,
        // buyCard: buyCardForPlayer,
    }}>
        {children}
    </AppContext.Provider>
    )
}; 

export default AppContextProvider;
