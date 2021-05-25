import React from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav';
import { useLocation } from 'react-router-dom';


export const StyledBurger = styled.div`
  display: none;
  @media (max-width: 768px) {
    width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  left: 20px;
  z-index: 11;
    cursor: pointer; 
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
 div {
    width: 2rem;
    height: 0.25rem;
    /* background-color: ${({ open }) => open ? '#000' : '#333'}; */
    background-color: ${(props) => props.pathname.match(/^\/home/) ? '#d6d6d6' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Burger = ({ handleClick, isBurgerClick, open, setOpen }) => {
  const { pathname } = useLocation()

  return (
    <>
      <StyledBurger open={open} onClick={handleClick} pathname={pathname}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileNav isBurgerClick={isBurgerClick} open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger;
