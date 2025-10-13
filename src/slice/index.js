import { combineReducers } from "redux";

import LoginReducer from "./auth/login/reducer";
import RegisterReducer from "./auth/register/reducer";
import FacultyReducer from "./faculty/reducer";
import ProfileReducer from "./profile/reducer";
import GraduatesReducer from "./graduates/reducer";
import NotificationReducer from "./notification/reducer";
import FriendsReducer from "./friends/reducer";
import NewsReducer from "./news/reducer";
import ClubMemberReducer from "./clubMember/rdeucer";
import ChatFriendsReducer from "./chat/reducer";
import EventReducer from "./event/reducer";
import VacancyReducer from "./vacancy/reducer";
import MediaReducer from "./media/reducer";

const rootReducer = combineReducers({
    Login: LoginReducer,
    Register: RegisterReducer,
    Faculty: FacultyReducer,
    Profile: ProfileReducer,
    Graduates: GraduatesReducer,
    Notification: NotificationReducer,
    Friends: FriendsReducer,
    News: NewsReducer,
    ClubMember: ClubMemberReducer,
    Messages: ChatFriendsReducer,
    Event: EventReducer,
    Vacancy: VacancyReducer,
    Media: MediaReducer,
});

export default rootReducer;


