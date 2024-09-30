import axios from "axios";
import { useState } from "react";
function PostStudent(){
    let [eno,setEno] = useState(0);
    let [ename,setEname] = useState('');
    let [esal,setEsal] = useState(0);
    let [image,setImage] = useState('');
    let [msg,setMsg] = useState('');
    let handlesubmit=(even)=>{
        even.preventDefault();
 
        let empdata ={
            "empno":eno,
            "empname":ename,
            "salary":esal,
            "department":1,
            "profile_pic":image
        }
        let post_url = 'http://127.0.0.1:8000/api/getemployee/'
        axios.post(post_url,empdata,{'headers':{
            'Content-Type':'multipart/form-data'
        }}).then((resp)=>{
            console.log(resp);
            setMsg('Data inserted successfully');
        }).catch((err)=>{
            console.log(err);
            setMsg('Data is failed to insert');
        })
    }
    return(
        <div className="postemployee">
            <form onSubmit={handlesubmit}>
                <label>
                    Employee Number:
                    <input type="text" onChange={(event)=>setEno(event.target.value)}/>
                </label><br/><br/>
                <label>
                    Employee Name:
                    <input type="text" onChange={(event)=>setEname(event.target.value)}/>
                </label><br/><br/>
                <label>
                    Employee Salary:
                    <input type="text" onChange={(event)=>setEsal(event.target.value)}/>
                </label><br/><br/>
                <label>
                    Employee image:
                    <input type="file" onChange={(event)=>setImage(event.target.files[0])}/>
                </label><br/><br/>
                <input type="submit"/>
            </form>
            <p>{msg}</p>
        </div>
    );
}
export default PostStudent;