import React from 'react'

const ComponentE = () => {
    const context = useContext(CountContext)
    console.log('context',context);
    return (
        <div>
            Component E -{context.state}
            <button onClick={()=>{context.dispatch('decrement')}}>Decrement</button>
        </div>
    )
}

export default ComponentE
