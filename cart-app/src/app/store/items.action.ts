import { createAction, props } from "@ngrx/store";
import { Product } from "../models/product";
import { CartItem } from "../models/cartItem";

export const addItem = createAction('add', props<{product: Product}>());
export const removeItem = createAction('remove', props<{item: CartItem}>())

export const totalItems = createAction('total', props<{total: number}>())

