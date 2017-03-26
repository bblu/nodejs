var pet = {
    words: 'hello world',
    speak: function(){
        console.log(this.words);
        console.log(this == pet);
    }
}

pet.speak();

function dog(words){
    this.words = words;
    console.log(this.words);
    console.log(this===global);
};

dog('hello dog');

function MyPet(words){
    this.words = words;
    this.speak = function(){
        console.log(this.words);
    };
};

var myCat = new MyPet('Miao...');

myCat.speak();
