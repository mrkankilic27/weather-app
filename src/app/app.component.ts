import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService){}
  
  city:string = "Ankara"
  weatherData?: WeatherData
  day:string=""

  ngOnInit(): void {
    this.getWeatherData(this.city);
    this.city=""
  }


  dayConvert(timestamp:any){
    var date=new Date(timestamp* 1000)
    let week=["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    // console.log(timestamp)
    console.log("date:" ,date);
    
    
    
    return week[date.getDay()]
  }

  onSubmit(){
    this.getWeatherData(this.city.toLocaleLowerCase());
    this.city="";
  }

  private getWeatherData(city:string){
    this.weatherService.getWeather(city).subscribe({
      next:(response)=>{
        this.weatherData=response;
        console.log(response);
      }
     })
  }
}
