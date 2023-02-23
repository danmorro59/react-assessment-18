import React,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Instructions from './components/Instructions'
import Comments from './components/Comments'


function App() {
  const [comments, setComments] = useState([])
    // you will need to use the useEffect hook. Do this in async / await syntax.
    useEffect(() => {

      const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments')
        const data = await response.json()
        setComments(data)
      }
  
      getData()
    }, []) 
    
  return (
    <div className="container">
      {/* <Instructions /> */}
      <Comments comments={comments} setComments={setComments}/>
      
    </div>
  );
}

export default App;
