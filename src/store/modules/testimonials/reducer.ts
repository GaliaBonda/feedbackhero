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
    {
        client: {
            name: 'Some Guy',
            position: 'Some pro',
            company: 'SomeCompany',
            photo: './assets/client-photo.jpg',
        },
        comment: 'Another text'
    }

];

export default function reducer(state = initialState, action: { type: string, payload?: any }) {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
