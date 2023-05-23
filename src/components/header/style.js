import styled from "styled-components";

export const HeaderStyle = styled.div`
  /* background-color: red; */
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.3);
  z-index: 1;
`;

export const StyledNav = styled.nav`
  height: inherit;
  display: flex;
  align-items: center;
  padding-left: 64px;
  padding-right: 64px;
  max-width: 1200px;
  margin: 0 auto;
  img {
    width: 44px;
  }
  a:first-child {
    margin-right: auto;
  }
  a:not(:first-child) {
    color: rgb(${({ theme }) => theme.colors.$purple_rgb});
    margin-right: 7px;
    padding-right: 7px;
    border-right: 1px solid;
  }
  @media (max-width: ${({ theme }) => theme.windowSize.small}) {
    padding-left: 34px;
    padding-right: 34px;
  }
`;

export const StyledLink = styled.a`
  font-size: 20px;
  font-weight: bold;
  color: rgb(${({ theme }) => theme.colors.$purple_rgb});
  &:hover {
    color: rgba(${({ theme }) => theme.colors.$purple_rgb}, 0.6);
  }
  `;