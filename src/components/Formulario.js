import React, { useState } from 'react'
import shortid from 'shortid'
import PropTypes from 'prop-types'

import { Error } from './Error'

export const Formulario = ({ agregarGasto, setRestante }) => {
	const [nombre, setNombre] = useState('')
	const [cantidad, setCantidad] = useState('')
	const [error, setError] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar
		if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === '') {
			setError(true)
			return
		}

		setError(false)

		// construir el gasto
		const gasto = {
			nombre,
			cantidad,
			id: shortid.generate(),
		}

		// pasar el gasto al componente principal
		agregarGasto(gasto)
		setRestante((actual) => actual - cantidad)

		// resetear el form
		setNombre('')
		setCantidad('')
		document.querySelector('#nombreGasto').select()
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2>Agrega tus gastos aqui</h2>

			{error && (
				<Error mensaje='Ambos campos son requeridos o presupuesto incorrecto' />
			)}

			<div className='campo'>
				<label htmlFor='nombreGasto'>Nombre Gasto</label>
				<input
					type='text'
					id='nombreGasto'
					className='u-full-width'
					placeholder='Ej. Transporte'
					value={nombre}
					onChange={(e) => setNombre(e.target.value)}
				/>
			</div>

			<div className='campo'>
				<label htmlFor='cantidad'>Cantidad</label>
				<input
					id='cantidad'
					type='text'
					className='u-full-width'
					placeholder='Monto'
					value={cantidad}
					onChange={(e) => setCantidad(parseInt(e.target.value), 10)}
				/>
			</div>

			<button type='submit' className='button-primary u-full-width'>
				Agregar Gasto
			</button>
		</form>
	)
}

Formulario.propTypes = {
	agregarGasto: PropTypes.func.isRequired,
}
