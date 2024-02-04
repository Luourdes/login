document.getElementById('ubicacionForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      var paisSeleccionado = document.getElementById('pais').value;
      var estadoSeleccionado = document.getElementById('estado').value;
      var municipioSeleccionado = document.getElementById('municipio').value;
      var localidadSeleccionada = document.getElementById('localidad').value;
      
      localStorage.setItem('paisSeleccionado', paisSeleccionado);
      localStorage.setItem('estadoSeleccionado', estadoSeleccionado);
      localStorage.setItem('municipioSeleccionado', municipioSeleccionado);
      localStorage.setItem('localidadSeleccionada', localidadSeleccionada);
      
      window.location.href = "resultado.html";
    });


