var userScore = 0;
var machineScore = 0; 
var percent = 0;
var count = 0;
 

$('#button').click(function (){
count++;
var userChoice = $('#shifumi-select').val();
var machineChoice = machineChoiceRandom(1,3);
var compare;//=$('#compare');


result =  parseInt(userChoice + machineChoice);
switch(result){
    case 21:
        compare='La feuille couvre la pierre. L\'humain Gagne !';
        $('#humainImg').attr('src', 'assets/img/feuille.png');
        $('#machineImg').attr('src', 'assets/img/pierre.png');
        userScore++;
    break;
    case 22:
        compare='Feuille - Feuille.  Egalité.';
        $('#humainImg').attr('src', 'assets/img/feuille.png');
        $('#machineImg').attr('src', 'assets/img/feuille.png');
        break;
    case 23:
        compare='Les ciseaux coupe la feuille. La machine Gagne !';
        $('#humainImg').attr('src', 'assets/img/feuille.png');
        $('#machineImg').attr('src', 'assets/img/ciseaux.png');
        machineScore++;
    break;
    
    
    case 11:
        compare='Pierre - Pierre.  Egalité.';
        $('#humainImg').attr('src', 'assets/img/pierre.png');
        $('#machineImg').attr('src', 'assets/img/pierre.png');
    break; 
    case 12:
        compare='La feuille couvre la pierre, La machine Gagne !';
        $('#humainImg').attr('src', 'assets/img/pierre.png');
        $('#machineImg').attr('src', 'assets/img/feuille.png');
        machineScore++;
    break; 
    case 13:
        compare='La pierre casse les ciseaux  L\'humain Gagne !';
        $('#humainImg').attr('src', 'assets/img/pierre.png');
        $('#machineImg').attr('src', 'assets/img/ciseaux.png');
        userScore++;
    break;
    case 31:
        compare='La pierre casse les ciseaux. La machine Gagne !';
        $('#humainImg').attr('src', 'assets/img/ciseaux.png');
        $('#machineImg').attr('src', 'assets/img/pierre.png');
        machineScore++;
    break;
    case 32:
        compare='Les ciseaux coupent la feuille.  L\'humain Gagne !';
        $('#humainImg').attr('src', 'assets/img/ciseaux.png');
        $('#machineImg').attr('src', 'assets/img/feuille.png');
        userScore++;
    break;
    case 33:
        compare='Ciseaux - Ciseaux. Egalité.';
        $('#humainImg').attr('src', 'assets/img/ciseaux.png');
        $('#machineImg').attr('src', 'assets/img/ciseaux.png');
    break;
    default:
        compare='??';
}
   
console.log(result);
$('#compare').text(compare);

$('#success').text(`Nombre de succes: ${userScore}`);

$('#defeat').text(`Nombre de défaites: ${machineScore}`);
percent = ((userScore / (count) ) * 100).toFixed(2);

$('#percentSuccess').text(`Taux de succès: ${percent}%.`);
});



function machineChoiceRandom(min, max)
{
 return Math.floor(Math.random() * (max - min + 1)) + min;
}