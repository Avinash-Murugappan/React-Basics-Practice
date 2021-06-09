import React from 'react'
import {Button, Card} from 'react-bootstrap'



const card = () => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text style={{color: '#000'}}>
      Some quick text

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
        </div>
    )
}

export default card
