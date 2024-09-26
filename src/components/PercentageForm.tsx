import { Dispatch} from "react"
import { OrderActions } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type PercentageFormProps ={
  dispatch: Dispatch<OrderActions>
  tip: number
}

export const PercentageForm = ({dispatch, tip}: PercentageFormProps) => {
  return (
    <div>
      <h3 className=" font-black text-2xl"> Propinas:</h3>
      <form>
        {tipOptions.map((option) => (
          <div key={option.id} className=" flex gap-2">
            <label htmlFor={option.id}> {option.label} </label>
            <input 
            id={option.id} 
            type="radio"
             name="tip" 
             value={option.value}
             //aca para corregir el tipado y volverlo un numero le coloco el + delante al valor obtenido, existe valueAsNumber pero no funciona en los radio
             onChange={e => dispatch({type:'add-tip', payload:{value: +e.target.value}})}
             checked={option.value === tip}
             ></input>
          </div>
        ))}
      </form>
    </div>
  )
}
