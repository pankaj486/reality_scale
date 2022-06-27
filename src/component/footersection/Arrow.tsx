import React from "react";

import arrowLeft from "../../assets/image/arrow-left.png";
import arrowRight from "../../assets/image/arrow-right.png";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function LeftArrow() {
  const {
    // getItemById,
    getPrevItem,
    scrollToItem,
  } = React.useContext(VisibilityContext);

  const leftclickHandler = () => {
    const prevItem = getPrevItem();
    scrollToItem(prevItem?.entry?.target, "smooth", "start");
  };

  return (
    <button

      onClick={leftclickHandler}
      // className="middle-class-button-left"
      style={{
        position: 'absolute',
        top: '50%',
        left: '16px',
        transform: `translate( -50%, -50%)`,
        background: 'none',
        border: '0'
      }}
    >
      <img src={arrowLeft} />
    </button>

  );
}

export function RightArrow() {
  const {
    // getItemById,
    getNextItem,
    scrollToItem,
  } = React.useContext(VisibilityContext);

  const clickHandler = () => {
    const nextItem = getNextItem();
    scrollToItem(nextItem?.entry?.target, "smooth", "end");
  };

  return (
    <button

      onClick={clickHandler}
      // className="middle-class-button-right"
      style={{
        position: 'absolute',
        top: '50%',
        right: '2px',
        transform: `translate( -50%, -50%)`,
        background: 'none',
        border: '0'
      }}
    >
      <img src={arrowRight} />
    </button>
  );
}