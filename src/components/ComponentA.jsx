import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function ComponentA() {
    const { user } = useContext(UserContext)

    return (
        <div><h2>ComponentA</h2>
            <p>{user?.name}</p></div>
    )
}

export default ComponentA
