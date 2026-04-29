import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/sidebar.js";
import { useDispatch, useSelector } from "react-redux";
import { getNewsForSidebar as onGetNewsForSidebar } from "../../slice/news/thunk";
import image1 from "../../assets/image/gallery/gallery_2_2.jpg";
import image2 from "../../assets/image/gallery/gallery_2_1.jpg";
import image3 from "../../assets/image/gallery/gallery_2_3.jpg";
import image4 from "../../assets/image/gallery/gallery_2_4.jpg";
import image5 from "../../assets/image/gallery/gallery_2_5.jpg";
import image6 from "../../assets/image/gallery/gallery_2_6.jpg";
import sidebarText from "../../data/sidebar/sidebarJson.json";

function Sidebar({ lang }) {
    const dispatch = useDispatch()
    const text = sidebarText[lang];;
    const News = useSelector(
        (state) => state.News?.newsForSidebar || []
    );

    useEffect(() => {
        const data = {
            page: 0,
            size: 3
        }
        dispatch(onGetNewsForSidebar(data));
    }, [dispatch]);

    useEffect(() => {
        const sidebarBtn = document.getElementById("sidebar-btn");

        if (sidebarBtn) {
            const sidebarOverlay = document.getElementById("sidebar-overlay");
            const sidebarBody = document.getElementById("sidebar-body");
            const sidebarExit = document.getElementById("close-sidebar");

            sidebarBtn.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.add("visible");
                sidebarBody.classList.add("opened");
            });

            sidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });

            sidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });
        }
    });

    return (
        <Styles>
            {/* Sidebar */}
            <Link to={`/${lang}/`} className="nav-link nav-sidebar" id="sidebar-btn">
                <i className="las la-bars"></i>
            </Link>

            <div className="sidebar" id="sidebar-body">
                <div className="side-logo d-flex justify-content-between">
                    <div className={"logo-box"}>
                        <Link to={`/${lang}`}>
                            <img src={process.env.PUBLIC_URL + "/assets/img/logo.png"} alt=""
                                style={{ width: "55px", height: "55px" }} />
                            <span>{text.logo_text}</span>
                        </Link>


                    </div>
                    <div><button id="close-sidebar"><i className="las la-times"></i></button></div>
                </div>

                <div className="side-post">
                    <h5>{text.latest_news}</h5>
                    {Array.isArray(News) && News.slice(0, 3).map((item) => (
                        <div className="post-box d-flex" key={item.id}>
                            <div className="post-img">
                                <img
                                    src={
                                        item.image?.base_url && item.image?.path
                                            ? `${item.image?.base_url}/${item.image.path}`
                                            : "/default-image.jpg"
                                    }
                                    alt={item.title || "news image"}
                                />
                            </div>
                            <div className="post-title">
                                <Link to={`/${lang}/event-details?id=${item.id}`}>
                                    <p>{item._translations?.[`title_${lang}`] || item.title}</p>
                                </Link>
                                <span>{item.created_at}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="side-gallery">
                    <h5>{text.gallery}</h5>
                    <img src={image1} alt="img1" />
                    <img src={image2} alt="img2" />
                    <img src={image3} alt="img3" />
                    <img src={image4} alt="img4" />
                    <img src={image5} alt="img5" />
                    <img src={image6} alt="img6" />
                </div>
                <div className="side-contact">
                    <h5>{text.contact}</h5>
                    <ul className="list-unstyled">
                        <li><i className="las la-map-marker"></i>{text.address}</li>
                        <li><i className="las la-phone"></i>{text.phone}</li>
                        <li><i className="las la-envelope"></i>{text.email}</li>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                            <a href={"https://t.me/tuituz_official"} target={"_blank"} rel="noopener noreferrer">
                                <i className="fab fa-telegram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={"https://www.youtube.com/channel/UC0aN4MLNCjMAyvUOgGXzBSA"} target={"_blank"} rel="noopener noreferrer">
                                <i className="fab fa-youtube"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={"https://www.instagram.com/tuit.official/?r=nametag"} target={"_blank"} rel="noopener noreferrer">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href={"https://www.facebook.com/TUIT1955"} target={"_blank"} rel="noopener noreferrer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
        </Styles>
    )
}

export default Sidebar
