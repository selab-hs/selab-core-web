import { Input, Modal, Menu, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actions as adminClub } from "../state/club/admin";
import { CLUB_BRANCH } from "../common/constant";
import { DownOutlined } from "@ant-design/icons";
import ImageUploading from "react-images-uploading";
import { verifyClubData } from "./util/verifyClubData";
import { useHistory } from "react-router";
import { actions as thumbnailStore } from "../state/club/common/clubThumbnail";

const CreateNewClubModal = ({ visible, setVisible }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [clubName, setClubName] = useState("");
  const [clubImage, setClubImage] = useState([]);
  const [clubBranch, setClubBranch] = useState("");
  const [dropName, setDropName] = useState("분과를 선택해주세요");
  const isCreated = useSelector((state) => state.adminClub.isCreated);

  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (isCreated) {
      dispatch(thumbnailStore.fetchClubThumbnail());
    }
  }, [isCreated, dispatch, history]);
  const onDropItemClick = (e) => {
    setDropName(CLUB_BRANCH[e.key]);
    setClubBranch(e.key);
  };
  const menu = (
    <Menu>
      {Object.keys(CLUB_BRANCH).map((itemKey) => (
        <Menu.Item onClick={onDropItemClick} key={itemKey}>
          {CLUB_BRANCH[itemKey]}
        </Menu.Item>
      ))}
    </Menu>
  );
  const handleOk = () => {
    const verifyData = verifyClubData(clubName, clubBranch, clubImage);
    if (!verifyData) {
      return;
    }
    setConfirmLoading(true);
    dispatch(adminClub.fetchCreateClub({ clubName, clubImage: clubImage[0].data_url, clubBranch }));
    setClubName("");
    setClubImage([]);
    setClubBranch("");
    setDropName("분과를 선택해 주세요");
    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    });
  };

  const handleCancel = () => {
    setClubName("");
    setClubImage([]);
    setClubBranch("");
    setDropName("분과를 선택해 주세요");
    setVisible(false);
  };

  const handleClubName = (e) => {
    setClubName(e.target.value);
  };

  const handleClubImg = (imageList) => {
    setClubImage(imageList);
  };

  return (
    <Modal title="동아리 생성하기" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <ModalInner>
        <StyledInput placeholder="동아리 이름을 입력해 주세요" value={clubName} onChange={handleClubName} />
        <StyledDripDown overlay={menu}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()} href="/">
            {dropName} <DownOutlined />
          </a>
        </StyledDripDown>
        <ImageUploading value={clubImage} onChange={handleClubImg} dataURLKey="data_url">
          {({ imageList, onImageUpload }) => (
            <div className="upload__image-wrapper">
              <StyledImgBtn onClick={onImageUpload}>썸네일을 업로드하세요!</StyledImgBtn>
              (권장 사이즈는 300 x 240입니다)
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper"></div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </ModalInner>
    </Modal>
  );
};

const ModalInner = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledInput = styled(Input)`
  margin: 10px 0;
`;
const StyledDripDown = styled(Dropdown)`
  margin: 10px 0;
`;
const StyledImgBtn = styled.button`
  outline: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  background-color: white;
  border: none;
  cursor: pointer;
  margin: 10px 10px 10px 0;
  &:hover {
    background-color: rgba(190, 190, 190);
  }
`;
export default CreateNewClubModal;
