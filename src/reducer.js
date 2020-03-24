export const initialState = [
    { id: 1, title: "Купить хлеб и молоко", completed: true },
    { id: 2, title: "Оплатить коммуналку", completed: false },
    { id: 3, title: "Забрать долг у Васи", completed: false },
]

export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    completed: false
                }
            ]

        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.completed = !todo.completed
                }
                return todo
            })

        case 'remove':
            return state.filter(todo => todo.id !== action.payload)

        default:
            return state
    }
}