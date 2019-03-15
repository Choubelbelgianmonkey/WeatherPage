var dataView = new Vue({
    el: "#app",
    data: { 

        weatherData: [],
        
        oneCity: [],
        
        iconID: [],
        
        iconWeather: [],
        
        search: "",
          
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
                var url = "https://api.openweathermap.org/data/2.5/weather?q=" + this.search + "&appid=5da068a80dc44fdaa55bd5455946de9a&units=metric";
                fetch(url)
                    .then((response) => response.json())
                    .then((response) => (dataView.oneCity = response))
                    .then((response) => (dataView.iconID = response.weather[0].icon  ))
                    .catch(function(error) {console.log(error)});
            },
        
            getSpecifiedIcon(){

                http://openweathermap.org/img/w/10d.png
                
                                var url = "https://api.openweathermap.org/img/w/" + this.iconID + ".png";
                fetch(url)
                    .then((response)  => response.json())
                    .then((response) => (dataView.iconWeather = response))
                    .catch(function(error) {console.log(error)});
                
            },

    },

    computed: { 
        

        

        },

    watch: {

    },

});



