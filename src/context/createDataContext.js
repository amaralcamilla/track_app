import React, {useReducer} from "react";

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)

        const boundActions = {};
        // loop over all of the actions (is an object) that were passed in
        // to iterate over all those key:value pairs
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch);
            // "Look up each of these different action functions that are being passed in and call each one with our dispatch"
        }

        return (
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        );
    };
    return {Context, Provider};
}