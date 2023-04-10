const { createStore, combineReducers } = require("redux")

//Initial state

const postInitialState = {
    posts: []
}

const userInitialState = {
    users: []
}

//Action type

const ADD_POST = "ADD_POST"
const REMOVE_POST = "REMOVE_POST"
const ADD_USER = "ADD_USER"
const REMOVE_USER = "REMOVE_USER"

//Action creator for user

const addUserAction = (user) =>{
    return{
        type: ADD_USER,
        payload: user
    }
}

const removeUserAction = (id) =>{
    return{
        type: REMOVE_USER,
        payload: id
    }
}

//Action creator for post

const addPostAction = (post) =>{
    return{
        type: ADD_POST,
        payload: post
    }
}

const removePostAction = (id) =>{
    return{
        type: REMOVE_POST,
        payload: id
    }
}

//Reducer for post

const postReducer = (state= postInitialState, action) =>{
   switch(action.type){
       case ADD_POST:
          return{
              posts: [...state.posts, action.payload]
          }

        case REMOVE_POST:
            return{
                posts: state.posts.filter((post) =>{
                    return post.id !== action.payload
                })
            }
        default:
            return state
    }
}

//reducer for user

const userReducer = (state= userInitialState, action) =>{
    switch(action.type){
        case ADD_USER:
           return{
               users: [...state.users, action.payload]
           }
 
         case REMOVE_POST:
             return{
                 users: state.users.filter((user) =>{
                     return user.id !== action.payload
                 })
             }
         default:
             return state
     }
 }

 //root reducer

 const rootReducer = combineReducers({
    posts: postReducer,
    users: userReducer
 })

//store

const store = createStore(rootReducer)

//subscribe

store.subscribe(()=>{
    const data = store.getState()
    console.log('posts', data.posts)
    console.log('users', data.users)
})

//dispatch

store.dispatch(addPostAction({
    id: 1,
    title: 'Best things of the day'
}))

store.dispatch(addPostAction({
    id: 2,
    title: 'Best course of the day'
}))


// store.dispatch(removePostAction(1))


store.dispatch(addUserAction({
    id:1,
    name: 'kalisa',
    email: 'kalisa@yahoo.com'
}))