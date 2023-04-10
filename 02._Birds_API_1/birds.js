module.exports = {

    birdList: [
        {id : 1, name : "Robin", species : "sparrow", color : "red", diet : "seeds"},
        {id : 2, name : "Eagle", species : "bird", color : "brown", diet : "fish"},
        {id : 3, name : "Raven", species : "crow", color : "black", diet : "everything"},
        {id : 4, name : "Blackbird", species : "sparrow", color : "black", diet : "seeds"}
    ],

    findById: function(numberInput){
        for (let bird of this.birdList){
            // input is an object and has to be parsed to number
            if (bird.id === parseInt(numberInput)){
                return bird;
            }
        }
        return `No bird with id: ${numberInput}`;
    },

    findByColor: function(colorInput){
        const specificColors = [];
        
        for (let bird of this.birdList){
            // input is an object and has to be parsed to string
            if (bird.color === String(colorInput)){
                specificColors.push(bird);
            }
        }
        
        if(specificColors.length > 0){
            return specificColors;
        }
        return `No bird with the color: ${colorInput}`; 
    },

    findBySpecies: function(speciesInput){
        const specificSpecies = [];

        for (let bird of this.birdList){
            // input is an object and has to be parsed to string
            if (bird.species === String(speciesInput)){
                specificSpecies.push(bird);
            }
        }
        
        if(specificSpecies.length > 0){
            return specificSpecies;
        }
        return `No bird is of the species: ${speciesInput}`; 
    },

    findByDiet: function(dietInput){
        const specificDiet = [];

        for (let bird of this.birdList){
            // input is an object and has to be parsed to string
            if (bird.diet === String(dietInput)){
                specificDiet.push(bird);
            }
        }
        
        if(specificDiet.length > 0){
            return specificDiet;
        }
        return `No bird eats: ${dietInput}`; 
    }
}

