import React, { useRef } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export default function CardComponent({ id, name, image, branch }) {
  const cardRef = useRef();
  const history = useHistory();
  const handleClick = () => {
    history.push(`club/${cardRef.current.id}`);
  };

  return (
    <Card onClick={handleClick} ref={cardRef} id={id}>
      <ImgContainer>
        <img src={image} alt={name} />
      </ImgContainer>
      <ClubDes>
        <span>{branch}</span>
        <span>{name}</span>
      </ClubDes>
    </Card>
  );
}

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  box-sizing: border-box;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transition: 0.5s;

  img {
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const ImgContainer = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  img {
    border-radius: 8px 8px 0 0;
  }
`;
const ClubDes = styled.div`
  height: 20%;
  display: flex;
  flex-direction: column;
  span {
    height: 50%;
    padding: 5px 10px;
  }
  span:first-child {
    border-bottom: 1px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.2);
  }
`;
