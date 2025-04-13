document.getElementById("submitBtn").addEventListener("click", function (e) {
    const email = document.getElementById("email")
    const iin = document.getElementById("iin")
    const phoneInput = document.getElementById('phone')
    
    let valid = true

    
    if (phoneInput) {
      IMask(phoneInput, {
        mask: '+{7} (000) 000-00-00'
      })
    }
    if (iin) {
      IMask(iin, {
        mask: '000000000000'
      })
    }

  
  
    if (!email.value.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      alert("Пожалуста, напишите еmail")
      valid = false
    }
  
    if (iin.value.length < 12) {
      alert("Введите ИИН КР (12 цифр)")
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
                window.location.href = "index.html"
              }, 1500)
        }else{
            setTimeout(() => {
                window.location.href = "index.html"
              }, 1)
        }
      })




  })
  


  