import React from 'react';
import 'Components/Common/Card/scss/Card.scss';
import { CARDLIST_ELEMENT } from 'Utils/Constants';
import { CardProps } from 'Utils/Interface';

const STATUSTRUE = '상담중';

const Card: React.FC<CardProps> = ({ data }) => {
  const { title, client, due, count, amount, method, material, status } = data;
  const cardElementDatas = [count, amount, method, material];

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card__header">
          <div className="card__header--title">
            {title}
            {status === STATUSTRUE && (
              <div className="card__header--title-active">상담중</div>
            )}
          </div>
          <div className="card__header--client">{client}</div>
          <div className="card__header--due">{due + '까지 납기'}</div>
        </div>
        <div className="card__elements">
          {CARDLIST_ELEMENT.map((element, index) => (
            <div key={index} className="card__elements--content">
              <div className="card__elements--content-element">{element}</div>
              <div className="card__elements--content-data">
                {cardElementDatas[index]} {typeof cardElementDatas[index]}
              </div>
            </div>
          ))}
        </div>
        <div className="card__btn">
          <button className="card__btn--watch">요청 내역 보기</button>
          <button className="card__btn--chatting">채팅 하기</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
