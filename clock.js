const clockTitle = document.querySelector("h1");

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // console.log(typeof `${minutes}`);
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours} : ${minutes < 10 ? `0${minutes}` : minutes} :  ${seconds < 10 ? `0${seconds}` : seconds} ` ;

}


// const title2 = document.querySelector("#title");
function init(){
  getTime();
  setInterval(getTime,1000);
}

init();
