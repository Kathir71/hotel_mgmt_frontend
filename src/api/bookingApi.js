import api from "./config";

const checkAvailabilityUrl = "/booking/checkAvailability";
const bookUrl = "/booking/book";

export const checkAvailabilityApi = async (data) => {
    try {
        const response = await api.post(checkAvailabilityUrl, data);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
};

export const bookApi = async (data) => {
    try {
        const response = await api.post(bookUrl, data);
        return response;
    } catch (err) {
        console.log(err);
        return err;
    }
}
