// FRONT-END (CLIENT) JAVASCRIPT HERE

const submit = async function( event ) {
  // stop form submission from trying to load
  // a new .html page for displaying results...
  // this was the original browser behavior and still
  // remains to this day
  event.preventDefault()
  
  const input = document.querySelector( '#yourname' ),
        json = { yourname: input.value },
        body = JSON.stringify( json )
  
try{
  const response = await fetch( '/submit', {
    method:'POST',
    body 
  })
  const text = await response.text()

  console.log( 'text:', text )
}
catch(err){
  console.log(err.message);
  document.getElementsByClassName("body").innerHTML= '<p> Request Failed </p>';
}}

window.onload = function() {
   const button = document.querySelector("button");
  button.onclick = submit;
}