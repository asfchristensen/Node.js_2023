
module.exports = {

    birdList: [
        {id : 1, name : "Robin", species : "sparrow", color : "red", diet : "seeds"},
        {id : 2, name : "Eagle", species : "bird", color : "brown", diet : "fish"},
        {id : 3, name : "Raven", species : "crow", color : "black", diet : "everything"},
        {id : 4, name : "Blackbird", species : "sparrow", color : "black", diet : "seeds"}
    ],

     // --- POST --- //

     createBird: function(bird) {
        let nextId = this.birdList.length + 1; 
        const birdToSave = { id: nextId++, ...bird };
        this.birdList.push(birdToSave);
        return birdToSave;
    },

    // --- GET --- //

    findById: function(id) {
        const birdWithId = this.birdList.find(bird => bird.id === Number(id));
        if (birdWithId) { return birdWithId }
        else { return `No bird found with id ${id}` };
    },

    findByColor: function(color) {
        const birdsWithColor = this.birdList.filter(bird => bird.color === color);
        if (birdsWithColor.length !== 0) { return birdsWithColor }
        else { return `No birds with the color ${color}` };
    },

    findBySpecies: function(specie) {
        const birdSpecies = this.birdList.filter(bird => bird.species === specie);
        if ( birdSpecies.length !== 0 ) { return birdSpecies }
        else { return `No birds with the specie ${specie}` }; 
    },

    findByDiet: function(diet) {
        const birdDiet = this.birdList.filter(bird => bird.diet === diet);
        if ( birdDiet.length !== 0 ) { return birdDiet }
        else { return `No bird eats ${diet}` };
    },

    // --- PATCH --- //

    updateBird: function(id, bird) {
        const foundBird = this.birdList.find(bird => bird.id === Number(id));
        if ( !foundBird ) { return `No bird found with id: ${id}` };
        if ( bird.name ) { foundBird.name = bird.name }; 
        if ( bird.species ) { foundBird.species = bird.species }; 
        if ( bird.color ) { foundBird.color = bird.color }; 
        if ( bird.diet ) { foundBird.diet = bird.diet }; 
        return foundBird;
    },

    // --- DELETE --- //

    deleteBird: function(id) {
        if ( this.birdList.find(bird => bird.id === Number(id)) ) {
            return this.birdList.filter(bird => bird.id !== Number(id));
        } else { 
            return `No bird with id: ${id} to delete`;
        }
    }
}
