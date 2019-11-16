const ADD_WINDOW = 'ADD_WINDOW';
const CLEAR_WINDOW = 'CLEAR_WINDOW';


const initialState = {
    alerts: [
        {id: 1, title: 'Success', styles: {border: '2px solid green'}},
        {id: 2, title: 'Warning', styles: {border: '2px solid yellow'}},
        {id: 3, title: 'Error', styles: {border: '2px solid red'}}
    ],
    popUpAlerts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_WINDOW: {
            return {
                ...state,
                popUpAlerts: [
                    ...state.popUpAlerts,
                    action.object
                ]
            }
        }
        case CLEAR_WINDOW: {
            let newArray = state.popUpAlerts.filter(pop => pop.id !== action.id);
            return {
                ...state,
                popUpAlerts: newArray
            }
        }
        default:
            return state;
    }
};

export const showWindow = (styles, title) => (dispatch) => {
    const data = {
        id: new Date().valueOf(),
        styles,
        title
    };
    dispatch(addWindow(data));
    setTimeout(() => {
        dispatch(clearWindow(data.id))
    }, 3000)
};

export const addWindow = (object) => ({type: ADD_WINDOW, object});
export const clearWindow = (id) => ({type: CLEAR_WINDOW, id});

export default reducer;