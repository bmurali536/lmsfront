import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Card from "./Card";

function GetStudent(){
    let [empdata,setEmpData] = useState([]);
    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/getemployee/').then((resp)=>{
            setEmpData(resp.data);
        }).catch((err)=>{
            console.log(err);
        });

    },[])
    return(
        <div>
            {
                empdata.map((obj)=>{
                    return <Card image={obj.profile_pic} name={obj.empname} salary={obj.salary} empno={obj.empno}/>
                })
            }
        </div>
    );
}
export default GetStudent;