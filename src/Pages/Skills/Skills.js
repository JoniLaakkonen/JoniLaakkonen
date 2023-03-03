import React from 'react'
import './Skills.css'
import Grid from '@mui/material/Grid';
import Profile from '../../Components/Cards/Profile'
import CFamily from '../../Components/Cards/CFamily'
import Java from '../../Components/Cards/Java'
import JavaScript from '../../Components/Cards/JavaScript'
import Reacti from '../../Components/Cards/React'
import SQL from '../../Components/Cards/SQL'
import BackToMainLight from '../../Components/BackToMainLight/BackToMainLight'
import { Box } from '@mui/material';

function Skills() {

  return (
    <main id='skills_cntr'>
        <BackToMainLight color='border: 2px solid white'/>
        <h1 className=''>Try clicking the cards.</h1>
        <Box sx={{ flexGrow: 1 }} className='card_stack' >
            <Grid container justifyContent='center' spacing={{ xs: 2, md: 3 }} columns={{ xs: 12 }}>
                <Grid item sm='auto' md='auto'>
                    <Profile/>
                </Grid>
                <Grid item sm='auto' md='auto'>
                    <CFamily/>
                </Grid>
                <Grid item sm='auto' md='auto'>
                    <Java/>
                </Grid>
                <Grid item sm='auto' md='auto'>
                    <JavaScript/>
                </Grid>
                <Grid item sm='auto' md='auto'>
                    <Reacti/>
                </Grid>
                <Grid item sm='auto' md='auto'>
                    <SQL/>
                </Grid>
            </Grid>
        </Box>
    </main>
  )
}

export default Skills