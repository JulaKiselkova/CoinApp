import { useState, useCallback, memo } from "react";
import HeaderView from "./HeaderView";


interface Props {
    modalHeaderIsActive: boolean;
}


const HeaderContainer = () => {
    const mes = "hello";
    const[modalHeaderIsActive, setModalHeaderIsActive] = useState<boolean>(true);
    return (
        <HeaderView modalHeaderIsActive={modalHeaderIsActive}/>
    
    //   <BubbleView
    //     arraySize={arraySize}
    //     //speed={speed}
    //   />

  );
}

export default memo(HeaderContainer);