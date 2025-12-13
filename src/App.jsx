import { useState } from "react";

export default function MyApp(){

  const [count, setcount] = useState(0);

  function pushButton(){
    setcount(count+1);
  }

  return(
    <div>
      <h1>Counters that update together.</h1>
      <Button count={count} onClick={pushButton}/><br/>
      <Button count={count} onClick={pushButton}/>
    </div>
  );
}

const user = {
  name: 'Github',
  imgURL: '../../img/github.png',
  imgSize: 90,
}

function Button({count, onClick}){

  return(
    <>
    <button onClick={onClick}>
      Pressed {count} times.
      </button>
    </>
  );
}

