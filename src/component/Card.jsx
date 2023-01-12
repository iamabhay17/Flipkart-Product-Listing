import React from "react";
import styled from "styled-components";

const Card = ({ product }) => {
  return (
    <Wrapper>
      <div className="card-div">
        <img src={product.coverSrc} variant="top" />
        <div className="card-info">
          <div className="brand-name">{product.brand}</div>
          <div className="product-info">
            <span className="title">{product.title.slice(0, 19)}...</span>
            <span className="assured-icon">
              <img
                src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                alt="icon"
              />
            </span>
          </div>
          <div className="price-info">
            <span className="curr-price">₹{product.price}</span>
            <span className="org-price">
              ₹{(product.price * 1.4).toFixed(2)}
            </span>
            <span className="discount">
              {(
                ((1.4 * product.price - product.price) / product.price) *
                100
              ).toFixed(2)}
              % off
            </span>
          </div>
          <div className="subtext">Free delivery</div>
          <div className="size">
            Size <span>{product.size}</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  .card-div {
    background-color: #fff;
    width: 90%;
    height: 50vh;
    margin: 1rem;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    img {
      width: 18vw;
      height: 30vh;
      object-fit: cover;
    }
    .card-info {
      padding: 1rem;
      .brand-name {
        color: #9c9c9c;
        font-size: 0.9rem;
        font-weight: bold;
      }
      .product-info {
        .title {
          color: #3e3e3e;
          margin-right: 5px;
          font-size: 0.9rem;
        }
        .assured-icon {
          img {
            height: 15px;
            width: auto;
          }
        }
      }
      .price-info {
        .curr-price {
          font-weight: bold;
          margin-right: 0.4rem;
        }
        .org-price {
          color: #9c9c9c;
          font-size: 0.9rem;
          text-decoration: line-through;
          font-weight: bold;
          margin-right: 0.6rem;
        }
        .discount {
          font-size: 0.8rem;
          color: #2ca746;
          font-weight: bold;
        }
      }
      .subtext {
        color: #2ca746;
        font-weight: bold;
        font-size: 0.8rem;
      }
      .size {
        font-size: 0.9rem;
        span {
          font-size: 1rem;
          font-weight: bold;
        }
      }
    }
  }
`;
