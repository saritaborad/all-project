import React, {Component, createRef} from 'react';
import ReactDOM  from 'react-dom';

// <! --------------------------------------------------------------------------->
// class App extends Component{
//     render(){
//         return (
//             <React.Fragment>
                
//                 <h1>Hello</h1>
//                 <h2>Have a Good Day Sarita Borad</h2>
//             </React.Fragment>
                  
//         );
//     }
// }

// export default App;

// <! ---------------------------------------------------------------------------> 
// import React, {Component, Fragment} from 'react';
// class App extends Component{
//     render(){
//         return (
//             <Fragment>
//                 <h1>Hello</h1>
//                 <h2>Have a Good Day Sarita Borad</h2>
//             </Fragment>
                  
//         );
//     }
// }

// export default App;

// <! --------------------------------------------------------------------------->
// class App extends Component{
//     render(){
//         return (
//             <>
//                 <h1>Hello</h1>
//                 <h2>Have a Good Day Sarita Borad</h2>
//             </>
                  
//         );
//     }
// }

// export default App;
           
// <! --------------------------------------------------------------------------->
// function Student(){
//    return <h1>Hello World</h1>
// }

// <! --------------------------------------------------------------------------->
// const Student = () => {
//     return <h1>Hello world</h1>
// }

// ReactDOM.render(<Student />,document.getElementById('root'));

// <! --------------------------------------------------------------------------->
// const Student = (props) => {
    
//     return <h1>Hello {props.name}</h1>
// }
// ReactDOM.render(<Student name='Sarita'/>, document.getElementById('root'));

// <! --------------------------------------------------------------------------->
// class Student extends Component{
//     render(){
//         return <h1>Hello Sarita</h1>
//     }
// }

// export default Student;

// <! --------------------------------------------------------------------------->
// class Student extends Component{
//     render(){
//         return <h1>Hello {this.props.name}</h1>
//     }
// }

// export default Student;

// <! --------------------------------------------------------------------------->
// const Student = () => {
//     return <h1>Hello Sarita</h1>
// }

// const App = () => {
//     return (<div>
//                 <Student />
//                 <Student />
//            </div>);
// }

// export default App;

// <! --------------------------------------------------------------------------->
// const Student = (props) => {
//     return <h1>Hello {props.name}</h1>
// }

// const App = () => {
//     return (<div>
//                 <Student name='Sarita'/>
//                 <Student name='Smruti'/>
//            </div>);
// }

// export default App;

// using image from public folder
// class App extends Component{
//     render(){
//         return (
//             <img src={process.env.PUBLIC_URL + "/q1.jpg"} width="300px" />
//         );
//     }
// }

// export default App;


// using image from src folder to App.js file
// import mypic from './q1.jpg'
// export default class App extends Component {
//     render() {
//         return (
//             <div>
//             <img src={mypic} alt="mypic" width="300px"/>
//             </div>
//         )
//     }
// }


// controlled component --> COntrolling input
// export class App extends Component {
//     state = {
//         value: ''
//     };

//     handleChange = (e) =>{
//         this.setState({value: e.target.value.toUpperCase().substr(0,10) });     
//  s
//     }; 

//     render() {
//         return (
//             <div>
//                 <form>
//                     <h2>Controlled Component</h2> 
//                     {/* <input type="text" defaultValue="my name is"/> */}
//                     <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </form>
//             </div>
//         )
//     }
// }

// export default App


// controlled component --> controlling textarea
// export default class App extends Component {
//     state = {
//         value: "Hello, there"
//     }

//     handleChange = (e) => {
//         this.setState({value: e.target.value.toUpperCase().substr(0,30)});
//         console.log(this.state.value);
//     }
//     render() {
//         return (
//             <div>
//                 <textarea value={this.state.value} onChange={this.handleChange}></textarea>
//             </div>
//         )
//     }
// }


// controll Multiple Input in React
// export default class App extends Component {
//     state = {
//         name: "",
//         password:""
//     }

//     handleName = (e) => {
//         this.setState({name: e.target.value});
//     }
//     handlePassword = (e) => {
//         this.setState({password: e.target.value});
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <label>
//                         Name: <input type="text" value={this.state.name} onChange={this.handleName}/>
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         Password: <input type="text" value={this.state.password} onChange={this.handlePassword} />
//                     </label>
//                 </form>                
//             </div>
//         )
//     }
// }

// control multiple input in React

// export default class App extends Component {
//     state = {
//         name: "",
//         password: ""
//     }

