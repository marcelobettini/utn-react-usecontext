import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

function ComponentE({ children }) {
    const { user, setUser } = useContext(UserContext)
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>ComponentE</h2>
            {children}
            <hr />
            <br />
            <input type="text" placeholder='New Name...' onChange={(e) => setUser({ ...user, name: e.target.value })} />
        </div>
    )
}

export default ComponentE
