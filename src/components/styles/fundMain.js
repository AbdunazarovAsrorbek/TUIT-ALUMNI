import styled from "styled-components";
import { colors } from "../common/element/elements.js";

export const Styles = styled.div`
  .fundMain-us {
    padding: 80px 0;
    background: linear-gradient(180deg, #f6f9ff 0%, #ffffff 100%);

    .fund-header {
      text-align: center;
      margin-bottom: 50px;

      h2 {
        color: ${colors.black1};
        font-weight: 700;
        font-size: 28px;
        margin-bottom: 10px;
      }

      .quote {
        font-style: italic;
        color: ${colors.text3};
        margin-bottom: 10px;
      }

      .desc {
        color: ${colors.text2};
        max-width: 750px;
        margin: 0 auto;
        line-height: 1.6;
      }
    }

    .feature-card {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 18px;
      border-radius: 12px;
      background: rgba(255,255,255,0.7);
      backdrop-filter: blur(10px);
      border: 1px solid ${colors.border1};
      margin-bottom: 20px;
      transition: all 0.3s ease;

      span {
        min-width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${colors.gr_bg};
        color: #fff;
        border-radius: 50%;
        font-size: 14px;
      }

      p {
        margin: 0;
        font-size: 14px;
        color: ${colors.black1};
        line-height: 1.5;
      }

      &:hover {
        transform: translateY(-6px) scale(1.02);
        box-shadow: 0 15px 30px rgba(0,0,0,0.08);
      }
    }

    .info-card {
      margin-top: 40px;
      padding: 25px;
      border-radius: 15px;
      background: ${colors.gr_bg};
      color: #fff;
      text-align: center;

      h4 {
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
      }
    }

    /* 💳 DONATION CARDS */
    .donation-card {
      padding: 25px;
      border-radius: 15px;
      background: #fff;
      position: relative;
      overflow: hidden;
      transition: 0.3s;
      border: 1px solid ${colors.border1};

    //   &::before {
    //     content: "";
    //     position: absolute;
    //     inset: 0;
    //     border-radius: 15px;
    //     padding: 1px;
    //     background: ${colors.gr_bg};
    //     -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    //     -webkit-mask-composite: xor;
    //     mask-composite: exclude;
    //   }

      h5 {
        margin-bottom: 15px;
        color: ${colors.black1};
        font-weight: 600;
      }

      ul {
        padding-left: 18px;

        li {
          font-size: 14px;
          margin-bottom: 8px;
          color: ${colors.text2};
          line-height: 1.5;
        }
      }

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.08);
      }
    }

  .fund-btn {
    margin-top: 20px;
    width: 100%;
    background: ${colors.gr_bg};
    color: #fff;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 18px;
    font-weight: 700;

    &:hover{
      background: ${colors.gr_bg2};
           transform: translateY(-5px);
        box-shadow: 0 12px 25px rgba(0,0,0,0.08);
      }


      @media(max-width: 768px) {
margin-bottom: 20px;
padding: 15px 0;
}
    }


.left-col {
  display: flex;
  flex-direction: column;
}

.left-col .donation-card {
  /* card o'z heightida qoladi */
}

.left-col .fund-btn {
  flex: 1; /* qolgan joyni to‘liq egallaydi */
  display: flex;
  align-items: center;
  justify-content: center;
}

    .fund-modal{
      position: fixed;  
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      padding: 0 15px;
    }
    
    
.modal-row{
  width: 100%;
  max-width: 400px;
  height: 70vh;
  display: flex;           
  flex-direction: column;  
  gap:20px;
  background: #fff;
  padding: 40px 30px 30px;
  border-radius: 12px;
  position: relative;
  overflow-y: auto; 
  scrollbar-width: none;       
  -ms-overflow-style: none; 
   &::-webkit-scrollbar { 
    display: none;
  }    
}

.modal-col{
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 15px;
  border-radius: 12px;  

  p{
    flex: 1;
    font-size: 15px;
  }

  img{
    width: 120px;
    height: auto;
    border-radius: 12px;
  }
}

.modal-col p:empty {
  display: none;
}

.modal-close-btn{
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;   
  border: none;
  color: #fff;
  background: ${colors.gr_bg};
  border-radius: 8px;
  font-size: 22px;
  cursor: pointer;
  display: flex;  
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;

  &:hover{
    background: ${colors.gr_bg2}; 
    }
  &:active{
    transform: scale(0.95);
   }
  }
}
`;

