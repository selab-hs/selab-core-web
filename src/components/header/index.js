import React, { useState, useEffect, useCallback,useRef } from "react";
import styled from "styled-components";
import useIsLogIn from "../../auth/hooks/useIsLogIn";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../auth/state";
import { removeLocalStorageItem } from "../../common/util/usingLocalStorage";
import { USER_ROLE } from "../../common/constant";
import CreateNewClubModal from "../../adminPage/CreateNewClubModal";
import ChangeAuthor from "../../adminPage/ChangeAuthor";
import {AiOutlineMenu} from 'react-icons/ai'
import BoardMenu from '../BoardMenu'
import {HeaderStyle, StyledNav, StyledLink} from './style'

export default function Header() {
  const dispatch = useDispatch();
  const location = useLocation()
  const isLogIn = useIsLogIn();
  const userRole = useSelector((state) => state.auth.role);
  const clubId = useRef()
  const [isClubPage, setIsClubPage] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false);
  const [showChangeAuthor, setShowChangeAuthor] = useState(false);
  
  useEffect(() => {
    const path = location.pathname
    path.startsWith('/club') ? setIsClubPage(true) : setIsClubPage(false)
    clubId.current = path.split('/').filter((el, idx) => idx===2)[0]
  }, [location, clubId])
  
  const showModal = () => {
    setVisible(true);
  };

  const handleShowChangeAuthor = () => {
    setShowChangeAuthor(true);
  };

  const handleLogout = () => {
    removeLocalStorageItem("x-auth");
    removeLocalStorageItem("nickname");
    removeLocalStorageItem("role");
    removeLocalStorageItem("clubName");
    dispatch(actions.setLogout());
  };

  const onMenuClick = useCallback(() => setIsMenuOpen((prevVal) =>!prevVal), [])

  return (
    <HeaderStyle>
      {isMenuOpen && <BoardMenu clubId={clubId.current} />}
        {isClubPage && <AiOutlineMenu onClick={onMenuClick} size="30" />}
      <StyledNav>
        <StyledLink to="/" style={{ fontSize: "20px" }}>
          Oing
        </StyledLink>
        {isLogIn && (
          <>
            {userRole === USER_ROLE.ADMIN && (
              <>
                <Link to="/" onClick={showModal}>
                  동아리 생성하기
                </Link>
                <Link to="/" onClick={handleShowChangeAuthor}>
                  권한 변경하기
                </Link>
                <CreateNewClubModal visible={visible} setVisible={setVisible} />
                <ChangeAuthor visible={showChangeAuthor} setVisible={setShowChangeAuthor} />
              </>
            )}
            <Link to="/" onClick={handleLogout}>
              로그아웃
            </Link>
          </>
        )}
        {!isLogIn && (
          <>
            <Link to="/login">로그인</Link>
            <Link to="/signup">회원가입</Link>
          </>
        )}
      </StyledNav>
    </HeaderStyle>
  );
}
