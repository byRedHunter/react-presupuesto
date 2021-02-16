import React, { useState } from 'react'
import { Error } from './Error'
import PropTypes from 'prop-types'

export const Pregunta = ({
	setPresupuesto,
	setRestante,
	setMostrarPregunta,
}) => {
	const [cantidad, setCantidad] = useState('')
	const [error, setError] = useState(false)

	const handleInputChange = (e) => {
		setCantidad(parseInt(e.target.value))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true)
			return
		}

		setError(false)
		setPresupuesto(cantidad)
		setRestante(cantidad)
		setMostrarPregunta(false)
	}

	return (
		<>
			<h2>Tu presupuesto</h2>

			{error && <Error mensaje='El presupuesto es incorrecto' />}

			<form onSubmit={handleSubmit}>
				<input
					type='number'
					className='u-full-width'
					placeholder='Coloca tu presupuesto'
					onChange={handleInputChange}
					value={cantidad}
				/>

				<button type='submit' className='button-primary u-full-width'>
					Guardar
				</button>
			</form>
		</>
	)
}

Pregunta.propTypes = {
	setPresupuesto: PropTypes.func.isRequired,
	setRestante: PropTypes.func.isRequired,
	setMostrarPregunta: PropTypes.func.isRequired,
}
