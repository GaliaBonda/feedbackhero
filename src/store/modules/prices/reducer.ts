import IPrice from "../../../common/interfaces/IPrice";

const initialState: IPrice[] = [
    {
        id: 0,
        type: 'start',
        perMonth: '€49',
        perYear: '€588',
        description: '10% discount on early payment. The best soution for small business.',
        pros: ['1 Business location', '1 QR Code', 'Custom branding'],
    },
    {
        id: 1,
        type: 'Standart',
        perMonth: '€150',
        perYear: '€588',
        description: '10% discount on early payment. The best for medium business.',
        pros: ['3 Business locations', '18 QR Codes', 'Custom urls and branding', 'Unlimited questions'],
    },
    {
        id: 2,
        type: 'Premium',
        perMonth: '€250',
        perYear: '€588',
        description: '10% discount on early payment. All-in-one for interprises.',
        pros: ['Unlimited QR areas', 'Unlimited reviews', 'Unlimited questions', 'Custom urls and branding', 'Custom questionaries'],
    },
];

export default function reducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
