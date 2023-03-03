import React, { useState } from 'react'
import Mina from "../../Assets/Images/minakuva.JPG"
import { BodyHeader, BodyText, Card, CardBack, CardBody, CardContent, CardFace_front, CardHeader, CardImg, CardInner, CardName, HeaderText } from './Style/card.style'

const Profile = () => {

    const [flipped, isFlipped] = useState(false);


  return (
    <>
        <Card>
            <CardInner onClick={()=> isFlipped(!flipped)} className={flipped ? "is-flipped" : ""}>
                <CardFace_front>
                    <CardName>Creator</CardName>
                </CardFace_front>
                <CardBack>
                    <CardContent>
                        <CardHeader>
                            <CardImg src={Mina} />
                            <HeaderText>Joni Laakkonen</HeaderText>
                        </CardHeader>
                        <CardBody>
                            <BodyHeader>Programmer/Developer</BodyHeader>
                            <BodyText>I am an enthusiastic and learning young programmer 
                            with a lot of motivation and maths head to code various 
                            applications. I quickly learned different working languages and scripts. 
                            For last year I have been a bit more into web programming and algorithms.
                            </BodyText>
                        </CardBody>
                    </CardContent>
                </CardBack>
            </CardInner>
        </Card>

    </>
  )
}

export default Profile