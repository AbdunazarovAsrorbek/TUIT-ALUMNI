import React from 'react';
import { Switch, Route, Redirect, useParams } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

// Sahifalar
import HomeOne from '../HomeOne';
import HomeTwo from '../HomeTwo';
import About from '../pages/about/About';
import CourseGrid from '../pages/courses/CourseGrid';
import CourseList from '../pages/courses/CourseList';
import CourseDetails from '../pages/courses/CourseDetails';
import Instructor from '../pages/instructor/Instructors';
import InstructorDetails from '../pages/instructor/InstructorDetails';
import Gallery from '../pages/gallery/Gallery';
import EventDetails from '../pages/events/EventsDetails';
import Login from '../pages/account/Login';
import Register from '../pages/account/Register';
import Contact from '../pages/contact/Contact';
import Faq from '../pages/faq/Faq';
import PageNotFound from '../pages/404/PageNotFound';
import ComingSoon from '../pages/comingsoon/ComingSoon';
import BlogClassic from '../pages/blog/BlogClassic';
import BlogGrid from '../pages/blog/BlogGrid';
import BlogDetails from '../pages/blog/BlogDetails';
import Product from '../pages/shop/Products';
import ProductDetails from '../pages/shop/ProductDetails';
import Cart from '../pages/shop/Cart';
import Profile from '../pages/profile/profile';
import Regulation from '../pages/regulation/regulation';
import EventsList from '../pages/event/events';
import EventById from '../pages/events/EventById';
import SidebarPopularCourse from '../pages/events/SidebarPopularCourse';
import Vacancy from '../pages/vacancy/Vacancy';
import VacancyList from '../pages/vacancy/VacancyList';

const LanguageRoutes = () => {
    const { lang } = useParams();


    if (!['uz', 'ru', "en"].includes(lang)) {
        return <Redirect to="/uz" />;
    }
    console.log(lang)
    return (
        <Switch>
            <Route exact path={`/${lang}`} component={HomeOne} lang={lang} />
            <Route path={`/${lang}/home-two`} component={HomeTwo} />
            <Route path={`/${lang}/about`} component={About} lang={lang} />
            <Route path={`/${lang}/course-grid`} component={CourseGrid} lang={lang} />
            <Route path={`/${lang}/news`} component={CourseList} lang={lang} />
            <Route path={`/${lang}/events`} component={EventsList} lang={lang} />
            <Route path={`/${lang}/instructor`} component={Instructor} lang={lang} />
            <Route path={`/${lang}/instructor-details`} component={InstructorDetails} lang={lang} />
            <Route path={`/${lang}/media`} component={Gallery} lang={lang} />
            <Route path={`/${lang}/event-details`} component={EventDetails} lang={lang} />
            <Route path={`/${lang}/eventById`} component={EventById} lang={lang} />
            <Route path={`/${lang}/contact`} component={Contact} lang={lang} />
            <Route path={`/${lang}/faq`} component={Faq} lang={lang} />
            <Route path={`/${lang}/404`} component={PageNotFound} lang={lang} />
            <Route path={`/${lang}/coming-soon`} component={ComingSoon} lang={lang} />
            <Route path={`/${lang}/blog-classic`} component={BlogClassic} lang={lang} />
            <Route path={`/${lang}/graduates-association`} component={BlogGrid} lang={lang} />
            <Route path={`/${lang}/blog-details`} component={BlogDetails} lang={lang} />
            <Route path={`/${lang}/products`} component={Product} lang={lang} />
            <Route path={`/${lang}/product-details`} component={ProductDetails} lang={lang} />
            <Route path={`/${lang}/sidebar-product-details`} component={SidebarPopularCourse} lang={lang} />
            <Route path={`/${lang}/cart`} component={Cart} lang={lang} />
            <Route path={`/${lang}/regulation`} component={Regulation} lang={lang} />
            <Route path={`/${lang}/vacancy`} component={Vacancy} lang={lang} />
            <Route path={`/${lang}/vacancyList`} component={VacancyList} lang={lang} />

            <Route path={`/${lang}/confirm-email`} component={CourseDetails} lang={lang} />

            {/* Public / Private routes */}
            <PublicRoute restricted={true} path={`/${lang}/login`} component={Login} lang={lang} />
            <PublicRoute restricted={true} path={`/${lang}/registration`} component={Register} lang={lang} />
            <PrivateRoute path={`/${lang}/profile`} component={Profile} lang={lang} />

            {/* Agar path mos kelmasa */}
            <Route render={() => <Redirect to={`/${lang}/404`} />} />
        </Switch>
    );
};

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/uz" />} />
            <Route path="/:lang" component={LanguageRoutes} />
            <Route component={PageNotFound} />
        </Switch>
    );
};

export default Routes;
