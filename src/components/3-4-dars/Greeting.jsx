import React from 'react'

const Greeting = ({ username, email, children }) => {

    // let { username, email } = props
    // console.log(props.children);
    // console.log(props);
    // let username = props.username
    // let email = props.email

    // destructring
    // let {age,lastName,firstName} = {
    //     firstName: "Ismoil",
    //     lastName: "Abdumajidov",
    //     age:22,
    // }
    // console.log(age);
    // console.log(firstName);
    // console.log(lastName);

    // let [olma,...other] = ["olma", "anor", "olcha", "gilos"]
    // console.log(olma);
    // console.log(anor);
    // console.log(other);
    // let anor = arr[1]
    // console.log(anor);
    // console.log(false || "salom");
    // console.log(false && "ishladi");
    return (
        <div>
            {/* <h3>Hello {props.username || "John"}</h3> */}
            <h3>{username || "John"} and his email is {email || "john@gmail.com"}</h3>
            <div>
                {children}
            </div>
        </div>
    )
}
export default Greeting


// in this case props.userame evaluates as a simple html text


// to evaluate as a JS obj key write in curly brackets

// const Greeting = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h3>Hello {props.username}</h3>
//         </div>
//     )
// }
// export default Greeting



// or you can use destructuring for props
// const Greeting = (props) => {
//     const {username} = props
//     return (
//         <div>
//             <h3>Hello {username || "World"}</h3>
//         </div>
//     )
// }

// or you can destructure in place of parameter
// const Greeting = ({ username }) => {
//     return (
//         <div>
//             <h3>Hello {username || "World"}</h3>
//         </div>
//     )
// }


// You can add more than one props
// const Greeting = ({ username, email }) => {
//     return (
//         <div>
//             <h3>{username} and his email is {email}</h3>
//         </div>
//     )
// }


// // Children props
// const Greeting = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h3>{props.username} and his email is {props.email}</h3>
//             {props.children}
//         </div>
//     )
// }

