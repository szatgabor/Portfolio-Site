const form = document.getElementById("my-form");
    

    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
          status.style.animation = 'none';
          status.offsetHeight; 
          status.style.animation = null; 
          status.classList.remove(...status.classList)
          if(response.status === 200){
            status.classList.add('success');
            status.innerHTML = "Thanks for your submission! Soon I will give a reply!";
          form.reset();
        }else{
          status.classList.add('error')
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      });
    }
    form.addEventListener("submit", handleSubmit)