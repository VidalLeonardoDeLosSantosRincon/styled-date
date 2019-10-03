(function(){
    class NewDate{
        constructor(date){
            this.date = date;
        }
        //metodo obtener anio
        getYear(){
            let year;
            year = this.date.getFullYear();
            return year;
        }
        //metodo obtener mes
        getMonth(){
            let month;
            month = this.date.getMonth();
            const months = [
                "Enero","Febrero","Marzo","April",
                "Mayo","Junio","Julio","Agosto",
                "Septiembre","Octubre","Noviembre","Diciembre"];
            return months[month];
        }
        //metodo obtener dia del mes
        getDayOfTheMonth(){
            let dayOfTheMonth;
            dayOfTheMonth = this.date.getDate();
            return dayOfTheMonth;
        }
        //metodo obtener dia de la semana
        getDayOfTheWeek(){
            let dayOfTheWeek;
            dayOfTheWeek = this.date.getDay();
            const daysOfTheWeek = [
                    "Domingo","Lunes",
                    "Martes","Miercoles",
                    "Jueves","Viernes","Sabado"];
            return daysOfTheWeek[dayOfTheWeek];
        }
        //metodo obtener horas
        getHours(){
            let hour;
            hour = this.date.getHours();
            hour = (hour < 10)? `0${hour}` : hour;
            return hour;
        }
        //metodo obtener minutos
        getMinutes(){
            let minutes;
            minutes = this.date.getMinutes();
            minutes = (minutes < 10)? `0${minutes}` : minutes; 
            return minutes;
        }
        //metodo obtener segundos
        getSeconds(){
            let seconds;
            seconds = this.date.getSeconds();
            seconds = (seconds < 10)? `0${seconds}` : seconds; 
            return seconds;
        }
        //metodo armar tiempo
        toFormTime(hour,minutes,seconds){
            return `${hour}:${minutes}:${seconds}`;
        }
        //metodo armar fecha
        toFormDate(year,month,dayOfTheMonth,dayOfTheWeek){
            return `${dayOfTheWeek} ${dayOfTheMonth} de ${month}, ${year}`;
        }
        //metodo mostrar tiempo
        toShowTime(){
            const hour = this.getHours();
            const minutes = this.getMinutes();
            const seconds = this.getSeconds();
            const fullTime = this.toFormTime(hour,minutes,seconds);
            return fullTime;
        }
        //metodo mostrar fecha
        toShowDate(){
            const year = this.getYear();
            const month = this.getMonth();
            const dayOfTheMonth = this.getDayOfTheMonth();
            const dayOfTheWeek = this.getDayOfTheWeek();
            const fullDate = this.toFormDate(year,month,dayOfTheMonth,dayOfTheWeek);
            return fullDate;
        }
        //metodo mostrar tiempo y fecha
        toShowCompletedDate(){
            return `${this.toShowDate()}, ${this.toShowTime()}`;
        }
    }

    //obteniendo la fecha y agregandola al html
    const template = ()=>{
        const newDate = new NewDate(new Date());
        const container = document.getElementById("ctr-dt");
        const date = newDate.toShowCompletedDate(); 
        container.innerHTML =  date;
    };

    //llamando a la funcion para agregar la fecha cada 1 segundo (tiempo asignado al intervalo)
    setInterval(()=>{
        template();
    },1000);
})();