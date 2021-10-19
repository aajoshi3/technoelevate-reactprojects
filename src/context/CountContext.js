import React from 'core-js/library/fn/reflect/es7/metadata'
const CountContext=React.createContext()
const CountProvider=CountContext.Provider;
const CountConsumer=CountContext.CountConsumer
export default CountContext
export {CountConsumer,CountProvider}