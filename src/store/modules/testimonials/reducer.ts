import ITestimonial from "../../../common/interfaces/ITestimonial";

const initialState: ITestimonial[] = [
    {
        client: {
            name: 'Alberto Coltraliano',
            position: 'CEO',
            company: 'Hilton Corporation Ltd',
            photo: './assets/client-photo.jpg',
        },
        comment: 'Some text with rewiev from client Some text with rewiev from client. Some text with rewiev from client Some text with rewiev from client . Some text with rewiev from client Some text with rewiev from client'
    },

];

export default function reducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
