
  
import { createStore, applyMiddleware, compose } from "redux";
const initialState = {
    user: false

}

function appReducer( prevState = initialState, action){
    switch (action.type) {
        case 'action':
            
            break;
    
        default:
            return prevState
          
    }
}

export const store = createStore(appReducer);
