//LOGIN
export const USER_LOGIN = "/api/v1/auth/alumni";

// LogOut
export const LOG_OUT="/api/v1/auth/logout"

// FACULTY
export const GET_FACULTY_LIST = `/api/v1/faculties/findAll`;

// Register
export const REGISTER = `/api/v1/auth/register`;

//PROFILE
export const GET_PROFILE = "/api/v1/auth/alumni/profile";
export const ADD_PROFILE = "/api/v1/brands/create";
export const UPDATE_PROFILE = "/api/v1/alumni/update";

// Certificate

export const GET_CERTIFICATE = "/api/v1/alumni/certificate";

// Graduates

export const GET_GRADUATES = "/api/v1/connections/alumni/search";

// Notification
export const GET_NOTIFICATION = "/api/v1/connections/getAllPendingRequest";
export const GET_REJECT_REQUEST = "/api/v1/connections/getAllRejectedRequest";
export const GET_ACCEPT_REQUEST = "/api/v1/connections/getAllAcceptedRequest";
export const REJECT = "/api/v1/connections/rejectRequest";
export const ACCEPT = "/api/v1/connections/acceptRequest";
export const SEND_REQUEST = "/api/v1/connections/sendRequest";

// Friends
export const GET_FRIENDS = "/api/v1/connections/findFriends";

// News
export const GET_NEWS = "/api/v1/posts/findAll";
export const GET_NEWS_BY_ID = "/api/v1/posts/findById";


// Chat
export const MESSAGE_SEND = "/api/v1/message/send";
export const GET_MESSAGE = "/api/v1/message/get-chat/{friendId}";
export const DELETE_MESSAGE = "/api/v1/message/delete/{messageId}";
export const EDIT_MESSAGE = "/api/v1/message/edit/{messageId}/{toAlumniId}";
export const GET_CHAT_FRIENDS = "/api/v1/message/chat-friends";
export const READ_MESSAGE = "/api/v1/message/read/{toAlumniId}";

// ClubMember
export const GET_CLUB_MEMBER = "/api/v1/club-member/findPagination";

// Event
export const GET_EVENT = "/api/v1/event/findAll/pagination";
export const GET_EVENT_BY_ID = "/api/v1/event/findById";

// Vacancy
export const GET_VACANCY = "api/v1/vacancy/findAll";
export const GET_VACANCY_BY_ID = "/api/v1/vacancy/findById";

// Media
export const GET_MEDIA = "/api/v1/media/findAll";
export const GET_MEDIA_CATEGORY = "/api/v1/media-category/findAll";


