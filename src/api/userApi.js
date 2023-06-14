import api from "./config";
const signUpUrl = "/user/signup";
const loginUrl = "/user/login";
const getDetailsUrl = "/user/getDetails";

export const signUpApi = async ( data ) => {
    try{
        const response = await api.post(signUpUrl , data);
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const loginApi = async (data) => {
    try{
        const response = await api.post(loginUrl , data);
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }

}

export const getDetailsApi = async(data) => {
    try{
        const response = await api.post(getDetailsUrl , data);
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
}