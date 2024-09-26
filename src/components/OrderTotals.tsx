import { Dispatch, useCallback, useMemo } from "react"
import { OrderItem } from "../types/types"
import { formatPrice } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps = {
    order: OrderItem[]
    tip: number
    dispatch: Dispatch<OrderActions>
}

export const OrderTotals = ({order, tip, dispatch}: OrderTotalProps) => {

    const subtotal = useMemo(() => order.reduce((total, current) => total + (current.quantity * current.price), 0),
    [order])
  
    const tipAmount = useMemo(() => subtotal * tip ,[tip,order])

    const totalAmount = useCallback(() => subtotal + tipAmount ,[tip, order])
//se puede usar useCallback, funciona similar a useMemo, es la misma sintaxis pero la diferencia es que al instanciar sería como una funcion ej: tipAmount() en vez de tipAmount como con useMemo
  return (
    <>
     <div className=" space-y-3">
        <h2 className=" font-black text-2xl"> Totales y propinas</h2>
        <p> Subtotal a pagar:{' '}
            <span className=" font-bold">{formatPrice(subtotal)}</span>
        </p>
        <p> Propina:{' '}
            <span className=" font-bold">{formatPrice(tipAmount)}</span>
        </p>
        <p> Total a pagar:{' '}
            <span className=" font-bold">{formatPrice(totalAmount())}</span>
        </p>
     </div>
     <button
       className=" w-full bg-black text-white p-3 font-bold mt-10 disabled:opacity-10"
       disabled={totalAmount() === 0}
       onClick={() => dispatch({type:'place-order'})}
     >
        Guardar
     </button>
    </>
  )
}
