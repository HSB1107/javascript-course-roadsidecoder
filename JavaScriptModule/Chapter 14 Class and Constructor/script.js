// Class and Constructor

class Teacher {
    // What the constuctor is doing inside the class body?
    /**
     * the class keyword doesn't take any parameters like a function does, 
     * that task is done by the constructor method / functions inside the class body
     * binds the variables to the class / attributes
     * 
     * When a new object is created, it does the assignment work + (any other work done inside the constructor method)
     */

    constructor(name, channel, likes = 0) {
        this.name = name;
        this.channel = channel;
        this.videoLikes = likes;
    }

    intro(){
        return `Hey this is ${this.name} and welcome to ${this.channel}`
    }

    like(){
        this.videoLikes++;
        return `Liked the video! Current videoLikes: ${this.videoLikes}`
    }
}

var teacher1 = new Teacher("HSB", "DSA Simplified");

function TeacherFunctional(name, channel, likes = 0) {
    this.name = name;
    this.channel = channel;
    this.videoLikes = likes;
}

TeacherFunctional.prototype.intro = function () {
    return `Hey this ${this.name} from functional variant and welcome to ${this.channel}`
}

TeacherFunctional.prototype.like = function () {
    this.videoLikes++;
    return `Liked the video! Current videoLikes: ${this.videoLikes}`;
}

var teacherFunctional1 = new TeacherFunctional("Ghp", "082", 1000000000);

// Inheritance

class YoutubeTeacher extends Teacher{
    constructor(name, channel, likes, subscribers){
        // In case of functional, Animal.call(this, ..args)
        super(name, channel, likes);
        this.subscribers = subscribers;
    }

    subscribersCount(){
        return `${this.channel} has ${this.subscribers} subscribers`;
    }

    private(){

    }
}

var ytTeacher = new YoutubeTeacher("HSB", "DSA Simplified", 420, 69);


// Q: Which approach is better and WHY?

// APPROACH A
const obj1 = {
    name: "HSB",
    channel: "DSA Simplified",
    getIntro(){
        return `Hey this is ${this.name} and welcome to ${this.channel}`;
    }
}

// APPROACH B
class Teacher {
    constructor(name, channel) {
        this.name = name;
        this.channel = channel;
    }
    getIntro(){
        return `Hey this is ${this.name} and welcome to ${this.channel}`;
    }
}

/**
 * APPROACH B is better,
 * in case of A, the closure is maintained for each copy of the object, 
 * while in case of the class approach, the method is registered at the prototype level
 * All the instances share that method via, Teacher.prototype, so more memory efficient method
 */

