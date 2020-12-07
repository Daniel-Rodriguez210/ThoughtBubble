import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import API from "../utils/API";
import {Link,useParams} from 'react-router-dom';
import Button from "../components/Button";
import Jumbotron from 'react-bootstrap/Jumbotron'


function Thoughts() {
    const [thought, setThought] = useState({})
    const { category } = useParams()


    useEffect(() => {
      
        loadBubbles()


    }, [])

function loadBubbles() {
    API.getBubbles()
    .then(res => setThought(res.data))
    .catch(err => console.log(err));
}


    function onDelete(id) {
        API.deleteBubble(id)
        .then(res => loadBubbles())
        .catch(err => console.log(err));

    }



    return (




        thought.length ? (
            <div>
                <Jumbotron className="bubble-board-jumbo">{category}</Jumbotron>
                <Link to ={"/bubbleform/"+category}><Button className="btn btn-primary btn-md add"> + New Bubble</Button></Link>
                <div style={{ display: "flex", flexWrap: "wrap" }}>


                    {thought.filter(unique => unique.category === category).map(book => (


                        <Card key={book._id} className="box-thought">
                            <Card.Img variant="bottom" src={book.url || "https://via.placeholder.com/150/0000FF/808080 ?Text=Digital.com"} className="img-thought" />
                            <Card.Body>
                                <Card.Title>{book.title}</Card.Title>
                                <Card.Text>
                                    {book.caption}
                                </Card.Text>
                            </Card.Body>
                            <span onClick ={() => onDelete(book._id)} className="remove">
                                𝘅
                            </span>
                        </Card>

                    ))}


                </div>
                
                  
                  </div>


            ) : ( 
                    <div>
                    <h3 >No bubbles saved</h3>
                    <Link to ={"/bubbleform/"+category}><Button className="btn btn-primary btn-md"> + New Bubble</Button></Link>
                    </div>



    )



    )}

export default Thoughts;