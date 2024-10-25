
import React from 'react'
import ComponentD from './ComponentD'
import ComponentE from './ComponentE'

function ComponentC() {
    return (
        <div>
            <h2>ComponentC</h2>
            <div style={{ display: 'flex', gap: '2rem' }}>

                <ComponentD />
                <ComponentE>
                    <h3>Hola k asé</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam vitae quia a architecto, quasi, sed minus rerum ut inventore sunt perspiciatis molestias quaerat culpa provident beatae exercitationem quas harum voluptates.</p>
                </ComponentE>
            </div>
        </div>
    )
}

export default ComponentC