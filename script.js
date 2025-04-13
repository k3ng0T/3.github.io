document.getElementById("submitBtn").addEventListener("click", function (e) {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
  
    let valid = true

  
  
    if (!email.value.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Пожалуста, напишите еmail")
      valid = false
    }
  
    if (password.value.length < 8) {
      alert("Пароль должен быть не менее 8 символов")
      valid = false
    }
  

    document.querySelector("form").addEventListener("submit", function(e) {
        e.preventDefault()
      
        const button = document.getElementById("submitBtn")
        const formWrapper = document.getElementById("formWrapper")
      

        if (valid){
            formWrapper.classList.add("hidden")
            button.classList.add("animating")
            setTimeout(() => {
                window.location.href = "register.html"
              }, 1500)
        }else{
            setTimeout(() => {
                window.location.href = "register.html"
              }, 1)
        }
      })




  })
  


  