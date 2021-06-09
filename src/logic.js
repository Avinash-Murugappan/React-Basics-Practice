import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Logicz from './logic2'

 const data =[
   {
    "University_Name": "California State University, Fullerton",
    "Specialization": "Computer Science",
    "Graduation_Year": 2020,
    "Employer": "Rural Broadband LLC",
    "Job_Title": "Network Engineer",
    "Job_Start_Date": "11/1/2020",
    "Career_Url": "https://www.airlinkrb.com/"
  },
  {
    "University_Name": "Arizona State University, Fullerton",
    "Specialization": "Computer Science",
    "Graduation_Year": 2021,
    "Employer": "Rural Broadband LLC",
    "Job_Title": "Network Engineer",
    "Job_Start_Date": "11/1/2020",
    "Career_Url": "https://www.airlinkrb.com/"
  }

]


let idData = data.map((j)=>{
return {...j, id:uuidv4() }
})


const logic = () => {
    return (
        <div>
           <Logicz  info = {{idData}}/>
        </div>
    )
}

export default logic
