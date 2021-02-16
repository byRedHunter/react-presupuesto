import { useState } from 'react'
import { ControlPresupuesto } from './components/ControlPresupuesto'
import { Formulario } from './components/Formulario'
import { Listado } from './components/Listado'
import { Pregunta } from './components/Pregunta'

function App() {
	const [presupuesto, setPresupuesto] = useState(0)
	const [restante, setRestante] = useState(0)
	const [mostrarPregunta, setMostrarPregunta] = useState(true)
	const [gastos, setGastos] = useState([])

	// cuando agreguemos un nuevo gasto
	const agregarGasto = (gasto) => {
		setGastos([...gastos, gasto])
	}

	return (
		<div className='container'>
			<header>
				<h1>Gasto Semanal</h1>

				<div className='contenido-principal contenido'>
					{mostrarPregunta ? (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							setMostrarPregunta={setMostrarPregunta}
						/>
					) : (
						<div className='row'>
							<div className='one-half column'>
								<Formulario
									agregarGasto={agregarGasto}
									setRestante={setRestante}
								/>
							</div>

							<div className='one-half column'>
								<Listado gastos={gastos} />

								<ControlPresupuesto
									presupuesto={presupuesto}
									restante={restante}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
