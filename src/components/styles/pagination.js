import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`

    /* Pagination */

    .pagination-box {
        margin-top: 30px;
    }

    .pagination-box li button {
        padding: 6px 12px;
        border: none;
        background-color: #eee;
        margin: 0 3px;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s ease all;

        @media (max-width: 576px) {
            padding:4px 9px;
        }

        @media (max-width: 420px) {
            padding:3px 4px;
        }
    }

    .pagination-box li.active button {
        background-color: #26416a;
        color: #fff;
    }

    .pagination-box li button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    ul.pagination-box {
        margin-top: 20px;

        li {
            margin-right: 15px;

            a {
                font-size: 16px;
                color: ${colors.green};
                width: 38px;
                height: 38px;
                border: 1px solid ${colors.border3};
                background-color: #fff;
                display: block;
                padding-top: 7px;
                border-radius: 50%;

                i {

                }

                &:hover {
                    background-color: ${colors.green};
                    color: #ffffff;
                    border-color: ${colors.green};
                }

                @media (max-width: 576px) {
                    font-size: 12px;
                    width: 30px;
                    height: 30px;
                    padding-top: 4px;
                }
            }

            &:last-child {
                margin-right: 0;
            }
        }

        li.active {
            a {
                background-color: ${colors.green};
                color: #fff;
                border-color: ${colors.green};
            }
        }

        @media (max-width: 767px) {
            margin-top: 5px;
        }

        
    }
`;