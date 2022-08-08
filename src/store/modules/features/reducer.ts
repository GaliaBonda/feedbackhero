import IFeature from "../../../common/interfaces/IFeature";

const initialState: IFeature[] = [
    {
        id: 0,
        icon: './assets/file-type-pdf2.svg',
        title: 'Export results',
        description: 'With the one click, you can download all your survey results in PDF format',
    },
    {
        id: 1,
        icon: './assets/share.svg',
        title: 'Easy share',
        description: 'Insert the survey directly on your website or send the link to your friends',
    },
    {
        id: 2,
        icon: './assets/loyalty.svg',
        title: 'Audience loyalty',
        description: 'Receive instant messages in the messenger when you mention your brand online or new reviews',
    },
    {
        id: 3,
        icon: './assets/survey.svg',
        title: 'Survey and questionnaire',
        description: 'To collect responses from colleagues, clients or potential audience in just a couple of clicks',
    },
    {
        id: 4,
        icon: './assets/qr-code.svg',
        title: 'QR code generator',
        description: 'Find out what your customers want and understand what you are doing right or wrong',
    },
    {
        id: 5,
        icon: './assets/analytics.svg',
        title: 'Analyze surveys with built-in analytics',
        description: 'Monitor visitor feedback with easy-to-use dashboards and reports',
    }
];

export default function reducer(state = initialState, action: {type: string, payload?: any}) {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
