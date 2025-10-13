import axios from "axios";


axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    function (response) {
        return response.data ? response.data : response;
    },
    function (error) {
        let message;
        const status = error.response ? error.response.status : null;

        switch (status) {
            case 500:
                message = "Internal Server Error";
                break;
            case 401:
                logoutUser();
                message = "Invalid credentials";
                break;
            case 404:
                message = "Sorry! The data you are looking for could not be found";
                break;
            default:
                message = error.message || "Something went wrong";
        }
        return Promise.reject(message);
    }
);

class APIClient {
    get = (url, params) => {
        let response;

        let paramKeys = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    };

    getData = (url, data) => {
        return axios.get(`${url}`, data);
    }
    getCertificate = (url, id) => {
        return axios.post(`${url}/${id}`, null, {
            responseType: "blob",
        });
    };

    getGraduate = (url, data) => {
        // console.log( url, data);
        return axios.post(`${url}?page=0&size=20`, data);
    }
    getProductById = (url, id) => {
        const newUrl = `${url}/${id}`;
        return axios.get(newUrl);
    }
    getNewsById = (url, id) => {
        const newUrl = `${url}/${id}`;
        return axios.get(newUrl);
    }

    create = (url, data) => {
        return axios.post(url, data);
    };

    register = (url, data) => {
        let headers = {};
        if (data instanceof FormData) {
            headers["Content-Type"] = "multipart/form-data";
        }
        return axios.post(url, data, { headers: headers });
    }
    updateById = (url, data) => {
        let headers = {};
        if (data instanceof FormData) {
            headers["Content-Type"] = "multipart/form-data";
        }
        return axios.post(url, data, { headers: headers });
    }

    updateColor = (url, data) => {
        return axios.post(url, data);
    }
    getConfirmation = (url, data) => {

        return axios.post(url + "?page=0&size=100", data);
    }

    getNotification = (url) => {
        const data = {
            name: null,
            status: "PENDING"
        }
        return axios.get(url + "?page=0&size=10", data);
    }
    getFriends = (url) => {
        return axios.get(url);
    }

    deleteById = (url, id) => {
        return axios.post(url + "/" + id)
    }
    // create Product

    adminLogin = (url, data) => {
        // console.log(url, data);
        return axios.post(url, data);
    }

    logOut = (url) => {
        return axios.get(url)
    };

    /**
     * Updates data
     */
    update = (url, data) => {
        return axios.patch(url, data);
    };

    put = (url, data) => {
        return axios.put(url, data);
    };
    /**
     * Delete
     */
    delete = (url, config) => {
        return axios.delete(url, { ...config });
    };

    // chat
    message = (url, data) => {
        return axios.post(`${url}`, data);
    };

    getMessage = (url, friendId) => {
        const finalUrl = url.replace("{friendId}", friendId);
        return axios.get(finalUrl);
    };

    deleteMessage = (url, toAlumniId, messageId) => {
        return axios.post(url.replace("{messageId}", messageId), null, {
            params: { toAlumniId },
        });
    };

    editMessage = (url, messageId, toAlumniId, text) => {
        const finalUrl = url
            .replace("{messageId}", messageId)
            .replace("{toAlumniId}", toAlumniId);

        return axios.post(finalUrl, text);
    };

    getChatFriends = (url) => {
        return axios.get(url);
    };

    readMessage = (url, toAlumniId, messageIds) => {
        return axios.post(url.replace("{toAlumniId}", toAlumniId), messageIds, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    // ClubMember
    getClubMember = (url, data) => {
        return axios.get(`${url}?page=${data.page}&size=${data.size}`);
    }

    // Event
    getEvent = (url, data) => {
        return axios.get(`${url}?page=${data.page}&size=${data.size}`, {
            headers: { lang: "uz" }
        });
    };
    getEventById = (url, id) => {
        const newUrl = `${url}/${id}`;
        return axios.get(newUrl);
    }

    // Vacancy
    getVacancy = (url, data) => {
        return axios.get(`${url}?page=${data.page}&size=${data.size}`, {
            headers: { lang: "uz" }
        })
    }
    getVacancyById = (url, id) => {
        const newUrl = `${url}/${id}`;
        return axios.get(newUrl);
    }


    // Media
    getMedia = (url, data, categoryId) => {
        // console.log(url, data, categoryId);
        return axios.get(`${url}/${categoryId}?page=${data.page}&size=${data.size}`);
    }
    getMediaCategory = (url) => {
        return axios.get(url)
    }

}

const getLoggedInUser = () => {

    const user = localStorage.getItem("authUser");
    if (!user) {
        return null;
    } else {
        return JSON.parse(user);
    }


};

const logoutUser = () => {
    localStorage.removeItem("authAlumni");
    window.location.href = "/login";
}


export { APIClient, getLoggedInUser };