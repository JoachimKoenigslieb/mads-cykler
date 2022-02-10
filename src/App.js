import React from 'react'
import { Grid, Container } from '@mui/material'
import styled from 'styled-components'
import cykel1 from './cykel1.jpeg'
import cykel2 from './cykel2.jpeg'
import cykel3 from './cykel3.jpeg'

const Header = styled.h1`
	text-align: center;
`

const cykler = [
	{ 
		titel: 'Fed cykel, god pris', 
		billede: cykel1,
		pris: 300,
	},
	{
		titel: 'meget dyr cykel',
		billede: cykel2,
		pris: 50000,
	},
	{
		titel: 'lorte cykel',
		billede: cykel3,
		pris: 2,
	}
]

const P = styled.p`
	:hover {
		background-color: red;
	}
`

const Cykel = ({ cykel, }) => {
	const { titel, billede, pris, } = cykel

	return (
		<>
			<h2>
				{ titel }
			</h2>
			{/* eslint-disable-next-line jsx-a11y/alt-text */}
			<img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', }} src={billede} width="80%"/>
			<div style={{ marginTop: 16}}>
				pris: den koster <button onClick={() => alert('skriv til mig på messenger. jeg hedder mads')}>{ pris },- kr</button>
			</div>
		</>
	)
}



const App = () => {
  return (
	<Container maxWidth="md">
		<Grid container justify="center">
			<Grid item xs={12}>
				<Header>
					Mads cykler. De er luxus!
				</Header>
			</Grid>
			<Grid item container xs={12}>
				{ cykler.map(cykel => {
					return (
						<Grid item xs={12} md={4}>
							<Cykel cykel={cykel}/>
						</Grid>
					)
				})}
			</Grid>
			<Grid item xs={12}>
				<P>
					Jeg håber meget gerne i vil købe mine cykler fordi jeg har laver stor middag:)))
				</P>
			</Grid>
		</Grid>
	</Container>
  )
}

export default App;
