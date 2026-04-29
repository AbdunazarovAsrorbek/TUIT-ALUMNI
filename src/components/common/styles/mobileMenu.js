import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
    .mobile-menu-area {
        background: ${colors.bg1};
        display: none;
        
        
        .login-register {
            ul {
                li {
                    a {
                        font-size: 13px;
                        color: ${colors.green};
                        font-weight: 500;
                        text-transform: uppercase;

                        &:hover {
                            color: #ffffff;
                        }
                    }

                }
            }
        }

        .user-setting {
            position: relative;
            margin-left: 70px;

            .user-info {
                margin-top: -1px;
                display: flex;
                align-items: center;
                gap: 5px;
            }

            .user_icon {
                color: #aaaaaa;
                background: ${colors.gr_bg};
                width: 36px;
                height: 36px;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 16px;
            }

            .user-settings-name {
                font-size: 15px;
                font-weight: 500;
                color: #aaaaaa;
            }

            //@media (max-width: 991px) {
            //    display: none;
            //}

            ul.dropdown {
                position: absolute;
                right: 0;
                top: 100%;
                min-width: 190px;
                background: #fff;
                border: 1px solid ${colors.border1};
                text-align: left;
                padding: 0;
                border-radius: 5px;
                transition: 0.2s ease;
                opacity: 0;
                transform: scaleY(0);
                visibility: hidden;
                z-index: 999;
                transform-origin: center top 0;

                li.nav-item {
                    position: relative;

                    a.nav-link {
                        font-size: 13px;
                        color: ${colors.text1};
                        padding: 10px 20px;
                        text-transform: capitalize;
                        font-weight: 400;
                        margin-right: 0;
                        border-bottom: 1px solid ${colors.border1};
                        display: flex;
                        align-items: center;

                        &:hover {
                            color: ${colors.green};
                        }

                        i {
                            //margin-top: 4px;
                            color: #4a2559;
                            font-size: 18px;
                            font-weight: 900;
                            margin-right: 3px;
                        }
                    }

                    .nav_button {
                        font-size: 13px;
                        color: ${colors.text1};
                        padding: 10px 20px;
                        text-transform: capitalize;
                        font-weight: 400;
                        margin-right: 0;
                        border-bottom: 1px solid ${colors.border1};
                        display: flex;
                        align-items: center;
                        cursor: pointer;

                        &:hover {
                            color: ${colors.green};
                        }

                        i {
                            //margin-top: 4px;
                            color: #4a2559;
                            font-size: 18px;
                            font-weight: 900;
                            margin-right: 3px;
                        }
                    }


                    &:last-child {
                        margin-left: 0;

                        a.nav-link {
                            border-bottom: none;
                        }
                    }

                    ul.dropdown2 {
                        position: absolute;
                        top: 0;
                        left: 100%;
                        min-width: 180px;
                        background: #fff;
                        border: 1px solid ${colors.border1};
                        transition: 0.2s ease;
                        opacity: 0;
                        transform: scaleY(0);
                        visibility: hidden;
                        z-index: 999;
                        transform-origin: center top 0;
                    }

                    &:hover {
                        ul.dropdown2 {
                            opacity: 1;
                            transform: scaleY(1);
                            visibility: visible;
                        }
                    }
                }
            }


            &:hover {
                ul.dropdown {
                    opacity: 1;
                    transform: scaleY(1);
                    visibility: visible;
                }
            }
        }

        .mb-topbar {
            border-bottom: 1px solid ${colors.black2};

            button {
                color: #aaaaaa;
            }

            .topbar-item {
                p {
                    font-size: 13px;
                    color: ${colors.text4};
                    padding: 8px 0;

                    i {
                        font-size: 16px;
                        color: ${colors.green};
                        vertical-align: text-top;
                        margin-right: 5px;
                    }
                }

               
            }
        }

        .mb-logo-area {
            padding: 10px 0;

            .mb-logo-box {
                .hm-button {
                    margin-top: 8px;
                    margin-right: 35px;
                    position: relative;

                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.text1};
                        width: 1px;
                        height: 25px;
                        top: -4px;
                        right: -16px;
                    }

                    a#mb-sidebar-btn {
                        i {
                            font-size: 20px;
                            color: ${colors.green};
                        }
                    }

                    @media (max-width: 480px) {
                        margin-top: 6px;
                        margin-right: 8px;
                        &:before {
                            content: none;
                        }
                    }
                }

                .mb-logo {
                    a {
                       font-size: 11px;
                        color: #aaaaaa;
                        line-height: 1;
                        
                    }
                }
            }

            .mb-search-box {
                form {
                    width: 170px;
                    position: relative;

                    input {
                        width: 100%;
                        height: 35px;
                        border: 1px solid ${colors.text2};
                        background: transparent;
                        color: #ffffff;
                        border-radius: 5px;
                        padding-left: 15px;

                        &::placeholder {
                            font-size: 14px;
                            color: ${colors.text3};
                        }

                        &:focus {
                            border-color: ${colors.green};
                        }

                        @media (max-width: 480px) {
                            max-width: 280px;
                        }

                        @media (max-width: 320px) {
                            display: none;
                        }
                    }

                    button {
                        position: absolute;
                        top: 0;
                        right: 0;
                        height: 100%;
                        width: 40px;
                        background: transparent;
                        border: none;
                        font-size: 16px;
                        color: ${colors.green};

                        i {

                        }

                        @media (max-width: 320px) {
                            display: none;
                        }
                    }

                    @media (max-width: 480px) {
                        max-width: 130px;
                    }
                }
            }
        }

        @media (max-width: 767px) {
            display: block;
        }
    }

    .mb-sidebar {
        background: #ffffff;
        height: 100%;
        width: 320px;
        position: fixed;
        top: 0;
        left: -320px;
        overflow-y: auto;
        z-index: 9999;
        transition: all 400ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
        display: none;

        .mb-sidebar-heading {
            background: ${colors.gr_bg};
            padding: 25px;

            h5 {
                color: #ffffff;
                text-transform: uppercase;
            }

            button#close-mb-sidebar {
            border: none;
            background: none;
                i {
                    font-size: 22px;
                    color: #ffffff;
                }
            }
        }

        .mb-sidebar-menu {
            padding: 25px;

            .mb-menu-item {
                border-top: 1px solid ${colors.border1};

                &:last-child {
                    border-bottom: 1px solid ${colors.border1};
                }

                .mb-menu-Link {
                    border: none;
                    background: transparent;
                    display: block;
                    width: 100%;
                    padding: 10px 0;
                    text-align: left;
                    color: ${colors.black1};
                    text-transform: uppercase;
                    font-size: 14px;
                }

                button.mb-menu-button {
                    border: none;
                    background: transparent;
                    display: block;
                    width: 100%;
                    padding: 10px 0;
                    text-align: left;

                    p {
                        font-size: 14px;
                        color: ${colors.black1};
                        text-transform: uppercase;

                        i {
                            font-size: 13px;
                            float: right;
                            border: 1px solid ${colors.border3};
                            border-radius: 25px;
                            padding: 3px;
                        }

                        &:hover {
                            color: ${colors.green};

                            i {
                                border-color: ${colors.green};
                            }
                        }
                    }
                }

                .mb-menu-content {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.2s ease-in-out;

                    ul {
                        li {
                            border-top: 1px solid ${colors.border1};

                            a {
                                font-size: 13px;
                                color: ${colors.black2};
                                display: block;
                                padding: 10px 0;
                                padding-left: 15px;

                                &:hover {
                                    color: ${colors.green};
                                }
                            }
                        }
                    }
                }

                .mb-menu-content.show {
                    max-height: 100%;
                }
            }
        }

        @media (max-width: 767px) {
            display: block;
        }

        @media (max-width: 480px) {
            max-width: 275px;
        }
    }

    .mb-sidebar.opened {
        left: 0 !important;
    }

    .mb-sidebar-overlay {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        display: block;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1111;
        visibility: hidden;
        opacity: 0;
        transition: 0.3s ease;
    }

    .mb-sidebar-overlay.visible {
        visibility: visible;
        opacity: 1;
    }
`;