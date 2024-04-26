
class Die {
    //Number of sides on dice
    #sides = 6;


    //default constructor
    constructor(){}

    //Getter function for sides
    getSides() {
        return this.#sides;
    }

    //Method for rolling a die
    roll() {
        return Math.floor(Math.random() * 6 + 1);
    }
}

const die = new Die();

const button = document.getElementById('roll');

button.addEventListener('click', function () {
    let cube = document.getElementById('cube');
    let result = die.roll();
    
    let iSpinsX = Math.floor(Math.random() *4 + 3) * 360;
    let iSpinsY = Math.floor(Math.random() *4 + 3) * 360;


    cube.style.transition = 'none';
    cube.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';

    void cube.offsetWidth;

    let rotationX = 0, rotationY = 0;

    switch(result) {
        case 1:
            rotationX = 0 + iSpinsX;
            rotationY = 0 + iSpinsY;
            break;
        case 2:
            rotationX = 0 + iSpinsX; 
            rotationY = -90 + iSpinsY;
            break;
        case 3:
            rotationX = 0 + iSpinsX; 
            rotationY = 180 + iSpinsY;
            break;
        case 4:
            rotationX = 0 + iSpinsX; 
            rotationY = 90 + iSpinsY;
            break;
        case 5:
            rotationX = -90 + iSpinsX; 
            rotationY = 0 + iSpinsY;
            break;
        case 6:
            rotationX = 90 + iSpinsX; 
            rotationY = 0 + iSpinsY;
            break;    
        
    }
    
    cube.style.transition = 'transform 2s ease-out';
    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    console.log('Rolled value:',result);
});

