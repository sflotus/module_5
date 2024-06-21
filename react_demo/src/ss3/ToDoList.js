import {Component, useState} from "react";

export function ToDoList() {
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(storageJobs ?? [])
    const handelClick = () => {
        setJobs(prev => {
            const newJobs = [...jobs, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)
            return newJobs
        })
        setJob('')
    }
    const removeElement = i => {
        const newJobs= jobs.filter((e, index) => index !== i)
        setJobs(newJobs)
        const jsonJobs = JSON.stringify(newJobs)
        localStorage.setItem('jobs', jsonJobs)
    }


    return (
        <>
            <input type="text" onChange={event => setJob(event.target.value)}/>
            <button onClick={handelClick}>Add</button>
            {
                jobs.map((e, i) => (
                    <>
                        <br/>
                        <span key={i}>{e}</span>
                        <button onClick={() => removeElement(i)}>Delete</button>
                    </>
                ))
            }
        </>
    )

}