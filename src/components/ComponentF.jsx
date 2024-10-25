
import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function ComponentF() {
    const { user } = useContext(UserContext)


    return (
        <div><h2>ComponentF</h2>
            <p>{user?.email}</p></div>
    )
}

export default ComponentF