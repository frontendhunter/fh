import React, {Suspense} from "react";
import Preloader from "../common/Preloader";


export function WithSuspense <WCP>(WrappedComponent:React.ComponentType<WCP>)  {
    return (props:WCP) => {
        return <Suspense fallback={<Preloader/>}>
             <WrappedComponent{...props}/>
        </Suspense>
    }
}