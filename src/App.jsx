// import { useState } from 'react'
// import './App.css'


// const App=() =>{
// const [num, setNum]= useState(0)
// const [num2, setNum2] = useState (0)
// const [operator, setOperator] = useState ('')



//  const handleClick = (e) =>{
//   if (num === 0 || num === '+'  ) {
//     setNum(e.target.innerText)
//   } else {
//     setNum (num + e.target.innerText)
//   };

//   };


//   // setResult(result.concat(e.target.name));

//  }

//  const handleOperator = (e) => {
//   setNum2(num)
//   setOperator(e.target.innerText)
//   setNum (e.target.innerText)

//  }

//  const handleResult = () => {
//   switch(operator) {
//     case 'x':
//       setNum(parseFloat(num2)* parseFloat(num))
//       break;
//     case '+':
//       setNum(parseFloat(num2) + parseFloat(num))
//         break;
//     case '-':
//       setNum(parseFloat(num2)- parseFloat(num))
//           break;

//     case '/':
//       setNum(parseFloat(num2) / parseFloat(num))
//             break;
//     case '%':
//       setNum(parseFloat(num2) * parseFloat(num/ 100))
//       break;

//   }
//  }



//  const clear = () => {
//   setResult("");
//  }

//  const backspace = () => {
//   setResult(num.slice(0 , -1))
//  }
//   return (
//     <>

//     <div className='title'>CALCULATOR APP</div>

    
//     <div className="container">
//       <form> 
//         <input type="text" value= {num} />
//       </form>

//       <div className='keypad'>
//         <button onClick={clear} id = "Clear">CLEAR</button>
//         <button name='%'onClick={handleOperator} >%</button>
//         <button onClick={backspace} id= "backspace">C </button>
//         <button onClick={handleOperator}> &divide;</button>
//         <button onClick={handleClick}>7</button>
//         <button onClick={handleClick}>8</button>
//         <button onClick={handleClick}>9</button>
//         <button onClick={handleOperator} >&times;</button>
//         <button onClick={handleClick}>4</button>
//         <button onClick={handleClick}>5</button>
//         <button onClick={handleClick}>6</button>
//         <button onClick={handleOperator}>&ndash;</button>
//         <button onClick={handleClick}>1</button>
//         <button onClick={handleClick}>2</button>
//         <button onClick={handleClick}>3</button>
//         <button onClick={handleOperator} >+</button>
//         <button onClick={handleClick}>0</button>
//         <button onClick={handleClick}>.</button>
//         <button onClick={handleResult}>=</button>
//       </div>
//     </div>

//     </>
//   )


// export default App

import { useState } from 'react'
import './App.css'


const App=() =>{
const [num, setNum]= useState(0)
const [num2, setNum2] = useState (0)
const [operator, setOperator] = useState ('')



 const handleClick = (e) =>{
  if (num === 0 ) {
    setNum(e.target.innerText)
  } else {
    setNum (num + e.target.innerText)
  }


  // setResult(result.concat(e.target.name));

 }

 const handleOperator = (e) => {
  setNum2(num)
  setOperator(e.target.innerText)
  setNum (0)

 }

 const handleResult = () => {
  switch(operator) {
    case 'x':
      setNum(parseFloat(num2)* parseFloat(num))
      break;
    case '+':
      setNum(parseFloat(num2) + parseFloat(num))
        break;
    case '-':
      setNum(parseFloat(num2)- parseFloat(num))
          break;

    case '/':
      setNum(parseFloat(num2) / parseFloat(num))
            break;
    case '%':
      setNum(parseFloat(num2) * parseFloat(num/ 100))
      break;

  }
 }



 const clear = () => {
  setNum("");
 }

 const backspace = () => {
  setNum(num.slice(0 , -1))
 }
  return (
    <>

    <div className='title'>CALCULATOR APP</div>

    
    <div className="container">
      <form> 
        <input type="text" value= {num} />
      </form>

      <div className='keypad'>
        <button onClick={clear} id = "Clear">CLEAR</button>
        <button name='%'onClick={handleOperator} >%</button>
        <button onClick={backspace} id= "backspace">C </button>
        <button onClick={handleOperator}> / </button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleOperator} > * </button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleOperator}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleOperator} >+</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleResult}>=</button>
      </div>
    </div>

    </>
  )
}

export default App

