import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";
import { CLUB_BRANCH } from "../../common/constant";
import { actions as ClubThumbnail } from "../../state/club/common/clubThumbnail/index";
import CardComponent from "../component/CardComponent";

export default function Club() {
  const dispatch = useDispatch();
  const thumbnailData = useSelector((state) => state.thumbnailStore.thumbnailData);
  useEffect(() => {
    dispatch(ClubThumbnail.fetchClubThumbnail());
  }, [dispatch]);
  return (
    <StyledMain>
      <InnerMain>{thumbnailData && thumbnailData.map(({ name, image, branch, id }) => <CardComponent key={id} id={id} image={image} name={name} branch={CLUB_BRANCH[branch]} />)}</InnerMain>
    </StyledMain>
  );
}

const StyledMain = styled.main`
  width: 1320px;
  margin: 100px auto 0;
  padding-bottom: 80px;
  display: flex;
  @media (max-width: 1320px) {
    width: 980px;
  }
  @media (max-width: 980px) {
    width: 640px;
  }
  @media (max-width: 640px) {
    width: 300px;
  }
`;
const InnerMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
  gap: 40px;
`;
