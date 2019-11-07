function submitAndVerif()
{
  var regexFirstName = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  var regexLastName = /^[A-Z -]+$/;
  var regexBirthDate = /^([0-9]{4})+-+([0-1][0-9])+-+([0-9]{2})$/;
  var regexBirthCity = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/;
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var birthDate = $('#birthDate').val();
  var birthCity = $('#birthCity').val();
  var job = $('#job').val();
  var business = $('#business').val();
  testFirstName = regexFirstName.test(firstName);
  console.log(testFirstName)
  testLastName = regexLastName.test(lastName);
  console.log(testLastName);
  testBirthDate = regexBirthDate.test(birthDate);
  console.log(testBirthDate);
  testBirthCity = regexBirthCity.test(birthCity);
  if  (testLastName === false) {
    return alert('Entrez un nom valide comme sur l\'exemple !')
  }
  else if (testFirstName === false) {
    return alert('Entrez un prénom valide comme sur l\'exemple !')
  }
  else if (testBirthDate === false) {
    return alert('Entrez une date de naissance valide comme sur l\'exemple !')
  }
  else if (testBirthCity === false) {
    return alert('Entrez une ville de naissance valide comme sur l\'exemple !')
  }
  else {
    var date = birthDate.split('-').reverse().join('-');
    alert(`${firstName} ${lastName}, né le ${date} à ${birthCity}, actuellement ${job} à ${business}.`);
  }
  //Jérôme OTT, né le 5/06/1990 à Margny-lès-Compiègne, actuellement Formateur à Novei
}
$(document).ready(function(){
  $('input[type=button]').on('click', submitAndVerif);
})
