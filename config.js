
function forgoted(){
    let checkbox = document.getElementById('checkpoint');
    if (checkbox.checked == true){
          document.getElementById('forgot_page').style.display  = 'block'
           document.getElementById('gray').style.filter  = 'grayscale(1)'
    } else {
      alert('Check the chckbox')
    }
  }
function prev(){
    document.getElementById('forgot_page').style.display  = 'none'
    document.getElementById('gray').style.filter  = 'none'

}