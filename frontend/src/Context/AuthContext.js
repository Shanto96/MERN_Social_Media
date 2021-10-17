import {createContext,useReducer} from 'react'
import AuthReducer from './AuthReducer'

const INITIAL_STATE = {
    user:{city: "Dhaka",
    coverPicture: "",
    createdAt: "2021-08-24T17:44:51.992Z",
    desc: "Hello friends what's up?",
    email: "shan3@gmail.com",
    followers: [],
    following: [],
    from: "Comilla",
    password: "$2b$10$QzMKsMFQIedyTEFurr1lau5b1EItpDvwRUamEvkvGhUkCEZHFDg7G",
    profilePicture: "https://scontent.fcla1-1.fna.fbcdn.net/v/t1.6435-9/241356561_4363081590437255_54693629379408543_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ObezHvOZ_0MAX9b7p36&_nc_ht=scontent.fcla1-1.fna&oh=6a173ca917798f7e2140e0d8cf53c061&oe=6167A3BB",
    reletionShip: "1",
    updatedAt: "2021-09-24T16:22:28.246Z",
    username: "shantoh2112",
    __v: 0,
    _id: "612530137bfb314b9c72ccc2"},
    isFetching:false,
    error:false
}

export const AuthContext = createContext(INITIAL_STATE);


export const AuthContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(AuthReducer,INITIAL_STATE);


    return(
        <AuthContext.Provider
         value={{
             user:state.user,
             isFetching:state.isFetching,
             error:state.error,
             name : "Shanto",
             dispatch
         }}
        >
        {children}

        </AuthContext.Provider>
    )
}