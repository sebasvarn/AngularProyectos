import { toArray } from "rxjs";
import { CartItem } from "../models/cartItem";
import { addItem, removeItem, totalItems } from "./items.action";
import { createReducer, on } from "@ngrx/store";

export interface State {
    items : CartItem[],
    total : number
}

export const initialState: State = {
    items: JSON.parse(sessionStorage.getItem('cart') || '[]'),
    total : 0
}

export const ItemReducer = createReducer(
    initialState,
    on(addItem ,(state, {product}) => {
        const hasItem = state.items.find(item => {
            return item.product.id === product.id
        });
        if(hasItem){
            hasItem.quantity++;
        }
        else{
            state.items = [... state.items, { product:{ ...product} , quantity: 1 }];
        }
        state.total = state.total + product.price
        sessionStorage.setItem('cart', JSON.stringify(state.items));
        return state
    }),
    on(totalItems , state => {
        return{
            items : state.items,
            total : state.items.reduce((total, item) => total + item.product.price *item.quantity,0)
        }
    }),

    on(removeItem ,(state, {item}) => {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            state.items = state.items.filter(item => item.product.id !== item.product.id);
        }
        state.total = state.total - item.product.price
        sessionStorage.setItem('cart', JSON.stringify(state.items));
        return state
    })
)