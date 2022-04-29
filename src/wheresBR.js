function fetchRequest(){
fetch("https://api.kanye.rest")
.then((response) => response.json())
.then((data) => {
    let para = document.querySelector("p");
    para.innerHTML = (`${data.quote}`)
    console.log(data)
})
}

let btn = document.getElementById("brQuote").addEventListener("click", function(event){
    event.preventDefault()
    fetchRequest()
})

const randomLocation = () => {
    return `${Math.floor(Math.random() * 600)}px`;
  };

const randomImage = () => {
  return `${Math.floor(Math.random() * 3 + 1)}`
}



  const brImage = document.getElementById("brPic")

  brImage.addEventListener("mouseover", (event) => {
    event.preventDefault()  
    brImage.style.marginLeft = (`${randomLocation()}`)
    brImage.style.marginTop = (`${randomLocation()}`)

  })



  function changeBackground(){
      const fetchImage = fetch("https://picsum.photos/1000")
      .then((data) => {
          
        document.body.style.backgroundImage = "url('https://picsum.photos/1000')"
      })
  }


  function changeBackground(){
    document.getElementById("changeBG").addEventListener('click', function(event){
      event.preventDefault()
      document.body.style.backgroundImage = `url(../img/${randomImage()}.jpeg)`
      console.log(event)

      if(document.body.style.backgroundImage == `url(../img/1.jpeg)`){
        document.body.style.backgroundImage = `url(../img/2}.jpeg)`
      } 
    })
  }

  changeBackground()