/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


function buildUserProfile(email){
    
    
}
/*Esto esta muy chancho pero es para la demostracion
 * lo que hace es retornar un objecto usuario para ser
 * usado por quien lo llame*/
function getUserByEmail(email){
    
    //villevillegas2@gmail.com
    //esaco02@gmail.com
    //pabloarayane0211@gmail.com
    var userObject = {};
    switch(email){
        case "villevillegas2@gmail.com":
            userObject.name = "Sergio";
            userObject.lastName = "Villegas";
            userObject.email = email;
            userObject.favoriteCountry = "Panamá";
            userObject.urlPicture = "";
        break;
        case "esaco02@gmail.com":
            userObject.name = "Ernesto";
            userObject.lastName = "Saborío";
            userObject.email = email;
            userObject.favoriteCountry = "Costa Rica";
            userObject.urlPicture = "";
        break;
        case "pabloarayane0211@gmail.com":
            userObject.name = "Pablo";
            userObject.lastName = "Araya";
            userObject.email = email;
            userObject.favoriteCountry = "México";
            userObject.urlPicture = "";
        break;
        default:
            userObject.name = "";
            userObject.lastName = "";
            userObject.email = "";
            userObject.favoriteCountry = "";
            userObject.urlPicture = "";
        
    }
    return userObject;
}


function doLogin(email){
    
    var user = getUserByEmail(email);
    
    /*Se cambia las leyendas login y register por el nombre del usuario conectado*/
    $("#loginButton").parent(".row").attr("hidden","hidden");
    $("#countryImage").parent().parent(".row").before("<row><div id = 'userLoggedButton' class='col-md-12'><a href=#>Hola "+user.name+" <span class='glyphicon glyphicon-chevron-down'></span></a></div></row>");
}
