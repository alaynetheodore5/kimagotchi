import React, {useState} from 'react';

const DisplayTamagotchi = props => {
    const {fullness, happiness, meals, energy, message, image} = props;

    return (
        <div className="display">
            <div className="row">
                <div className="col my-5 stats">
                    <h1 className="mt-4">Kim's Stats:</h1>
                    <h5>Fullness: {props.fullness}</h5>
                    <h5>Happiness: {props.happiness}</h5>
                    <h5>Energy: {props.energy}</h5>
                    <h5>Meals: {props.meals}</h5>
                    <br/>
                    <h5>A message from Kim:</h5>
                    <h3>{props.message}</h3>
                </div>
                <div className="col my-5">
                    <img src={props.image} className="rounded" alt=""/>
                </div>
                
            </div>
            <div className="my-5 rules">
                <h5>Rules:</h5>
                <h5>Take care of Kim K- make sure she is fed, happy and has enough energy. If any of these fall below 0, you lose!</h5>
            </div>
        </div>
    )
}

const Tamagotchi = props => {

    const [fullness, setFullness] = useState(20);
    const [happiness, setHappiness] = useState(20);
    const [meals, setMeals] = useState(3);
    const [energy, setEnergy] = useState(50);
    const [message, setMessage] = useState("Welcome to my site! You'll have to do everything for me.  -xoxo Kim ");
    const [image, setImage] = useState("Images/KimKHello.gif");

    function work() {
        var energyRemaining = energy;
        var chance = randomMeals()*1
        if(energyRemaining >= 5) {
            setMeals(meals + chance)
            setMessage("Kim worked hard for the money!");
            setEnergy(energy - 5);
            setImage("Images/KimKWork.gif");
        }
        else {
            setMessage("Kim is too exhausted to go to work.");
            setMeals(meals);
            setImage("Images/KimKTired.gif");
        }
        checkWin();
    }

    function play() {
        var energyRemaining = energy;
        var playchance = getRandomNum() *1;
        var playliked = randomLiked() *1;
        if(energyRemaining >= 5) {
            if(playliked === 1) {
                setEnergy(energy - 5);
                setHappiness(happiness + playchance);
                setMessage("That made Kim happy!");
                setImage("Images/KimKHappy.gif");
            }
            else {
                setEnergy(energy - 5);
                setMessage("Kim didnt want to play with you right now");
                setHappiness(happiness);
                setImage("Images/KimKSad.gif");
            }
        }
        else {
            setMessage("Kim is literally too tired.");
            setHappiness(happiness);
            setImage("Images/KimKTooTired.gif");
        }
        checkWin();
    }

    function feed() {
        var mealsRemaining = meals;
        var feedChance = getRandomNum() *1;
        var feedLiked = randomLiked() *1;
        if(mealsRemaining >=1) {
            if(feedLiked === 1) {
                setMeals(meals - 1);
                setFullness(fullness + feedChance);
                setMessage("TG that food was just barely up to Kim's standards.");
                setImage("Images/KimKEating.gif");

            }
            else {
                setMeals(meals - 1);
                setMessage("Kim will not eat your gross food.");
                setImage("Images/KimKNotEating.gif");
                setFullness(fullness);
            }
        }
        else {
            setMessage("You are literally starving, Kim.");
            setImage("Images/KimKHungry.gif");
            setFullness(fullness);
        }
        checkWin();
    }

    function sleep() {
        setHappiness(happiness - 5);
        setFullness(fullness - 5);
        setEnergy(energy + 15);
        setMessage("Kim literally needed that nap.");
        setImage("Images/KimKNap.gif");
        checkWin();
    }

    function getRandomNum() {
        var min = 5;
        var max = 10;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
    }

    function randomMeals() {
        var min = 1;
        var max = 3;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
    }
    
    function randomLiked() {
        var min = 1;
        var max = 4;
        var random = Math.floor(Math.random() * (+max +1 - + min)) + +min;
        return random;
    }

    function checkWin() {
        if((energy >= 100) || (fullness >= 100) || (happiness >= 100)) {
            setMessage("you won!");
            //disables buttonshow reset button
            setImage("Images/KimKWin.gif");
        }
        else {
            if((fullness <= 0) || (happiness <= 0)) {
                setMessage("you lose!");
                setImage("Images/KimKSad.gif");
            }
        }
    }

    function reset() {
        setHappiness(20);
        setFullness(20);
        setEnergy(50);
        setMeals(3);
        setMessage("Welcome to my site! You'll have to do everything for me.  -xoxo Kim ");
        setImage("Images/KimKHello.gif");
    }

    return (
        <div className="main">
            <DisplayTamagotchi 
                fullness={fullness}
                happiness={happiness}
                energy={energy}
                meals={meals}
                message={message}
                image={image}
            />
            {
                message === "you won!" || message === "you lose!" ? 
                <div>
                    <button className="btn btn-dark" onClick = {reset} >Reset</button>
                </div> : 
                <div className="text-center">
                    <button className="btn btn-dark" onClick = {work} >Work</button>
                    <button className="btn btn-dark" onClick = {sleep} >Sleep</button>
                    <button className="btn btn-dark" onClick = {feed} >Eat</button>
                    <button className="btn btn-dark" onClick = {play} >Play</button>
                </div>
            }
        </div>
    )

}

export default Tamagotchi;