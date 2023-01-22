import React from "react";

type Props = {
    children?: React.ReactNode,
};

const Wrapper = ({children} : Props) => {
    return (
        <>{children}</>
    )
}

export default Wrapper