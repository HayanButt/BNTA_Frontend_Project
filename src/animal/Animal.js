import fish from '../fish.jpg'
import cat from '../cat.jpg'
import dog from '../dog.jpg'
import catAudio from "../cat.mp3"
import dogAudio from "../dog.mp3"
import fishAudio from "../fish.mp3"

const Animal = ({userAnimal, deleteAnimal}) => {

    const catSound = new Audio(catAudio);
    const dogSound = new Audio(dogAudio);
    const fishSound = new Audio(fishAudio);

    const handleAnimalTypeSound = (userAnimal) => {
        const selectedAnimalTypeId = (userAnimal.animalType.id);
        console.log(`Playing sound for animal type ${selectedAnimalTypeId}`);

        if (selectedAnimalTypeId === 1) {
            catSound.play();
        } else if (selectedAnimalTypeId === 2) {
            dogSound.play();
        } else if (selectedAnimalTypeId === 3) {
            fishSound.play();
        }
    };
    return ( 
        <div className="animal-container">
            {userAnimal.animalType.animalTypeName === "Cat" ? <img src={cat} className="cat-image" width={150} height={200} alt="an image of a cat"/>: null}
            {userAnimal.animalType.animalTypeName == "Dog" ? <img src={dog} className="dog-image" width={150} height={200} alt="an image of a dog"/>: null}
            {userAnimal.animalType.animalTypeName == "Fish" ? <img src={fish} className="fish-image" width={150} height={200} alt="an image of a fish"/>: null}
        
            <h3>{userAnimal.name}</h3>
            <p>Birthday: {userAnimal.birthday}</p>
            <p>Pet Type: {userAnimal.animalType.animalTypeName}</p>

            <button onClick={() => {
                deleteAnimal(userAnimal.id);
                handleAnimalTypeSound(userAnimal);
            }}>Delete Pet</button>
            
            
        </div>
     );
}
 
export default Animal;