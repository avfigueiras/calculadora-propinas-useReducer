import { Dispatch } from "react"
import { formatPrice } from "../helpers"
import { OrderActions } from "../reducers/order-reducer"
import { OrderItem } from "../types/types"

type OrderContentsProps = {
    order: OrderItem[]
    dispatch: Dispatch<OrderActions>
}
export const OrderContents = ({ order, dispatch }: OrderContentsProps) => {
    return (
        <div>
            <h2 className=' font-black text-4xl'>Consumo</h2>
            <div className=" space-y-3 mt-10">
                {
                    order.map((item) => (
                        <div
                            key={item.id}
                            className=" flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>
                                <p className=" text-lg">
                                    {item.name} - {formatPrice(item.price)}
                                </p>
                                <p className=" font-black">
                                    Cantidad: {item.quantity} - {formatPrice(item.quantity * item.price)}
                                </p>
                            </div>
                            <button
                                className=" bg-red-500 h-8 w-8 rounded-full text-white font-black"
                                onClick={() => dispatch({ type: 'delete-item', payload: { id: item.id } })}
                            > x </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
