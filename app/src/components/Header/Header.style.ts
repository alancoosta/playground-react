import styled, { keyframes } from "styled-components";

const appearAnimation = keyframes`
  from {
    transform: translateX(100%);
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const Container = styled.header`
  animation: ${appearAnimation} 2s;
  height: 100px;
  width: 100%;

  .header--box {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    margin: 0 auto;
    padding: 0 24px;
  }

  .header--wrapper {
    align-items: baseline;
    display: flex;
  }

  .header--logoLink {
    height: auto;
    width: 210px;

    > svg {
      fill: #ffffff;
      height: auto;
      width: 100%;
    }
  }

  .header--nav {
    display: none;

    > ul {
      display: flex;

      > li {
        margin-right: 12px;
        position: relative;

        > a {
          color: #ffffff;
          text-transform: uppercase;

          ::after {
            background: #ffffff;
            bottom: 0;
            content: "";
            height: 1px;
            left: 0;
            position: absolute;
            transform-origin: right center;
            transform: scaleX(0);
            transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
            width: 100%;
          }

          :hover {
            ::after {
              transform-origin: left center;
              transform: scaleX(1);
              transition-duration: 0.4s;
            }
          }
        }
      }
    }
  }

  .header--badge {
    border-radius: 4px;
    padding: 4px 8px;

    &.light {
      background-color: greenyellow;
    }

    &.plus {
      background-color: blueviolet;
    }

    &.vip {
      background-color: goldenrod;
    }
  }

  @media (min-width: 961px) {
    .header--box {
      justify-content: left;
      max-width: 1400px;
    }

    .header--nav {
      display: flex;
    }
  }
`;
