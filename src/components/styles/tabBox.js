import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`

    .tab-section {
        background: ${colors.bg2};
        padding: 30px 0 65px;
        
        i{
            font-size: 18px;
            margin-right: 3px;
        }

        .unread-badge {
            background-color: red;
            color: white;
            border-radius: 50%;
            font-size: 12px;
            width: 20px;
            height: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin-left: 5px;
        }

        .nav {
            background-color: #ffffff;
            border-radius: 5px;
            border: 1px solid ${colors.border1};
            overflow: hidden;

            .nav-item {
                a.nav-link {
                    font-size: 15px;
                    color: ${colors.black1};
                    border-bottom: 1px solid ${colors.border1};
                    padding: 18px 25px;

                    i {
                        color: ${colors.green};
                    }
                }

                a.nav-link.active {
                    background: ${colors.gr_bg};
                    color: #ffffff;

                    i {
                        color: #ffffff;
                    }
                }

                &:last-child {
                    a.nav-link {
                        border-bottom: none;
                    }
                }
            }

            @media (max-width: 767px) {
                margin-bottom: 30px;
            }
        }

        .tab-content {
            .tab-pane {
                h4.tab-title {
                    color: ${colors.black1};
                    font-weight: 600;
                    margin-bottom: 25px;

                    @media (max-width: 575px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }

                p.tab-desc {
                    font-size: 15px;
                    color: ${colors.text2};
                    line-height: 30px;
                    margin-bottom: 25px;

                    @media (max-width: 575px) {
                        font-size: 14px;
                    }
                }

                ul.check-list {
                    li {
                        font-size: 15px;
                        color: ${colors.text3};
                        margin-bottom: 20px;
                        line-height: 25px;

                        i {
                            float: left;
                            color: ${colors.green};
                            border: 1px solid ${colors.border3};
                            width: 35px;
                            height: 35px;
                            border-radius: 50%;
                            text-align: center;
                            padding-top: 9px;
                            margin-top: 7px;
                            margin-right: 15px;
                        }

                        &:last-child {
                            margin-bottom: 0;
                        }

                        @media (max-width: 575px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }
        .tab-section-content {
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border-radius: 5px;
            padding: 15px 20px 20px;
        }
        
         .single-details-sidbar {
            .course-details-feature {
                box-shadow: 0 8px 25px rgba(0,0,0,0.1);
                border-radius: 5px;
                padding: 15px 20px 20px;
                h5.title {
                    color: ${colors.black1};
                    font-weight: 600;
                    padding-bottom: 10px;
                    margin-bottom: 20px;
                    position: relative;
                    &:before {
                        position: absolute;
                        content: "";
                        background: ${colors.green};
                        width: 50px;
                        height: 2px;
                        bottom: 0;
                        left: 0;
                    }

                    @media(max-width: 575px) {
                        font-size : 17px;
                    }
                }

                ul.feature-list {
                    margin-bottom: 20px;
                    li {
                        border-top: 1px dashed ${colors.border3};
                        padding: 12px 0;
                        font-size : 14px;
                        color : ${colors.black2};
                        font-weight: 500;
                        i {
                            font-size : 20px;
                            color: ${colors.green};
                            vertical-align: top;
                            margin-right : 2px;
                        }
                        span {
                            float : right;
                            font-size: 13px;
                            color: ${colors.text3};
                            font-weight: 400;
                            line-height: 20px;
                        }
                        &:first-child {
                            border-top : none;
                            padding-top : 0;
                        }
                        &:last-child {
                            padding-bottom : 0;
                        }
                    }
                }

                button.enroll-btn {
                    font-size: 16px;
                    color: #fff;
                    background: ${colors.gr_bg};
                    display: inline-block;
                    width: 100%;
                    height: 40px;
                    font-weight : 500;
                    border : none;
                    padding: 9px;
                    border-radius: 5px;
                    &:hover {
                        background: ${colors.gr_bg2};
                    }

                    @media(max-width: 575px) {
                        font-size : 14px;
                    }
                }

                @media(max-width: 1199px) {
                    padding: 12px 15px 15px;
                }
            }
        }

        @media (max-width: 767px) {
            padding: 35px 0 30px;
        }
    }
`;