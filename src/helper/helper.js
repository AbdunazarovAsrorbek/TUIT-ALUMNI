import { APIClient } from "./api_helper";
import * as url from "./url_helper"
// import { GET_NEWS, GET_NEWS_BY_ID } from "./url_helper";
const api = new APIClient();

// Login Method
export const login = (data) => api.adminLogin(url.USER_LOGIN, data);

// LogOut
export const logOut = () => api.logOut(url.LOG_OUT);

//Faculty
export const getFacultyList = () => api.getData(url.GET_FACULTY_LIST, null);

// Register
export const register = (data) => api.register(url.REGISTER, data);

// Profile
export const getProfile = () => api.getData(url.GET_PROFILE, null);
export const addProfile = (data) => api.create(url.ADD_PROFILE, data);
export const updateProfile = (data) => api.updateById(url.UPDATE_PROFILE + "/" + data.id, data.data);

//Certificate
export const getCertificate = (id) => api.getCertificate(url.GET_CERTIFICATE, id);


// Graduates
export const getGraduates = (data) => api.getGraduate(url.GET_GRADUATES, data);

//Notification
export const getNotification = () => api.getConfirmation(url.GET_NOTIFICATION);
export const getRejectRequest = () => api.getConfirmation(url.GET_REJECT_REQUEST);
export const getAcceptRequest = () => api.getConfirmation(url.GET_ACCEPT_REQUEST);
export const reject = (id) => api.updateColor(url.REJECT + `?connectionId=${id}`, null);
export const accept = (id) => api.updateColor(url.ACCEPT + `?connectionId=${id}`, null);
export const sendRequest = (id) => api.updateColor(url.SEND_REQUEST + `?receiverId=${id}`, null);

//Friends
export const getFriends = (data) => api.getFriends(url.GET_FRIENDS, data);

// News
export const getNews = (data) => api.getData(`${url.GET_NEWS}?page=${data.page}&size=${data.size}`, null);
export const getNewsById = (id) => api.getNewsById(url.GET_NEWS_BY_ID, id);

// Chat
export const messageSend = (data) => api.message(url.MESSAGE_SEND, data);
export const getMessage = (id) => api.getMessage(url.GET_MESSAGE, id);
export const deleteMessage = (toAlumniId, messageId) =>
    api.deleteMessage(url.DELETE_MESSAGE, toAlumniId, messageId);
export const editMessage = (messageId, toAlumniId, text) => {
    return api.editMessage(url.EDIT_MESSAGE, messageId, toAlumniId, text);
};
export const getChatFriends = () => api.getChatFriends(url.GET_CHAT_FRIENDS);
export const readMessage = (toAlumniId, messageIds) =>
    api.readMessage(url.READ_MESSAGE, toAlumniId, messageIds);

// ClubMember
export const getClubMember = (data) => api.getClubMember(url.GET_CLUB_MEMBER, data)


// Event
export const getEvent = (data) => api.getEvent(url.GET_EVENT, data);
export const getEventById = (id) => api.getEventById(url.GET_EVENT_BY_ID, id);

// Vacancy
export const getVacancy = (data) => api.getVacancy(url.GET_VACANCY, data);
export const getVacancyById = (id) => api.getVacancyById(url.GET_VACANCY_BY_ID, id);

// Media
export const getMedia = (data, categoryId) => api.getMedia(url.GET_MEDIA, data, categoryId)
export const getMediaCategory = () => api.getMediaCategory(url.GET_MEDIA_CATEGORY)