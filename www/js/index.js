    var app = {  
      
        initialize: function() {  
            this.bindEvents();  
        },  
         /* Eventos para los dos botones */
        bindEvents: function() {  
            var takePhoto = document.getElementById('takePhoto');  
            takePhoto.addEventListener('click', app.takePhoto, false);  
            var sendPhoto = document.getElementById('sendPhoto');  
            sendPhoto.addEventListener('click', app.sendPhoto, false);  
        },  
        /* El de enviar la foto simplemente muestra un alert indacando
        una accion que se puede programar para enviarlo donde quieras la foto tomada */
        sendPhoto: function() {  
            alert('Imagen enviada al servidor');  
        },  
        /* se inicia la funcion camera del plugin  */
        takePhoto: function(){  
            navigator.camera.getPicture(app.onPhotoDataSuccess, app.onFail, { quality: 20,   
                allowEdit: true, destinationType: navigator.camera.DestinationType.DATA_URL });  
        },  
        /* Toma la foto y la convierte en .jpeg en base64
        crea la variable photo para usarla con un ID y la prepara para la 
        funcion sendPhoto para la funcion enviar foto */
        onPhotoDataSuccess: function(imageData) {  
         
          var photo = document.getElementById('photo');  
      
          photo.style.display = 'block';  
      
          photo.src = "data:image/jpeg;base64," + imageData;  
      
          var sendPhoto = document.getElementById('sendPhoto');  
          sendPhoto.style.display = 'block';  
            
        },  
      /* si la camara se cierra  y no se toma una foto sale mensaje*/
        onFail: function(message) {  
          alert('Failed because: ' + message);  
        }  
      
    };  