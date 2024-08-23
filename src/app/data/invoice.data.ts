import { Invoice } from "../models/invoice";

export const invoiceData : any = {
    id: 1,
    name: 'Venta de celulares', 
    client : {
        name: 'Sebastian',
        lastName: 'Vera',
        address: {
            country: 'Paraguay',
            city: 'Asuncion',
            street: 'Avda. Espana',
            number: 123,
        },
    },
    company : {
        name : 'Google',
        fiscalNumber: 12345,
    },
    items: [
        {
            id : 1,
            product: 'Pixel watch',
            price: 350,
            quantity: 1,
            
        },
        {
            id : 2,
            product: 'Pixel 4',
            price: 500,
            quantity: 2,
        },

        {
            id : 3,
            product: 'Google Pixel 5',
            price: 700,
            quantity: 4,
        },
    ],

}
