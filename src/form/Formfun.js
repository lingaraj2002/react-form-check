import { useState } from "react"
import './Formfun.css';

let arrtask=[];
const Formfun = () => {
    const [name,setName]=useState('')
    const[description,setDescription]=useState('')
    const[check,setCheck]=useState(false)

    let changevalues=(e)=>{
        {e.target.name === 'name' ? setName(e.target.value):setDescription(e.target.value)}
    }

    let checkedchange=()=>{
        setCheck(!check)
    }

    let submiting=(e)=>{
        e.preventDefault()
        // console.log(name,description);
        // e.target.value='';
        // console.log(e);
        // console.log(task);
        setName("");
        setDescription("");
      
        
   let  task={
        name:name,
        description:description,
        iscomplete:check
    }

    arrtask.push(task);
    }
  return (
    <div>
      <div className='form-container'>
        <form onSubmit={submiting}>
            <input
                type={'text'}
                value={name}
                name={'name'}
                placeholder={'task name'}
                onChange={changevalues}
            /><br/><br/>
            <input
                type={'text'}
                value={description}
                name={'descripton'}
                placeholder={'description'}
                onChange={(e)=>changevalues(e)}
            /><br/><br/>
            <label><input
            name={"output"}
                    type={'checkbox'}
                      checked={check}
                    onChange={checkedchange} />Completed
            </label><br/><br/>
            <input
                type={'submit'}
            />
        </form>
            <div>
                <table>
                     <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Completed or Not</th>
                    </tr>
                {arrtask.map((e,i)=>{
                  return <tr key={i}>
                        <td>{e.name}</td>
                        <td>{e.description}</td>
                        {/* <td>{e.iscomplate? "true":"false"} */}<td>
                            <input
                            name={"output"}
                            type={"checkbox"}
                            checked={e.iscomplete}
                            />
                        </td>
                    </tr>
                    
                     }
                )}                 
                </table>                 
                  
               
            </div>
      </div>
    </div>
  )
}

export default Formfun
