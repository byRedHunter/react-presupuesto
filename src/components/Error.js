import React from 'react'

export const Error = ({ mensaje = 'Hubo un error' }) => {
	return <p className='alert alert-danger'>{mensaje}</p>
}
