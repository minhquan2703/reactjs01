import React, { useState } from 'react';
// import './MyList.scss';

const MyList = () =>{

    const [tasks, setTask] = useState([]);

    const [form,setForm] = useState({
        name:``,
        date: ``,
        desc: ``,
        status:`Pending`
    })
    
    const [nextId, setNextId] = useState(1);

    const handleOnSubmit = (event)=>{
        event.preventDefault()
        setForm({
            id: nextId,
            name: form.name,
            date: form.date,
            desc: form.desc,
            status: form.status
        })

        setTask([form,...tasks])

        setNextId(nextId+1);

    };

    const handleOnChangeName = (event) =>{
        setForm({
            ...form,
            name: event.target.value
        })
    }

    const handleOnChangeDesc = (event) => {
        setForm({
            ...form,
            desc: event.target.value
        })
    }

    const handleOnChangeDate = (event) =>{
        setForm({
            ...form,
            date: event.target.value
        })
    }

    const handleOnChangeStatus = (event) =>{
        setForm({
            ...form,
            status: event.target.value
        })
    }

    return (

        <div className='myList'>
            <p className='text'>This is Todo List</p>
            <form onSubmit={(event)=>handleOnSubmit(event)}>
                <label>Task name: </label>
                <input 
                    value={form.name}
                    type = "text"
                    onChange={(event)=>handleOnChangeName(event)}
                />
                <label>Deadline: </label>
                <input
                    value={form.date}
                    type="date"
                    onChange={(event)=> handleOnChangeDate(event)}
                /><br/>
                <label>Description: </label>
                <textarea
                    value={form.desc}
                    onChange={(event)=> handleOnChangeDesc(event)}
                    rows="4"
                    cols="50"
                ></textarea>
                <select name="status" 
                value={form.status}
                onChange={(event) => handleOnChangeStatus(event)}>

                    <option value="Pending">Pending</option>
                    <option value="Doing">Doing</option>
                    <option value="Done">Done</option>
                </select>
                <br/>
                <button>Add to list</button>    
            </form><br/>
            {tasks.map((task) => {
                return(
                    
                    <div key ={task.id}>
                        <hr/>
                        <div>Task name: {task.name}</div>
                        <div>Date submit: {task.date}</div>
                        <div>Description: {task.desc}</div>
                        <div>Status: {task.status}</div>
                    </div>
                )}
            )}

        </div>
    )
}

// const MyList = () =>{
//     const [tasks,setTasks] = useState([]);

//     const [nextId, setNextId] = useState(1);

//     const [form, setForm] = useState([{

//     }])

//     return(

//     )
// }

export default MyList

