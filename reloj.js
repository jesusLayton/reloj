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

        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if(horas>=12){
            horas -=12;
            ampm='PM';
        }else{
            ampm='AM';
        }

        if(horas == 0){
            horas = 12;

        }
        
        pAMPM.textContent =ampm;
        pHoras.textContent =horas;

        if(minutos< 10){minutos ="0"+ minutos};
        if(segundo< 10){segundo ="0"+segundo};

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundo;

    

            

    };
   
    actualizarHora();
    setInterval(actualizarHora,1000);




}())

