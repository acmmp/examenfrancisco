function mostrarVentana(matricula) {
    var screenWidth = window.screen.width;
    var screenHeight = window.screen.height;

    var leftPosition = (screenWidth - 400) / 2;
    var topPosition = (screenHeight - 400) / 2;

    var ventanaEmergente = window.open('', 'VentanaInsertar', 'width=400,height=400, left=' + leftPosition + ', top=' + topPosition);

    var contenidoHTML = `
        <h2>Insertar nuevo coche</h2>
        <form>
            <label for="matricula">Matricula:</label>
            <input type="text" id="matricula" name="matricula" value="${matricula}" readonly><br>

            <label for="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo"><br>

            <label for="cliente">Cliente:</label>
            <input type="text" id="cliente" name="cliente"><br>

            <label for="entrada">Fecha de entrada:</label>
            <input type="date" id="entrada" name="entrada"><br>

            <label for="salida">Fecha de salida:</label>
            <input type="date" id="salida" name="salida"><br>

            <label for="tarifa">Tarifa:</label>
            <select id="tarifa" name="tarifa">
                <option value="Oferta">Oferta</option>
                <option value="Premium">Premium</option>
                <option value="Estandar">Estandar</option>
            </select><br>

            <button type="button" onclick="insertarCoche()">Insertar</button>
            <button type="button" onclick="cancelarInsercion()">Cancelar</button>
        </form>
    `;

    ventanaEmergente.document.body.innerHTML = contenidoHTML;

    ventanaEmergente.insertarCoche = function () {
       

        ventanaEmergente.close();
    };

    ventanaEmergente.cancelarInsercion = function () {
       

       
        ventanaEmergente.close();
    };
}




function mostrarConfirmacionBorrar() {
    
    var confirmacionVentana = window.open('', 'ConfirmacionBorrar', 'width=400,height=200');

    var ventanaAncho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var ventanaAlto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    var ventanaX = Math.max(0, ((ventanaAncho - 400) / 2) + window.screenX);
    var ventanaY = Math.max(0, ((ventanaAlto - 200) / 2) + window.screenY);

    confirmacionVentana.moveTo(ventanaX, ventanaY);

    var contenidoHTML = `
        <h2>Borrar coche</h2>
        <p>¿Desea borrar la entrada seleccionada?</p>
        <button onclick="borrarEntrada()">Borrar</button>
        <button onclick="mantenerEntrada()">Mantener</button>
    `;

    confirmacionVentana.document.body.innerHTML = contenidoHTML;
}

function borrarEntrada() {
    alert('Entrada borrada');
    window.close();
}

function mantenerEntrada() {
    alert('Entrada mantenida');
    window.close();
}
