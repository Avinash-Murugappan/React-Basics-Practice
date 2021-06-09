import './App.css';
import React, {useState} from 'react'
import Card from './card'
import { v4 as uuidv4 } from 'uuid';
import Logic from './logic'
import Btn from './Button'
import ImagesSlider from './components/ImageSlider'
import { SliderData } from './components/SliderData';

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
console.log(idData);



function App() {


  return (
    <div className="App">
      <header className="App-header">
      <h1>Image Carousal</h1>
      <ImagesSlider slides={SliderData} />
      <div className="info">
        <h1>Avinash</h1>
        <p>
        Hi, I love coding.
        </p>
        <br />
          {/* University Name:
           {data.map((u, index) => (
          <div key={index}>
            <h3>{u.University_Name}</h3>
            <p>{u.Graduation_Year<=2020 ? 'You are millennial' : 'Go get a Cerelac'}</p>
          </div>
        ))} */}
        <br/>
       <Logic/>
        <br/>
        <Btn/>
      <br/>
      </div>
      {/* <Card/> */}
      </header>
    </div>
  );
}

export default App;
