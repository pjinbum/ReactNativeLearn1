import React from 'react'
import { Text , View , ScrollView , StyleSheet , TextInput , TouchableOpacity} from 'react-native'
import { connect } from 'react-redux'
import  { Component } from 'react';
import { addBook , removeBOOK } from './actions';




const initialState = {
  name :'',
  author :''
}







//key 와 value 두개의 인수를 사용하는 updateInput 메서드
// ...연산자를 이용해서 state를 업데이트
//... 연산자는 기존의 state 키 - 값 쌍들을 새 state에 저장한 후
//새로운 키 - 값 쌍을 새 state에 추가
class Book extends Component {
  state = initialState ;

   updateInput = ( key , value) => {
    this.setState({
      ...this.state ,
      [key] : value
    })
   }

   //dispatch 호출(connect함수의 props 로 참조)
   addBook = () => {
    this.props.dispatchAddBook(this.state)
    this.setState(initialState)
   }

   removeBOOK=(book) => {
    this.props.dispatchRemoveBook(book)
   }


  render(){
     const {books} = this.props;
    return(
        <View style={styles.container}>
            <Text style={styles.title}>도서</Text>
            <ScrollView
              keyboardShouldPersistTaps='always'
              style={styles.bookContainer}
            >
                {
                    books.map((book , index) => (
                        <View style={styles.book} key={index}>
                            <Text style={styles.name}>{book.name}</Text>
                            <Text style={styles.author}> {book.author}</Text>
                            <Text onPress={()=> this.removeBOOK(book)}> 삭제</Text>
                        </View>
                    ))
                }
            </ScrollView>

            <View style={styles.inputcontainer}>
              <View>
                <TextInput style={styles.textinput}
                placeholder='도서제목'
                value={this.state.name}
                onChangeText={value => this.updateInput('name' , value )}
               />
                <TextInput style={styles.textinput}
                 placeholder='도서저자'
                 value={this.state.author}
                 onChangeText={value => this.updateInput('author', value )}/>
               
              </View>
              <TouchableOpacity onPress={this.addBook}>
                  <View style={styles.textbutton}>
                      <Text>등록</Text>
                  </View>
              </TouchableOpacity>
            </View>
        </View>
    )
  }
  
}


const styles = StyleSheet.create({
  container :{
    flex:1
  },
  bookContainer:{
    borderTopWidth:1,
    borderTopColor:'#bbb',

  },
  title: {
    paddingTop: 30,
    paddingBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  book: {
    padding: 20
  },
  name: {
        fontSize: 18
      },
      author: {
        fontSize: 14,
        color: '#999'
      },

     inputcontainer : {
       flex:10,
       flexDirection:'row',    
       padding : 10,
       
       


      },
      textinput : {
        
        width : 200,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        margin:1,
       
        borderRadius : 10,
        marginLeft: 15,
  
        
       
      },
      textbutton : {
        marginBottom : 100 ,
        marginLeft : 30,
        alignItems : 'center',
        justifyContent : 'center',
        width : 100,
        height : 70,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderLeftWidth : 1,
        borderRightWidth : 1,
        borderColor : 'black',
        backgroundColor : 'gray',
        borderRadius : 20
        
        
      },


})



//리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환 
const mapStateProps = (state) => ({
    books : state.bookReducer.books
})

const mapDispatchToProps = {
  dispatchAddBook : (book) => addBook(book) ,
  dispatchRemoveBook : (book) => removeBOOK(book)
}

export default connect(mapStateProps , mapDispatchToProps )(Book)






// import React, { Component } from 'react';
// import { Text, View, ScrollView, StyleSheet} from 'react-native';
// import { connect } from 'react-redux';


// class Books extends Component{
  
//   render(){
//     const {books} = this.props
//     return (
//       <View style={styles.conatiner}>
//         <Text style={styles.title}>도서</Text>
//         <ScrollView
//           keyboardShouldPersistTaps='always'
//           style={styles.bookContainer}
//         >
//           {
//             books.map((book, index) => (
//               <View style={styles.book} key={index}>
//                 <Text style={styles.name}>{book.name}</Text>
//                 <Text style={styles.author}>{book.author}</Text>
//               </View>
//             ))
//           }
//         </ScrollView>
//         <Text>sss</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container :{
//     flex:1
//   },
//   bookContainer:{
//     borderTopWidth:1,
//     borderTopColor:'#bbb',

//   },
//   title: {
//     paddingTop: 30,
//     paddingBottom: 20,
//     fontSize: 20,
//     textAlign: 'center'
//   },
//   book: {
//     padding: 20
//   },
//   name: {
//         fontSize: 18
//       },
//       author: {
//         fontSize: 14,
//         color: '#999'
//       }
// })

// //리덕스의 상태 객체를 인수로 전달받고 하나의 키를 포함한 객체를 반환
// const mapStateToProps = (state) => ({
//   books : state.bookReducers.books
// })
// export default connect(mapStateToProps)(Books)


