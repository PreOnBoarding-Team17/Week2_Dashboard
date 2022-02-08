import React from 'react';
import { CardProps } from 'Utils/Interface';
import { CARD_ELEMENTS } from 'Utils/Constants';
import 'Components/Common/Card/scss/Card.scss';
import Button from '../Button';

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    title,
    client,
    due,
    count,
    docs,
    amount,
    method,
    material,
    status,
  } = data;

  const CONSULTINGSTATUS: boolean = status === '상담중' ? true : false;
  const cardElementsData: (number | string[] | undefined)[] =
    count !== undefined
      ? [count, amount, method, material]
      : [docs, amount, method, material];

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card__header">
          <div className="card__header--title">
            {title}
            {CONSULTINGSTATUS && (
              <div className="card__header--title-active">상담중</div>
            )}
          </div>
          <div className="card__header--client">{client}</div>
          <div className="card__header--due">{due + '까지 납기'}</div>
        </div>

        <div className="card__elements">
          {cardElementsData.map((element, index) => (
            <div key={index} className="card__elements--content">
              <div className="card__elements--content-element">
                {CARD_ELEMENTS[index]}
              </div>
              <div className="card__elements--content-data">
                {typeof element === 'number'
                  ? `${element}개`
                  : element?.join(',')}
              </div>
            </div>
          ))}
        </div>

        <div className="card__btn">
          <Button color="blue" text="요청 내역 보기" />
          <Button color="white" text="채팅 하기" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
