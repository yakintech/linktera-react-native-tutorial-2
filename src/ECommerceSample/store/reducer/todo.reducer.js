export const todosReducer = (state = [], action) => {


    if(action.type == "ADD_TODO"){
        return [...state, action.payload]
    }
    else if(action.type == "REMOVE_TODO"){
        let newTodos = state.filter(q => q.id != action.payload.id)
        return [...newTodos]
    }
    else if(action.type == "REMOVE_ALL"){
        return []
    }
    else{
        return state
    }


}


var actionSample = {
    type: "ADD_TODO",
    payload: {
        id:2,
        text: 'Fatura'
    }
}