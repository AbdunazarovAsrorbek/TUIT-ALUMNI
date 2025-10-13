import styled from "styled-components";
import { colors } from "../../../components/common/element/elements";

export const Styles = styled.div`
    .gallery-page {

        .category-row {
            padding: 20px 0;
            display:flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 10px;
        }

        .category-col {
            max-width:110px;
            display:flex;
            align-items: center;
            justify-content: center;
        }

        .category-card {
            min-width: 100%;
            height: 40px;
            display: flex;
            align-items: center;       
            justify-content: center;  
            border: none;
            border-radius: 6px;
            color:#FFF;
            background:${colors.gr_bg};
            transition: 0.3s;
            cursor: pointer;
        }
          
        .category-card:hover {
            background:${colors.gr_bg2};
        }

        .category-card.active {
            background:${colors.gr_bg2};
        }

        .text-subtitle {
            text-align: center; 
            font-size: 25px;
            padding: 5px 0 30px;
        }

        .gallery-page-area {
            padding: 15px 0;

            .media-col{
                display:flex;
                align-items: center;       
                justify-content: center; 
            }

            .gallery-box {
                margin:15px 0;
                border-radius : 5px;
                overflow: hidden;
                position: relative;
                width: 350px;
                height: 300px; 
                background-size: cover; 
                background-position: center;
            

                .preview-img {
                    width: 100%;
                    height: 300px;
                    object-fit: cover;
                }


                img {
                 
                    transition: all 0.3s ease;
                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }

            @media(max-width: 767px) {
                padding: 30px 0;
            }
            
        }
    }
`;