//     handleChange = e =>{
//         // this.setState({[e.target.name]:e.target.value});  
//         const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
//         this.setState({[e.target.name]:value});            
//     }

//     render() {
//         return (
//             <div>
//                 <label>Name: <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /> </label>                
//                 <label>Password: <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/></label>                
//             </div>
//         )
//     }
// }


// // Handling Form in ReactJS
// export default class App extends Component {
//     state = {
//         name: "",
//         password: ""
//     }

//     handleChange = e =>{
//         // this.setState({[e.target.name]:e.target.value});  
//         const value = e.target.name === "password" ? e.target.value.toUpperCase() : e.target.value;
//         this.setState({[e.target.name]:value});            
//     }

//     handleSubmit = e =>{
//         console.log(e.target);
//         console.log(e.target[0]);
//         console.log(e.target[1]);
//         console.log(e.target[0].name);
//         console.log(e.target[1].name);
//         console.log(e.target[0].value);
//         console.log(e.target[1].value);
//         e.preventDefault();
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Name: <input type="text" value={this.state.name} name="name" onChange={this.handleChange} /> </label>                
//                     <label>Password: <input type="text" value={this.state.password} name="password" onChange={this.handleChange}/></label>                
//                     <button type="submit" value="Submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }


// use of ref in uncontrolled component
// export default class App extends Component {
//     constructor(props){
//         super(props);
//         // creating refs
//         this.textInput = React.createRef();
//     };
//     componentDidMount() {
//         this.textInput.current.focus();
//         console.log(this.textInput)
//         console.log(this.textInput.current)
//     };
    

//     render() {
//         return (
//             <div>
//                 <form>
//                     Name: <input type="text" />
//                     <br />
//                     <br />
//                     Password: <input type="text" />
//                     <br />
//                     <br />
//                     Adress: <input type="text" />
//                 </form>
//             </div>
//         )
//     }
// }

// example of refs
// export default class App extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             value: ''
//         }
//         // creating refs
//         this.textInput = React.createRef();
//     };

//     handleSubmit = (e) =>{
//        e.preventDefault();
//        console.log(this.textInput.current.value)
//        this.setState({value:this.textInput.current.value});
//     };
    

//     render() {
//         return (
//             <div>
//                 <h2>You typed: {this.state.value}</h2>
//                 <form onSubmit={this.handleSubmit}>
//                     Input: <input type="text" ref={this.textInput} />
//                     <input type="submit" value='Submit'/>
//                 </form>
//             </div>
//         )
//     }
// }


// callback ref
// export default class App extends Component {

//     constructor(props){
//         super(props);
//         this.backRef = null;
//         this.setbackRef = (element) =>{
//             this.backRef = element;
//         }
//     }
//         componentDidMount = () =>{
//             console.log(this.backRef);
//             if (this.backRef){
//                 this.backRef.focus();
//             }

//         };
        
    

//     render() {
//         return (
//             <div>
//                 <form>
//                     Name: <input type="text"  />
//                     <br />
//                     <br />
//                     Password: <input type="text" ref={this.setbackRef} />
//                 </form>
//             </div>
//         )
//     }
// }


// Context API
// import User from './User'

// export const MyContext = React.createContext();

// export default class App extends Component {
//     state = {
//         name: "sarita"
//     }

//     render() {
//         return (
           
//                 <MyContext.Provider value={this.state.name}>
//                     <User />
//                 </MyContext.Provider>
      
//         )
//     }
// }


// context API with multiple state
// import User from './User'

// export const MyContext = React.createContext();

// export default class App extends Component {
//     state = {
//         name: "sarita",
//         surname: "Borad"
//     }

//     render() {
//         return (
           
//                 <MyContext.Provider value={this.state}>
//                     <User />
//                 </MyContext.Provider>
      
//         )
//     }
// }


// context API with function 

// import User from './User'

// export const MyContext = React.createContext();

// export default class App extends Component {
//     state = {
//         name: "sarita",
//         surname: "borad"
//     }
//     handleClick =() =>{
//         // this.setState({name: "smruti"})
//         this.setState({name: this.state.name.toUpperCase()})
//         this.setState({surname: this.state.surname.toUpperCase()})
//     }

//     render() {
//         const contextValue = {
//             data: this.state,
//             handleClickContext: this.handleClick
//         }
//         return (
           
//                 <MyContext.Provider value={contextValue}>
//                     <User />
//                 </MyContext.Provider>
      
//         )
//     }
// }























































































































































































































































































































































        
        