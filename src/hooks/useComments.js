import { useEffect, useState } from "react"

const useComments = () =>{
    const [comments, setComments] = useState([]);
    useEffect(() =>{
        fetch("coments.json")
        .then(res => res.json())
        .then(data => setComments(data));
    },[])
    return [comments, setComments];
}
 export default useComments;
