import styled from "styled-components";
import { colors } from "../common/element/elements";

export const Styles = styled.div`
  .chatToggle__title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    border-bottom: 1px solid #e0e0e0;
  }

  .chatToggle__left {
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    padding: 0;

    i {
      width: 22px;
      height: 25px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      transition: 0.3s ease;
      cursor: pointer;

      &:hover {
        background-color: ${colors.bg1};
        color: #fff;
      }
    }
  }

  .chatToggle__right {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    span {
      font-weight: 550;
    }
  }

  .chatToggle__title-main {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${colors.bg1};
    color: #fff;

    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .chatToggle-chat {
    padding: 0 10px;
    position: relative;
    background: #f8f8f8;
    width: 100%;
    height: calc(100vh - 60px);
  }

  .chatToggle-chat-main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 100px);
    overflow-y: auto;
    padding: 10px;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .chat-message { 
    max-width: 75%;
    min-width: 95px;
    position: relative;
    padding: 6px 8px 10px 7px;
    border-radius: 12px;
    margin-bottom: 6px;
    font-size: 14px;
    word-break: break-word;
    white-space: pre-wrap;
  }

  .chat-message.self { 
    align-self: flex-end;
    background-color: #d1f0ff;
    border-radius: 12px 12px 0 12px;
  
    &:hover .chat-actions {
      opacity: 1;
    }
  }
  
  .chat-message.other { 
    align-self: flex-start;
    background-color: #f0f0f0;
    border-radius: 12px 12px 12px 0;
  }
  

  .chat-message-content {
    font-size: 14px;

    input {
      width: 100%;
      border: none;
      background: none;
      outline: none;
    }
  }

  .chat-message-meta {
    font-size: 10px;
    margin-top: 5px;
    color: gray;
    display: flex;
    align-items: center;
    gap: 6px;

    small{
      position: absolute;
      bottom: 2px;
      right:8px;
    }
  }

  .chat-actions {
    display: flex;
    align-items: center;
    gap: 4px;
    opacity: 0;
    transition: 0.2s ease;
    position: absolute;
    bottom: -8px;
    left:-32px;
  }

  .chat-actions button {
    background: none;
    border: none;
    cursor: pointer;
    color: gray;
    padding: 0;

    i {
      font-size: 14px;
    }

    &:hover {
      color: #000;
    }
  }

  .chatToggle-chat-footer {
    width:100%;
    height: 40px;
    display: flex;
    align-items: center;
    gap: 7px;
    position: absolute;
    bottom: 0;
    left: 0;
    
    padding: 10px 20px 0 15px;
    background: #fff;
    border-top: 1px solid #ddd;

    input {
      width: 100%;
      border: none;
      background: none;
      outline: none;
    }

    button {
      padding: 0;
      background: none;
      border: none;

      i {
        font-size: 20px;
        color:#999;
      transition: 0.3s ease;
        &:hover{
          color:#000
        }
      }
    }
  }
`;
