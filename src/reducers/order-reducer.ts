import type { MenuItem, OrderItem } from "../types";

// Acciones o eventos que pueden ser despachados por la aplicación
export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { item: MenuItem } } |
    { type: 'place-order' } |
    { type: 'add-tip', payload: { value: number } }

// Definición del Type del estado
export type OrderState = {
    order: OrderItem[],
    tip: number
}

// Estado inicial
export const initialState = {
    order: [],
    tip: 0
}

// Definición del reducer ======= | 
export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if (action.type === 'add-item') {
        const itemExist = state.order.find((orderItem) => orderItem.id === action.payload.item.id);
        let order : OrderItem[] = [];

        if (itemExist) {
            order = state.order.map(orderItem =>
                orderItem.id === action.payload.item.id ?
                    { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
            );
        } else {
            const newItem = { ...action.payload.item, quantity: 1 };
            order = [...state.order, newItem];
        }

        return {
            ...state,
            order
        }
    }

    if (action.type === 'remove-item') {
        const order = state.order.filter(item => item.id !== action.payload.item.id)

        return {
            ...state,
            order
        }
    }

    if (action.type === 'place-order') {
        return {
            order: [],
            tip: 0
        }
    }

    if (action.type === 'add-tip') {
        const tip = action.payload.value;

        return {
            ...state,
            tip
        }
    }

    return state;
}