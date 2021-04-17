import React, {useContext} from 'react'
import { UserContext } from '../../contexts/userContext'

function Donate() {
    const [ state, dispatch ] = useContext(UserContext);
    return (
        <div>
            This is the DONATE Page
        </div>
    )
}

export default Donate
