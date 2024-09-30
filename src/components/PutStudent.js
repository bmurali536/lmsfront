

function PutStudent(props){
    return(
        <div className="putstudent">
             <form>
                <label>
                    Student n0 
                    <input type="text" value={props.stdno}/>    
                    
                </label> <br></br>
                <label>
                    Student name
                    <input type="text" value={props.stdname}/>    
                    
                </label> <br></br>
                <label>
                    Student Class
                    <input type="text" value={props.stdClass}/>    
                    
                </label> <br></br>

             </form>

        </div>
    )
}
export default PutStudent;