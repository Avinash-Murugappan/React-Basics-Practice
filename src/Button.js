import React, {useState} from 'react'


const Button = () => {
      const [topic, settopic] = useState(null)

  const update = ()=>{
    settopic("Hello");
  }
    return (
        <div>
            <p>{topic}</p>
            <button onClick={update}>Click me!</button>
        </div>
    )
}

export default Button
