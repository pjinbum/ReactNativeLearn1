//리듀서에서 재사용 할수 있도록 ADD_Book 상수를 만들어 export한다

export const ADD_Book = 'ADD_Book'
export const REMOVE_BOOK = 'REMOVE_BOOK'
import 'react-native-get-random-values'
import uuid from 'react-native-uuid'

//addbook 이라는 함수는 type 정보와 하나의 인수로 도서캑체를 반환하는 함수

export function addBook(book){
    return {
        type : ADD_Book,
        book : {...book , id:uuid.v4()}
    }
}

export function removeBOOK(book){
    return {
        type : REMOVE_BOOK ,
        book
    }
}