
export default generateName = () => {
  return names[Math.floor(Math.random()*names.length)] + ' ' + lastNames[Math.floor(Math.random()*lastNames.length)];
}

const names = [
'Tennille', 'Tyler', 'Forest', 'Leana', 'Jadwiga',
'Dino', 'Juliane', 'Bobbi', 'Bette', 'Marvin',
'Cris', 'Odell', 'Leo', 'Brinda', 'Emmitt',
'Aleida', 'Theresia', 'Audrea', 'Darrel', 'Timika',
'Tabatha', 'Taylor', 'Alfredo', 'Dee', 'Gale',
'Wenona', 'Scarlett', 'Rueben', 'Vennie', 'Erich'];

const lastNames = [
'the Cat', 'Cattington', 'Catson', 'Cattarina', 'Catsalot',
'Clawsby', 'Catapult', 'Catastrophe', 'Catillac', 'Catsanova',
'Catsup', 'Cat-titude', 'Catzilla', 'Clawsome'];