import React from 'react';
import styled from 'styled-components';
import MobileNav from './MobileNav';

export const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 35px;
  left: 20px;
  z-index: 990;
  display: none;
  @media (max-width: 625px) {
    cursor: pointer; 
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

 div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
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
  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <MobileNav isBurgerClick={isBurgerClick} open={open} setOpen={setOpen} />
    </>
  )
}

export default Burger;