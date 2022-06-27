import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Li({ title, itemId, setRoom, active,selected,indexValue,
    onClick, }: { title: string; itemId: string; setRoom: any; active: string; selected?: boolean;
        onClick?: Function;indexValue?:number}) {

    const visibility = React.useContext(VisibilityContext);
    const visible = visibility.isItemVisible(itemId);

    const handleOnClick = (itemId:any) =>{
        setRoom(itemId);
        if(onClick) onClick(visibility,indexValue)
      
    }
    return (
      
        <li  data-value={title} key={itemId} onClick={(itemId) => handleOnClick(itemId)} value={title} className={active === title?'study-child active-room-select': 'study-child'}>{title}</li>
      
    );
}