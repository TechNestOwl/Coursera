const favoriteFood = 'Italian';


switch(favoriteFood){
    case 'Sandwhich':
        console.log('my fave food is a sandwhich');
        break
    case 'Pizza':
        console.log('I love pizza');
        break
    case "Nacho's":
        console.log("Me gusta nachos!")
        break
    case 'Italian':    //both italian and pasta will trigger this case
    case 'Pasta':
        console.log("Mama mia, I love pasta!")
        break
    default:        // default will fire if no other case is matched
        console.log("I don't have a fave food.")
};