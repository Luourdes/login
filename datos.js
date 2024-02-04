document.getElementById('pais').addEventListener('change', function() {
    var estadoSelect = document.getElementById('estado');
    var municipioSelect = document.getElementById('municipio');
    var localidadSelect = document.getElementById('localidad');
    var pais = this.value;
    
    estadoSelect.innerHTML = '<option value="">Selecciona un estado</option>';
    municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
    localidadSelect.innerHTML = '<option value="">Selecciona una localidad</option>';
    
    if (pais === 'Mexico') {
      estadoSelect.innerHTML += '<option value="Hidalgo">Hidalgo</option>';
      estadoSelect.innerHTML += '<option value="Jalisco">Jalisco</option>';
      estadoSelect.innerHTML += '<option value="Mexico">México</option>';
      estadoSelect.disabled = false;
    } else if (pais === 'EstadosUnidos') {
      estadoSelect.innerHTML += '<option value="California">California</option>';
      estadoSelect.innerHTML += '<option value="Texas">Texas</option>';
      estadoSelect.innerHTML += '<option value="Washington">Washington</option>';
  
      estadoSelect.disabled = false;
    }
  });
  
  document.getElementById('estado').addEventListener('change', function() {
    var municipioSelect = document.getElementById('municipio');
    var estado = this.value;
    
    municipioSelect.innerHTML = '<option value="">Selecciona un municipio</option>';
    
    if (estado === 'Hidalgo') {
      municipioSelect.innerHTML += '<option value="Tula">Tula</option>';
      municipioSelect.innerHTML += '<option value="Tepeji">Tepeji</option>';
      municipioSelect.innerHTML += '<option value="Tepetitlan">Tepetitlan</option>';
      municipioSelect.disabled = false;
    } else if (estado === 'Jalisco') {
      municipioSelect.innerHTML += '<option value="Elarenal">El arenal</option>';
      municipioSelect.innerHTML += '<option value="Ayutla">Ayutla</option>';
      municipioSelect.innerHTML += '<option value="Colula">Colula</option>';
      municipioSelect.disabled = false;
    } else if (estado === 'Mexico') {
      municipioSelect.innerHTML += '<option value="Huehuetoca">Huehuetoca</option>';
      municipioSelect.innerHTML += '<option value="Coyotepec">Coyotepec</option>';
      municipioSelect.innerHTML += '<option value="Cuautitlan">Cuautitlan</option>';
      municipioSelect.disabled = false;
    }  
    
    else if (estado === 'California') {
      municipioSelect.innerHTML += '<option value="LosAngeles">Los Angeles</option>';
      municipioSelect.innerHTML += '<option value="SanDiego">San Diego</option>';
      municipioSelect.innerHTML += '<option value="SanFrancisco">San Francisco</option>';
  
      municipioSelect.disabled = false;
    }  else if (estado === 'Washington') {
      municipioSelect.innerHTML += '<option value="Lincoln">Lincoln</option>';
      municipioSelect.innerHTML += '<option value="Columbia">Columbia</option>';
      municipioSelect.innerHTML += '<option value="Benton">Benton</option>';
      municipioSelect.disabled = false;
    } else if (estado === 'Texas') {
      municipioSelect.innerHTML += '<option value="Dallas">Dallas</option>';
      municipioSelect.innerHTML += '<option value="Knox">Knox</option>';
      municipioSelect.innerHTML += '<option value="Kent">Kent</option>';
      municipioSelect.disabled = false;
    }
  });
  
  document.getElementById('municipio').addEventListener('change', function() {
    var localidadSelect = document.getElementById('localidad');
    var municipio = this.value;
    
    localidadSelect.innerHTML = '<option value="">Selecciona una localidad</option>';
    
    if (municipio === 'Tula') {
      localidadSelect.innerHTML += '<option value="SanMarcos">San Marcos</option>';
      localidadSelect.innerHTML += '<option value="ElCarmen">El Carmen </option>';
      localidadSelect.innerHTML += '<option value="ElLlano">El Llano</option>';
      localidadSelect.disabled = false;
    }else if (municipio === 'Tepeji') {
      localidadSelect.innerHTML += '<option value="Tlautla">Tlautla</option>';
      localidadSelect.innerHTML += '<option value="Tepeji">Tepeji Centro</option>';
      localidadSelect.innerHTML += '<option value="MelchorOcampo">Melchor Ocampo</option>';
      localidadSelect.disabled = false;
    } else if (municipio === 'Tepetitlan') {
      localidadSelect.innerHTML += '<option value="LaLoma">La Loma</option>';
      localidadSelect.innerHTML += '<option value="Sayula">Sayula</option>';
      localidadSelect.innerHTML += '<option value="Tepetitlan">Tepetitlan Centro</option>';
      localidadSelect.disabled = false;
    } else if (municipio === 'Cuautitlan') {
      localidadSelect.innerHTML += '<option value="Miciones">Miciones</option>';
      localidadSelect.innerHTML += '<option value="Sanblas1">San Blas1</option>';
      localidadSelect.innerHTML += '<option value="RanchoSanblas2">RanchoSanblas2</option>';
      localidadSelect.disabled = false;
    } else if (municipio === 'Huehuetoca') {
      localidadSelect.innerHTML += '<option value="Downtown">Downtown</option>';
      localidadSelect.disabled = false;
    } else if (municipio === 'Coyotepec') {
      localidadSelect.innerHTML += '<option value="Downtown">Downtown</option>';
      localidadSelect.disabled = false;
    }  else if (municipio === 'LosAngeles') {
      localidadSelect.innerHTML += '<option value="Downtown">Downtown</option>';
      localidadSelect.disabled = false;
    }   else if (municipio === 'Texas') {
      localidadSelect.innerHTML += '<option value="Downtown">Downtown</option>';
      localidadSelect.disabled = false;
    } else if (municipio === 'Houston') {
      localidadSelect.innerHTML += '<option value="Downtown">Downtown</option>';
      localidadSelect.disabled = false;
    }
  });