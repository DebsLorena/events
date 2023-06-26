
const INITIAL_STATE = {
    usuarioEmail: '',
    usuarioLogado: 0
}

interface Action {
    type: string;
    usuarioEmail: string;
}


export function usuarioReducer(state = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case 'LOG_IN':
            return { ...state, usuarioLogado: 1, usuarioEmail: action.usuarioEmail }
        case 'LOG_OUT':
            return { ...state, usuarioLogado: 0, usuarioEmail: '' }
        default: return state
    }
}