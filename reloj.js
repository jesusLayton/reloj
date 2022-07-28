(function(){
    let actualizarHora = function(){
        let fecha = new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundo = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear();

        let pHoras = document.getElementById("horas"),
            pAMPM = document.getElementById("ampm"),
            pMinutos = document.getElementById("minutos"),
            pSegundos = document.getElementById("segundos"),
            pDiaSemana = document.getElementById("diaSemana"),
            pDia = document.getElementById("dia"),
            pMes = document.getElementById("mes"),
            pYear = document.getElementById("year");

        let semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado',]
        pDiaSemana.textContent = semana[diaSemana];

        pDia.textContent = dia;

        let meses =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        pYear.textContent = year;

        pMes.textContent = meses[mes];
        
        pHoras.textContent =horas;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundo;
        

            

    };

    actualizarHora();




}())