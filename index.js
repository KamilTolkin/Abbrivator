document.getElementById("input").value=""

document.getElementById('checkbox_').checked = false;

document.getElementById("abbrvbtn").addEventListener("click",()=>{
  abbrv()
  document.getElementById("input").value=""
})

const toggle = document.querySelector('.toggle input')
toggle.addEventListener('click', () => {
    const onOff = toggle.parentNode.querySelector('.onoff')
    onOff.textContent = toggle.checked ? 'Uppercase' : 'Lowercase'
})
//sets the label above the toggle


function abbrv(str){
  str = document.getElementById("input").value
    if(toggle.parentNode.querySelector('.onoff').textContent = toggle.checked){
    str= str.toUpperCase()
    toggle.parentNode.querySelector('.onoff').textContent = "Uppercase"
  }else{
    str = str.toLowerCase()
    toggle.parentNode.querySelector('.onoff').textContent = "Lowercase"
  }
  //code above determines if the abbrivation should be lower or upper case based on the users choice
  //i had to put the .text content bit in because it was changing them to true or false based on the state of the switch
  let abbreviation =""
    let arr = str.split(" ")
    for (let i = 0; i < arr.length; i++){
       abbreviation += arr[i].charAt(0)
    }
    document.getElementById("output").innerHTML= abbreviation
    //this code does the abbrivating
}



