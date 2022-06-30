import Botao from './botao'
let Formulario = () => {
    return (
        <form>
            <div>
                <label htmlfor="tarefa">Labél</label>
                <input type="text"name="tarefa"/>
            </div>
            <Botao />
        </form>
    )
}

export default Formulario;