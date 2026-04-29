import styled from "styled-components";
import { colors } from "../../../components/common/element/elements.js";


export const Styles = styled.div`
    .profile-page {
        .icon-box-area {
            padding-bottom: 72px;

            .full-icon-box {
                .icon-box {
                    position: inherit;
                    top: 0;
                    left: 0;
                    width: unset;
                }
            }

            @media (max-width: 767px) {
                padding: 0 0 10px;
            }
        }
    }

    .tab-section {
        background: ${colors.bg2};
        padding: 30px 0 65px;

        i {
            font-size: 18px;
            margin-right: 3px;
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

                    @media (max-width: 576px) {
                        margin-bottom: 15px;
                        font-size: 20px;
                    }
                }

                p.tab-desc {
                    font-size: 15px;
                    color: ${colors.text2};
                    line-height: 30px;
                    margin-bottom: 25px;

                    @media (max-width: 576px) {
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

                        @media (max-width: 576px) {
                            font-size: 14px;
                        }
                    }
                }
            }
        }

        .tab-section-content {
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 15px 20px 20px;
        }

        .single-details-sidbar {
            .course-details-feature {
                box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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

                    @media (max-width: 576px) {
                        font-size: 17px;
                    }
                }

                ul.feature-list {
                    margin-bottom: 20px;

                    li {
                        border-top: 1px dashed ${colors.border3};
                        padding: 12px 0;
                        font-size: 14px;
                        color: ${colors.black2};
                        font-weight: 500;

                        i {
                            font-size: 20px;
                            color: ${colors.green};
                            vertical-align: top;
                            margin-right: 2px;
                        }

                        span {
                            float: right;
                            font-size: 13px;
                            color: ${colors.text3};
                            font-weight: 400;
                            line-height: 20px;
                        }

                        &:first-child {
                            border-top: none;
                            padding-top: 0;
                        }

                        &:last-child {
                            padding-bottom: 0;
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
                    font-weight: 500;
                    border: none;
                    padding: 9px;
                    border-radius: 5px;

                    &:hover {
                        background: ${colors.gr_bg2};
                    }

                    @media (max-width: 576px) {
                        font-size: 14px;
                    }
                }

                @media (max-width: 1199px) {
                    padding: 12px 15px 15px;
                }
            }
        }
        @media (max-width: 767px) {
            padding: 35px 0 30px;
        }

        .img-box {
            width: 120px;
            height: 140px;
            background-color: #4a2559;
            border-radius: 5px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
            position: relative;

            @media (max-width: 576px) {
                width: 100px;
                height: 110px;
            }

            .img-fluid {
                width: 100%;
                height: 100%;
                border-radius: 5px;
                object-fit: cover;
              }

            .add_user-img {
                position: absolute;
                top: 0;
                left: 0;
                visibility: hidden;
                width: 100%;
                height: 100%;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.3s;
                background-color: rgba(0, 0, 0, 0.6);

                svg {
                    width: 0;
                    height: 0;
                    transition: all 0.3s;
                }

                input {
                    display: none;
                    outline: none;
                    box-shadow: none;
                }

            }

            .profile_no-img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 5px;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    border-radius: 5px;
                }

                p {
                    color: white;
                    font-size: 30px;

                    @media (max-width: 576px) {
                        font-size: 20px;
                    }
                }
            }

            &:hover {
                .add_user-img {
                    visibility: visible;

                    svg {
                        width: 55px;
                        height: 55px;
                    }
                }
            }
        }
    }

    .profile-content {
        // padding-left: 20px;
        h2 {
            color: #182B49;
            font-size: 26px;
            margin-bottom: 12px;
        }

        div {
            h5 {
                font-size: 16px;
                color: #404753;
                margin-bottom: 4px;
            }

            p {
                font-size: 14px;
                line-height: 1.8;
                display: flex;
                align-items: center;

                i {
                    color: #84479c;
                    margin-right: 6px;
                }
            }
        }

        @media (min-width: 992px) and (max-width: 1200px) {
            padding-left: 22.5px;
        }

        @media (max-width: 576px) {
            margin-top: 10px;
            h2 {
                font-size: 18px;
            }

            div {
                h5 {
                    font-size: 14px;
                }
            }
        }

    }


    // button {
    //     font-size: 16px;
    //     // color: #fff;
        //         // background: ${colors.gr_bg};
    //     width: 100%;
    //     height: 48px;
    //     font-weight: 500;
    //     border: none;
    //     border-radius: 5px;
    //     text-transform: uppercase;
    //     margin-bottom: 20px;
    //
    //     &:hover {
        //         background: ${colors.gr_bg2};
    //
    //         i {
    //             color: #ffffff;
    //         }
    //     }
    //
    //     @media (max-width: 576px) {
    //         font-size: 15px;
    //         height: 40px;
    //     }
    // }

    .event-box {
        margin-bottom: 15px;

        .event-img {
            .notification_not-img {
                width: 95%;
                height: 95px;
                background-color: #002752;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    color: white;
                    font-size: 25px;
                }
            }
             
            .img-fluid {
                width: 100%;
                height: 100%;
                border-radius: 5px;
                object-fit: cover;
              }
            

            @media (max-width: 991px) {
                display: none;
            }
        }

        .event-content {
            position: relative;
            .content-box {
                box-shadow: 0 0px 20px rgba(0, 0, 0, 0.08);
                padding: 20px;
                background: #ffffff;
                border-radius: 5px;

                .notification_reject {
                    font-size: 14px;
                    color: darkred;
                }

                .notification_accept {
                    font-size: 14px;
                    color: #1c7430;
                }
                
                .event-title {
                    h6 {
                        margin-bottom: 10px;
                        a {
                            color: ${colors.black1};
                            font-weight: 600;

                            &:hover {
                                color: ${colors.green};
                            }
                        }

                        @media (max-width: 576px) {
                            margin-top: 15px;
                        }
                    }
                }

                .event-time-location {
                    margin-bottom: 10px;

                    ul {
                        li {
                            font-size: 13px;
                            color: ${colors.text3};

                            i {
                                font-size: 18px;
                                color: ${colors.green};
                                vertical-align: top;
                            }

                            &:first-child {
                                margin-right: 20px;
                            }
                        }
                    }
                }

                .event-desc {
                    div {
                        display: flex;
                        gap: 20px;
                    }

                    p {
                        font-size: 13px;
                        color: ${colors.text2};
                        line-height: 25px;
                        display: flex;
                        align-items: center;

                        i {
                            color: ${colors.green};
                            margin-right: 6px;
                        }
                    }

                    @media (max-width: 767px) {
                        margin-bottom: 10px;
                    }
                }

                .event-date {
                    position: relative;
                    margin-bottom: 20px;
                    padding-top: 6px;

                    &:before {
                        position: absolute;
                        content: '';
                        background: ${colors.border1};
                        width: 1px;
                        height: 100px;
                        top: 0;
                        left: -30px;

                        @media (max-width: 767px) {
                            content: none;
                        }
                    }

                    p {
                        font-size: 20px;
                        color: ${colors.green};
                        font-weight: 500;
                        text-transform: uppercase;

                        @media (max-width: 767px) {
                            float: left;
                            font-size: 18px;
                            margin-right: 20px;
                        }
                    }

                    @media (max-width: 767px) {
                        margin-bottom: 0;
                        padding-top: 0;
                    }
                }

                .button_notification {
                    display: flex;
                    gap: 10px;
                    justify-content: center;


                    .join-btn {

                        button {
                            font-size: 12px;
                            border: 1px solid ${colors.border3};
                            font-weight: 500;
                            text-transform: uppercase;
                            padding: 9px 12px 7px;
                            border-radius: 5px;
                            height: auto;
                            color: #0c5460;
                            

                            i {
                                font-size: 12px;
                            }

                            &:hover {
                                color: #ffffff;
                                background: ${colors.gr_bg};
                                border-color: ${colors.green};
                            }

                            @media (max-width: 767px) {
                                float: left;
                                padding: 5px 10px 3px;
                            }
                        }

                        .btn_light {
                            background: ${colors.gr_bg};
                            color: white;
                        }
                    }

                    @media (max-width: 991px) {
                        position: unset;
                    }
                }
            }
        }

    }

    .friends-list {
        max-height: 350px;   
        overflow-y: auto;
      }
      
   
      .friends-list::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
      
      .friends-list {
        -ms-overflow-style: none;
        scrollbar-width: none;     
      }

    .graduate-box {
        border-bottom: 1px solid #f3e8e8;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;

        .img-fluid {
            width: 100%;
            height: 100%;
            border-radius: 5px;
            object-fit: cover;
          }

        @media (max-width: 576px) {
            .graduate_img-content {
                display: none;
            }
        }

        .friends_eye {
            display:flex;
            align-items: center;
            justify-content: center;
            gap:10px;
            
            button {
                height: 40px;
                border: 1px solid ${colors.border3};
                background: ${colors.gr_bg};
                padding: 9px 12px;
                border-radius: 5px;
                height: auto;
                display:flex;
                align-items: center;
                justify-content: center;
                color: white;

                p{  
                    margin-top: 0.5px;
                    font-size: 12px;
                    font-weight: 500;
                    text-transform: uppercase;
                }

                i {
                    font-size: 14px;
                }

                &:hover {
                    color: #ffffff;
                    border-color: ${colors.green};
                }
            }

            @media (max-width: 576px) {
                // flex-direction: column; 
                // justify-content: center;  
                // align-items: flex-end;   
                gap: 5px;
                button{
                    width: 40px;  
                    height: 25px;
                    padding: 0;              
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    p{
                        display:none;
                    }

                    i{
                         font-size: 12px;
                         padding:0;
                         margin:0;
                    }
               }
            }
        }
  
        

        .connection_box {
            
            p {
                display: flex;
                align-items: center;

                i {
                    margin-right: 5px;
                    color: #1c7430;
                }
            }

            .connection {
                font-size: 12px;
                border: 1px solid ${colors.border3};
                background: ${colors.gr_bg};
                font-weight: 500;
                text-transform: uppercase;
                padding: 9px 12px 7px;
                border-radius: 5px;
                height: auto;
                color: white;

                i {
                    font-size: 12px;
                }

                &:hover {
                    color: #ffffff;

                    border-color: ${colors.green};
                }

            }
        }

        .content_box {
            display: flex;
            align-items: center;
            gap: 10px;

            .graduate_num {
                font-size: 16px;
                font-weight: bold;
            }
            @media (max-width: 576px) {
                .graduate_num {
                    font-size: 14px;
                    font-weight: bold;
                }
                h4{
                    span{
                        display:none;
                    }
                }
            }

            .graduate_img-box {
                width: 55px;
                height: 55px;
                border-radius: 5px;
                background-color: #0c5460;

                img {
                    width: 100%;
                    border-radius: 5px;
                    height: 100%;
                    object-fit: cover;
                }

            }

            h4 {
                font-size: 16px;
            }
            @media (max-width: 576px) {
                h4 {
                    font-size: 14px;
                }

            }

            .graduate_text-friendName{
                font-size: 16px;
                font-weight: 550;
            }

            @media (max-width: 576px) {
                .graduate_text-friendName {
                  font-size: 14px;
                  font-weight: 500;
                 }

            }

            .graduate_text-lastMessageText{
                max-width: 300px;
                font-size: 14px;
                display:flex;
                align-items: center;
                justify-content: left;
                gap:10px;   
            }

            .graduate_text-lastMessageText-main{
                font-size: 14px;
                height: 21px;
                display: -webkit-box;
                -webkit-line-clamp: 1; 
                -webkit-box-orient: vertical;
                overflow: hidden;               
            }

            @media (max-width: 576px) {
                .graduate_text-lastMessageText-main {
                    font-size: 12px;
                    display: inline-block;
                    max-width: 60%;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                 }

            }

            .graduate_right{
                width:50px;
                position: absolute;
                right: 36.5px;
                display: flex;
                flex-wrap:wrap;
                justify-content: right;
                gap:5px;
                 p{
                    font-size: 10px;
                }
            }

            .graduate_unreadCount {
                width: 20px;
                height: 20px;
                padding: 0;
                margin: 0;
            }
            


            .graduate_unreadCount p { 
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${colors.bg1};
                border-radius: 50%;
                color: #FFF;
                font-size: 12px;
                margin: 0;
                padding: 0;
            }
           
            @media (max-width: 576px) {
                .graduate_unreadCount {
                    width: 17px;
                    height: 17px;
                 }
                 .graduate_unreadCount p{
                    width: 17px;
                height: 17px;
                font-size: 10px;
                   }
            }

            .read-status i{
                font-size:14px;
            }

            .not_img {
                width: 55px;
                height: 55px;
                background-color: #002752;
                border-radius: 5px;
                display: flex;
                align-items: center;
                justify-content: center;

                p {
                    color: white;
                    font-size: 18px;
                }
            }
        }

        button {
            text-transform: capitalize;
            margin: 0;
            padding: 8px 12px;
            height: auto;
            transition: all 0.3s;

            &:hover {
                color: white;
            }
        }
    }

    .notification_header {
        display: flex;
        justify-content: space-between;
        align-items: start;

        select {
            padding: 5px 15px;
        }

        input {
            width: 200px;
            height: 40px;
            background-color: #ffffff;
            font-size: 14px;
            padding: 10px 15px;
            color: ${colors.black1};
            border: 1px solid ${colors.border3};
            border-radius: 5px;

            &::placeholder {
                font-size: 14px;
                font-style: italic;
                color: ${colors.text3};

                @media (max-width: 576px) {
                    font-size: 13px;
                }
            }

            &:focus {
                outline: none;
                box-shadow: none;
                border-color: ${colors.green};
            }
        }

        select {
            width: 200px;
            height: 40px;
            background-color: #ffffff;
            font-size: 14px;
            padding: 10px 15px;
            color: ${colors.black1};
            border: 1px solid ${colors.border3};
            border-radius: 5px;

            &::placeholder {
                font-size: 14px;
                font-style: italic;
                color: ${colors.text3};

                @media (max-width: 576px) {
                    font-size: 13px;
                }
            }

            &:focus {
                border-color: ${colors.green};
            }

            @media (max-width: 576px) {
               width: 150px;
            }

        }

        @media (max-width: 576px) {
            flex-direction: column;
            align-items: flex-start;
         }

    }

    .personal_button {
        width: 100%;
        margin-top: 20px;
        font-size: 12px;
        border: 1px solid ${colors.border3};
        background: ${colors.gr_bg};
        font-weight: 500;
        text-transform: uppercase;
        padding: 9px 12px 7px;
        border-radius: 5px;
        height: auto;
        color: white;

        i {
            font-size: 12px;
        }

        &:hover {
            color: #ffffff;

            border-color: ${colors.green};
        }

        @media (max-width: 767px) {
            margin-top: 50px;
            float: left;
            padding: 5px 0;
        }
    }
    .personal_button-certificate {
        width: 100%;
        font-size: 12px;
        border: 1px solid ${colors.border3};
        background: ${colors.gr_bg};
        font-weight: 500;
        text-transform: uppercase;
        padding: 9px 12px 7px;
        border-radius: 5px;
        height: auto;
        color: white;

        i {
            font-size: 14px;
        }

        &:hover {
            color: #ffffff;

            border-color: ${colors.green};
        }
        
    }

    @media (max-width: 576px) {
        .certificate-iframe {
            display: none;
        }
    }

   

    .personal {
        form.form {
            .form-control {
                padding: 0;
                width: auto;
                height: auto;
                background: transparent;
                border: none;
                margin-bottom: 28px;
                position: relative;

                label {
                    font-size: 14px;
                    color: ${colors.text1};
                    font-weight: 500;

                    @media (max-width: 576px) {
                        font-size: 14px;
                    }
                }

                input {
                    outline: none;
                    box-shadow: none;
                    width: 100%;
                    background-color: #ffffff;
                    font-size: 13px;
                    padding: 8px 12px;
                    color: ${colors.black1};
                    border: 1px solid ${colors.border3};
                    border-radius: 5px;

                    &::placeholder {
                        font-size: 14px;
                        font-style: italic;
                        color: ${colors.text3};

                        @media (max-width: 576px) {
                            font-size: 13px;
                        }
                    }

                    &:focus {
                        border-color: ${colors.green};
                        outline: none;
                        box-shadow: none;
                    }

                    @media (max-width: 576px) {
                        height: 40px;
                    }
                }

                span {
                    color: ${colors.red};
                    font-weight: 300;
                    position: absolute;
                    bottom: -20px;
                    left: 0;
                    visibility: hidden;
                }
            }

            // p.form-control.success {
            //     input {
                //         border: 2px solid ${colors.green};
            //     }
            //
            //     &::before {
            //         position: absolute;
            //         content: " 058 ";
            //         font-family: "Line Awesome Free";
            //         font-size: 24px;
                //         color: ${colors.green};
            //         font-weight: 900;
            //         top: 34px;
            //         right: 10px;
            //     }
            // }

            p.form-control.error {
                input {
                    border: 2px solid ${colors.red};
                    outline: none;
                    box-shadow: none;
                }

                // &::before {
                //     position: absolute;
                //     content: "06a";
                //     font-family: "Line Awesome Free";
                //     font-size: 24px;
                    //     color: ${colors.red};
                //     font-weight: 900;
                //     top: 34px;
                //     right: 10px;
                // }
            }

            p.form-control.error {
                span {
                    visibility: visible;
                }
            }

            button {
                font-size: 16px;
                color: #fff;
                background: ${colors.gr_bg};
                width: 100%;
                height: 48px;
                font-weight: 500;
                border: none;
                border-radius: 5px;
                text-transform: uppercase;
                margin-bottom: 20px;

                &:hover {
                    background: ${colors.gr_bg2};

                    i {
                        color: #ffffff;
                    }
                }

                @media (max-width: 576px) {
                    font-size: 15px;
                    height: 40px;
                }
            }

            .save-forget-password {
                margin-bottom: 15px;

                .save-passowrd {
                    label {
                        font-size: 14px;
                        color: ${colors.text3};
                        display: block;
                        font-weight: 500;
                        margin-bottom: 0;
                        cursor: pointer;

                        input[type=checkbox] {
                            border: 2px solid ${colors.border3};
                            appearance: none;
                            width: 18px;
                            height: 18px;
                            cursor: pointer;
                            margin-right: 6px;
                            position: relative;
                            top: 4px;

                            &:focus {
                                outline: none;
                                box-shadow: none;
                            }

                            &:checked {
                                background-color: ${colors.green};
                                background: ${colors.green} url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 2px 2px no-repeat;
                                border-color: ${colors.green};
                            }
                        }
                    }
                }

                .forget-password {
                    margin-top: 3px;

                    a {
                        font-size: 14px;
                        color: ${colors.green};
                        font-weight: 500;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .not_account-btn {
                border-bottom: 1px solid ${colors.border1};
                margin-bottom: 20px;
                padding-bottom: 20px;

                p {
                    font-size: 14px;
                    color: ${colors.text3};

                    a {
                        font-size: 14px;
                        color: ${colors.green};
                        font-weight: 500;

                        &:hover {
                            text-decoration: underline;
                        }
                    }
                }
            }

            .social-login {
                p {
                    font-size: 14px;
                    color: ${colors.text3};
                    margin-bottom: 15px;
                }

                ul {
                    li {
                        a {
                            font-size: 14px;
                            color: #ffffff;
                            display: inline-block;
                            width: 110px;
                            height: 40px;
                            border-radius: 30px;
                            padding-top: 10px;

                            i {
                                margin-right: 3px;
                            }

                            &:hover {
                                background: ${colors.green} !important;
                            }

                            import {
                                colors
                            }

                            from './../../../components/common/element/elements';

                        }

                        &:nth-child(1) {
                            a {
                                background: #DB4437;
                            }
                        }

                        &:nth-child(2) {
                            a {
                                background: #4267B2;
                            }
                        }

                        &:nth-child(3) {
                            a {
                                background: #1DA1F2;
                            }
                        }
                    }
                }
            }
        }
    }
    
`;