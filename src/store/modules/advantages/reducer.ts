import IAdvantage from "../../../common/interfaces/IAdvantage";

const initialState: IAdvantage[] = [
    {   id: 0,
        icon: './assets/sales-growth.svg',
        title: 'Sales growth',
        subtitle: 'Grades & stats',
        description: 'Control and prompt work with feedback will increase sales and LTV in any business',
    },
    {
        id: 1,
        icon: './assets/new-ideas.svg',
        title: 'New ideas',
        subtitle: 'Turn customer feedback into action',
        description: 'Gather new content ideas and get people to rate your content with blog surveys',
    },
    {
        id: 2,
        icon: './assets/surveys.svg',
        title: 'Make website surveys in minutes',
        subtitle: 'Fast and adaptive',
        description: 'Ask questions with unobtrusive website surveys that look good on all devices — web, mobile, tablet',
    },
];

export default function reducer(state = initialState, action: {type: string, payload?: any}) {
    switch (action.type) {
        default: {
            return [...state];
        }
    }
}
