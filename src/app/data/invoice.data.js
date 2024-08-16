import { last } from "rxjs";

export const invoiceData = [
    {
        id: 1,
        name: 'Sebastian Vera',
        client : {
            name: 'ilson',
            lastName: 'Vera',
            address: {
                country: 'Paraguay',
                city: 'Asuncion',
                street: 'Avda. Espana',
                number: '123',
            },
        },
        company : {
            name : 'Google',
            fiscalNumber: '123456789',
        },
        items: [
            {
                id : 1,
                product: 'Pixel watch',
                price: 350,
                quantity: 1,
            },
            {
                id : 3,
                product: 'Google Pixel 5',
                price: 700,
                quantity: 4,
            },


        ]
    }
]