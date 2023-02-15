module.exports = {

    birdlist: [
        {id : 1, name : "Robin", species : "sparrow", color : "red", diet : "seeds"},
        {id : 2, name : "Eagle", species : "bird", color : "brown", diet : "fish"},
        {id : 3, name : "Raven", species : "crow", color : "black", diet : "everything"},
        {id : 4, name : "Blackbird", species : "sparrow", color : "black", diet : "seeds"}
    ],

    findbyid: function(numberinput){
        for (let bird of this.birdlist){
            //Input is an object and has to be parsed to number
            if (bird.id === parseInt(numberinput)){
                return bird;
            }
        }
        return `No bird with id: ${input}`;
    },

    findbycolor: function(colorinput){
        const specificcolors = [];
        
        for (let bird of this.birdlist){
            //Input is an object and has to be parsed to String
            if (bird.color === String(colorinput)){
                specificcolors.push(bird);
            }
        }
        
        if(specificcolors.length > 0){
            return specificcolors;
        }
        return `No bird with the color: ${colorinput}`; 
    },

    findbyspecies: function(speciesinput){
        const specificspecies = [];

        for (let bird of this.birdlist){
            //Input is an object and has to be parsed to String
            if (bird.species === String(speciesinput)){
                specificspecies.push(bird);
            }
        }
        
        if(specificspecies.length > 0){
            return specificspecies;
        }
        return `No bird is of the species: ${speciesinput}`; 
    },

    findbydiet: function(dietinput){
        const specificdiet = [];

        for (let bird of this.birdlist){
            //Input is an object and has to be parsed to String
            if (bird.diet === String(dietinput)){
                specificdiet.push(bird);
            }
        }
        
        if(specificdiet.length > 0){
            return specificdiet;
        }
        return `No bird eats: ${specificdiet}`; 
    }
}

