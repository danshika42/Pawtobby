import { useState } from "react";

export const useChangevalue=(initialval)=>{
    const [value,changevalue]=useState(initialval);
    const handleChange=(e)=>{
        changevalue(e.target.value);
    }
    const reset=()=>{
        changevalue("");
    }
    return [value,handleChange,reset];
}