import api from "./config";
const registerHotelUrl = "/hotel/create";
const searchHotelUrl = "/hotel/search";
const getHotelDetailsUrl = "/hotel/getDetails";

export const registerHotelApi = async (data) => {
    try{
        const response = await api.post(registerHotelUrl , data ,{ 
            headers: {
                'Content-Type': 'multipart/form-data',
              },});
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const searchHotelApi = async (data) => {
    try{
        const response = await api.post(searchHotelUrl , data);
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

export const getHotelDetailsApi = async (data) => {
    try{
        const response = await api.post(getHotelDetailsUrl , data);
        return response;
    }
    catch(err){
        console.log(err);
        return err;
    }
}