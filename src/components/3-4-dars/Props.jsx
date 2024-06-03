import React from 'react'
import Greeting from './Greeting'

const Props = () => {
	let name = "Abdumajidov Ismoil"
	return (
		<div >

			<h2>Props</h2>

			{/* <Greeting username="Ismoil" /> */}

			{/* <Greeting />
			<Greeting />
			<Greeting />
			<Greeting username = "Will" />
			<Greeting username = "Bruce" />
			<Greeting username = "Smith" />
			<Greeting username = "Anna" />
			<Greeting username = "Ibrohimjon" />
			<Greeting username = "Abdulaziz" /> */}


			{/* You can add more the one props */}
			{/* <Greeting />
			<Greeting username={name} email="will@gmail.com" />
			<Greeting username="Bruce" email="bruce@gmail.com" />
			<Greeting username="Smith" email="smith@gmail.com" />
			<Greeting username="Anna" email="anna@gmail.com" />
			<Greeting username={"Abdulaziz"} email={"abdulaziz@gmail.com"}>
				<h1 className='text-3xl text-red-500 bg-blue-500'>This is a children prop</h1>
				<div>Hello world</div>
			</Greeting> */}

			{/* Children props */}
			{/* <Greeting username="Will" email="will@gmail.com">
				<p>This is a children prop</p>
			</Greeting>

			<Greeting username="Smith" email="smith@gmail.com">
				<button>Button</button>
			</Greeting> */}



		</div>
	)
}

export default Props