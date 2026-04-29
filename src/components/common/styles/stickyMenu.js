import styled from "styled-components";
import { colors } from "../element/elements.js";

export const Styles = styled.div`
    .sticky-menu {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1111;
        animation: 300ms ease-in-out 0s normal none 1 fadeInDown;
        background: #ffffff;
        height: 75px;
        padding: 10px 0;
        box-shadow: 0 0 20px -10px #222222;

        .logo {
            a {
                display: flex;
                align-items: center;
                gap: 8px;

                img {
                    @media (max-width: 1199px) {
                        max-width: 100%;
                    }
                }
            }

            span {
                font-size: 12px;
                line-height: 1.2;
                color: #0c5460;
                @media (max-width: 992px) {
                    display: none;              
                }
            }


        }

        div.menu-box {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                gap: 55px;
            ul.nav.menu-nav {
            display: flex;
            align-items: center;    
            gap: 15px;
                li.nav-item {
                    position: relative;

                    a.nav-link {
                        font-size: 14px;
                        color: ${colors.black1};
                        text-transform: uppercase;
                        font-weight: 500;
                        padding: 0;
                        // margin-right: 3px;
                    
                        i {
                            font-size: 12px;
                        }

                        &:after {
                            content: none;
                        }

                        &:hover {
                            color: ${colors.green};
                        }

                        @media (max-width: 1199px) {
                            // padding-left: 0;
                            // padding-right: 8px;
                        }

                        // @media (max-width: 991px) {
                        //     padding-right: 6px;
                        // }
                    }

                    ul.dropdown {
                        position: absolute;
                        left: 0;
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

                                &:hover {
                                    color: ${colors.green};

                                    i {
                                        color: #fff;
                                    }
                                }

                                i {
                                    float: right;
                                    margin-top: 4px;
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
            }

            .apply-btn {
                a {
                    font-size: 13px;
                    color: #ffffff;
                    background: ${colors.gr_bg};
                    display: inline-block;
                    padding:0 10px 0 25px;
                    height: 40px;
                    text-align: center;
                    text-transform: uppercase;
                    font-weight: 500;
                    padding: 11px;
                    border-radius: 0 5px 5px 0;
                    position: relative;
                    white-space: nowrap;

                    i {
                        position: absolute;
                        font-size: 20px;
                        left: -40px;
                        top: 0;
                        padding: 10px;
                        width: 40px;
                        height: 100%;
                        border-radius: 5px 0 0 5px;
                        background-color: ${colors.green2};
                    }

                    &:hover {
                        background: ${colors.gr_bg2};
                    }
                }

                // @media (max-width: 1199px) {
                //                        padding-left: 15px;
                // }

                // @media (max-width: 991px) {
                //     padding-left: 15px;
                // }
            }

            .user-settings {
                position: relative;
                //margin-left: 70px;

                .user-info {
                    // margin-top: 2.5px;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }

                .user_icon {
                    color: #ffffff;
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
                    color: #182B49;
                }

                @media (max-width: 991px) {
                    display: none;
                }

                ul.dropdown {
                    position: absolute;
                    left: 0;
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
        }

        @media (max-width: 767px) {
            display: none;
        }   
            
    }

    .sticky-menu.sticky {
        display: block;

        @media (max-width: 767px) {
            display: none;
        }
    }
`;