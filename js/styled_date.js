(function(){
    class NewDate{
        constructor(date){
            this.date = date;
        }

        getYear(){
            let year;
            year = this.date.getFullYear();
            return year;
        }

        getMonth(){
            let month;
            month = this.date.getMonth();
            const months = [
                "Enero","Febrero","Marzo","April",
                "Mayo","Junio","Julio","Agosto",
                "Septiembre","Octubre","Noviembre","Diciembre"];
            return months[month];
        }

        getDayOfTheMonth(){
            let dayOfTheMonth;
            dayOfTheMonth = this.date.getDate();
            return dayOfTheMonth;
        }

        getDayOfTheWeek(){
            let dayOfTheWeek;
            dayOfTheWeek = this.date.getDay();
            const daysOfTheWeek = [
                    "Domingo","Lunes",
                    "Martes","Miercoles",
                    "Jueves","Viernes","Sabado"];
            return daysOfTheWeek[dayOfTheWeek];
        }

        getHours(){
            let hour;
            hour = this.date.getHours();
            hour = (hour < 10)? `0${hour}` : hour;
            return hour;
        }

        getMinutes(){
            let minutes;
            minutes = this.date.getMinutes();
            minutes = (minutes < 10)? `0${minutes}` : minutes; 
            return minutes;
        }

        getSeconds(){
            let seconds;
            seconds = this.date.getSeconds();
            seconds = (seconds < 10)? `0${seconds}` : seconds; 
            return seconds;
        }

        toFormTime(hour,minutes,seconds){
            return `${hour}:${minutes}:${seconds}`;
        }

        toFormDate(year,month,dayOfTheMonth,dayOfTheWeek){
            return `${dayOfTheWeek} ${dayOfTheMonth} de ${month}, ${year}`;
        }

        toShowTime(){
            const hour = this.getHours();
            const minutes = this.getMinutes();
            const seconds = this.getSeconds();
            const fullTime = this.toFormTime(hour,minutes,seconds);
            return fullTime;
        }

        toShowDate(){
            const year = this.getYear();
            const month = this.getMonth();
            const dayOfTheMonth = this.getDayOfTheMonth();
            const dayOfTheWeek = this.getDayOfTheWeek();
            const fullDate = this.toFormDate(year,month,dayOfTheMonth,dayOfTheWeek);
            return fullDate;
        }
        toShowCompletedDate(){
            return `${this.toShowDate()}, ${this.toShowTime()}`;
        }
    }

    const template = ()=>{
        const newDate = new NewDate(new Date());
        const container = document.getElementById("ctr-dt");
        const date = newDate.toShowCompletedDate(); 
        container.innerHTML =  date;
    };

    setInterval(()=>{
        template();
    },1000);
})();