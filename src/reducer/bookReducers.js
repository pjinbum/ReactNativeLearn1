import { ADD_Book , REMOVE_BOOK } from "../actions";
import 'react-native-get-random-values'
// import  uuidv4 from 'uuid/dist/v4'
// import {v4 as uuidv4} from 'uuid/dist/v4'
import uuid from 'react-native-uuid'






//초기상태
const initialState = {
    books : [ {name : '스즈메의 문단속' , author : '신카이 마코토' , id:uuid.v4() }]
}

const bookReducer = ( state = initialState , action ) => {
    switch (action.type){
        case ADD_Book: // 두번째 인수값의 type이 ADD_BOOK이면 새 books 배열을 반환
        return {
            books : [...state.books , action.book]
        } 
        case REMOVE_BOOK :
            const index = state.books.findIndex( books => books.id === action.book.id)
            return {
                books : [
                    ...state.books.slice(0,index) , ...state.books.slice(index+1)
                ]
            }


        default :  // action의 type이 일치하는 case가 없다면 기존의 state 반환
        return state;
    
    }
    
}

export default bookReducer;




// import { ADD_Book } from "../actions";
// import { v4 as uuidv4 } from 'uuid'; // 경로 수정
// import 'react-native-get-random-values';

// //초기상태
// const initialState = {
//     books : [ {name : '스즈메의 문단속' , author : '신카이 마코토' , id:uuidv4() }]
// }

// const bookReducer = ( state = initialState , action ) => {
//     switch (action.type){
//         case ADD_Book: // 두번째 인수값의 type이 ADD_BOOK이면 새 books 배열을 반환
//         return {
//             books : [...state.books , action.book]
//         }

//         default :  // action의 type이 일치하는 case가 없다면 기존의 state 반환
//         return state;
    
//     }
    
// }

// export default bookReducer;