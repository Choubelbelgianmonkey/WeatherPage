var dataView = new Vue({
    el: "#app",
    data: { 

        weatherData: [],
        
        forecastData: [],
        
        oneCity: [],
        
        cityID: [],
        
        iconID: [],
        
        iconWeather: [],
        
        search: "",
        
        view: "",
        
        contentView: true,
        
        disclaimerView: false,
          
    },

    created() {
        
       var jsonURL = "https://api.myjson.com/bins/i8run";
        
        fetch(jsonURL).then((response) => response.json()).then((response) => (dataView.weatherData = response.list));  
    
    },
    
    mounted(){
        
        
    },
    
   beforeUpdate() {
       
    },

    updated() {
           
    },

    methods: {
        
            getSpecifiedData(){
                    var urlToday = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search +         "&appid=5da068a80dc44fdaa55bd5455946de9a&units=metric";
    
                fetch(urlToday)
                    .then((response) => response.json())
                    .then((response) => (dataView.oneCity = response))
                    .then((response) => (dataView.iconID = response.weather[0].icon))
                    .then((response) => (dataView.cityID = response.id))
                    .then(dataView.contentView = true)
                    .then(dataView.disclaimerView = false)
                    .catch(function(error){
                    
                    dataView.contentView = false;
                    dataView.disclaimerView = true;

                     var disclaimer = document.getElementById("disclaimer");
                    var content = document.createElement("p");   
                    content.innerHTML = "No city matching this name. Please review you request.";
                    
                    console.log(disclaimer)
                    
                    disclaimer.appendChild(content);
                    content.setAttribute("class", "beautifulText");
   
                          })

            },
                
            getForecast(){
                              
                        var urlForecast = "https://api.openweathermap.org/data/2.5/forecast?id=" + dataView.oneCity.id + "&appid=5da068a80dc44fdaa55bd5455946de9a&units=metric";
                    
                fetch(urlForecast)
                    .then((response) => response.json())
                    .then((response) => (dataView.forecastData = response.list))
                    .catch(function(error) {console.log(error)})
                },
        
            changeView(x){
                
                this.view = x
                
            },
        
            getSpecifiedIcon(){

//                http://openweathermap.org/img/w/10d.png
//                https://api.openweathermap.org/img/w/
//  no time to finish, but it sounds very complex
                
                                var url = "http://openweathermap.org/img/w/" + this.iconID + ".png";
                fetch(url)
                    .then((response) => (dataView.iconWeather = response.url))                
                    .catch(function(error) {console.log(error)});
                
            },
              
        
    },

    computed: { 
        

        

        },

    watch: {

    },

});

//
//http://api.openweathermap.org/data/2.5/forecast?q=Brussels,us&mode=xml&appid=5da068a80dc44fdaa55bd5455946de9a

