// leçon 19novembre 2021 
//ex1 
const runCode =()=>{
  console.log("start")

  do something ()

  console.log("end")
}

const doSomething =()={
  setTimeout()={
    sum =0 

    for (let i=0; i <2; i++) {
      sum++
    }
  }console.log("doing something")
}

// ex 2 
const runCode = ()=> {
generate ()

}

const generate = ()=> {
  getRandomNumberAfterDelay((result)=> console.log(result)   
}

const getRandomNumberAfterDelay = callback =>setTimeout(()=> 
const randomNumber= Math.floor(Math.random()*150)callback(randomNumber)
)
},2000);
}
// ex3 

const Time_IN_SECONDS =1
let buttonElement=document.getElementById("button-id")
const colorList =[ "red","green","blue","yellow","grey"]

const runCode ={
  setInterList =()=> {
    let randomIndexOfColor=Math.floor(Math.random()*colorList.length)

    buttonElement.style.backgroundColor=colorList[randomIndexOfColor]
  },Time_IN_SECONDS*1000);
}
// ex4 
let num=1.123456789

const runCode =()=> {
  generate()
}

const generate =()=> {
  getRandomNumberAfterDelay(result)=> console.log("result:"+ result),err=>console.log("error:"+ err))
}

const getRandomNumberAfterDelay= (succesCallback , errorCalback)=>{
  setTimeout => {
    try {
      const randomNumber=Math.floor(Math.random()*150)
      let newNumber= num.toFixed(randomNumber)
      succesCallback(newNumber)
    }catch(err) {
      errorCalback(err)
    }
  },0;
}
   
