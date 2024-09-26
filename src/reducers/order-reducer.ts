import { MenuItems, OrderItem } from "../types/types";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItems } } |
    { type: 'delete-item', payload: { id: MenuItems['id'] } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState = {
    order: [],
    tip: 0
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {
    if (action.type === 'add-item') {
        const orderExist = state.order.find((element) => element.id === action.payload.item.id);
        let updatedOrder: OrderItem[] = []
        if (orderExist) {
          updatedOrder = state.order.map((ele) => ele.id === action.payload.item.id ?
            {
              ...ele,
              quantity: ele.quantity + 1
            } :
            ele
          )
        } else {
          const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
          updatedOrder = [...state.order, newItem];
        }
        return {
            ...state,
            order: updatedOrder
        }
    }

    if (action.type === 'delete-item') {
        const result = state.order.filter((element) => element.id !== action.payload.id)
        return {
            ...state,
            order: result
        }
    }

    if (action.type === 'place-order') {
        return {
            ...state,
            order: [],
            tip: 0
        }
    }

    if (action.type === 'add-tip') {
        const tipValue = action.payload.value
        return {
            ...state,
            tip: tipValue
        }
    }

    return state
}