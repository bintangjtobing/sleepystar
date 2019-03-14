////////////////////////////////////////////////////
///////////////------BUTTON CONDITION-------///////////////
/////////////////////////
const defaultBtn = document.getElementsByClassName('rangeprice');
const websitePackage = document.getElementById('monthly').addEventListener("click", displaywebsitepackage);
const yearly = document.getElementById('yearly').addEventListener("click", displayyearprice);

function displaywebsitepackage() {
    defaultBtn[0].classList.add('activeprice');
    defaultBtn[1].classList.remove('activeprice');
    const productTitle = document.getElementsByClassName('cardheaderh2');
    const itemWeb = document.getElementsByClassName('hostingitem');
    const monthlyPerson = document.getElementById('pricepersonal');
    const monthlyTeam = document.getElementById('priceteam');
    const monthlyBusiness = document.getElementById('businessprice');
    const Submonth = document.getElementsByClassName('monthsub');
    monthlyPerson.innerHTML = "200";
    monthlyTeam.innerHTML = "350";
    monthlyBusiness.innerHTML = "700";
    productTitle[0].innerHTML = "Basic Hosting";
    productTitle[1].innerHTML = "Profesional Hosting";
    productTitle[2].innerHTML = "Premium Hosting";
    Submonth[0].innerHTML = "/ Monthly";
    Submonth[1].innerHTML = "/ Monthly";
    Submonth[2].innerHTML = "/ Monthly";
    itemWeb[0].innerHTML = '<i class="fas fa-check mr-4 px-1 py-1"></i>' + '2Gb SSD Storage';
    itemWeb[1].innerHTML = '<i class="fas fa-check mr-4 px-1 py-1"></i>' + 'Unlimited bandwidth';
    itemWeb[2].innerHTML = '<i class="fas fa-check mr-4 px-1 py-1"></i>' + 'Unlimited email';
    itemWeb[3].innerHTML = '<i class="fas fa-check mr-4 px-1 py-1"></i>' + '24/7 support system';
}

function displayyearprice() {
    defaultBtn[0].classList.remove('activeprice');
    defaultBtn[1].classList.add('activeprice');
    const productTitle = document.getElementsByClassName('cardheaderh2');
    const Subyearly = document.getElementsByClassName('monthsub');
    const personalPrice = document.getElementById('pricepersonal');
    const teamPrice = document.getElementById('priceteam');
    const BusinessPrice = document.getElementById('businessprice');
    personalPrice.innerHTML = "400";
    teamPrice.innerHTML = "500";
    BusinessPrice.innerHTML = "1000";
    Subyearly[0].innerHTML = "/ Yearly";
    Subyearly[1].innerHTML = "/ Yearly";
    Subyearly[2].innerHTML = "/ Yearly";
    productTitle[0].innerHTML = "Starter Hosting";
    productTitle[1].innerHTML = "Profesional Hosting";
    productTitle[2].innerHTML = "Masterweb Hosting";
}
