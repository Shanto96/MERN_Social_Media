import axios from 'axios'


export const loginCall= async(userCredentials, dispatch) => { 
   

   dispatch({type: 'LOGIN_START'});

   try {
       const res = await   axios.post("auth/login",userCredentials);
       
       dispatch({type: 'LOGIN_SUCCESS',payload: res.data})
   } catch (error) {
       dispatch({type: 'LOGIN_FAILURE',payload:error})
   }

}

export const registerCall = async(userInfo, dispatch) =>{
    try {
        const res =  await axios.post("auth/register",userInfo);
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }

}