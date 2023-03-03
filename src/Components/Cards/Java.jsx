import React, { useState } from 'react'
// import Mina from "../../assets/images/Mina.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Java = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Java</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src='' />
                            <HeaderText>Java</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Experience</BodyHeader>
                            <BodyText>The Java language was used throughout the 1st to 3rd year of study period at the UAS 
                                studies. With Java, I'm a pretty confident coder, 
                                because I've done and experimented a lot with it. I have programmed many functioning algorithms and programs with it.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Java