import React from 'react'




const logic2 = (props) => {
    console.log(props.info);
   let  itr = props.info.idData
    console.log(itr);
    return (

        <div>
             University Name:
           {itr.map((u, index) => (
          <div key={u.id}>
            <h3>{u.University_Name}</h3>
            <p>{u.Graduation_Year<=2020 ? 'You are millennial' : 'Go get a Cerelac'}</p>
          </div>
        ))}
        </div>
    )
}

export default logic2
