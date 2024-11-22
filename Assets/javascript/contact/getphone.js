
const getPhone= async ()=>{
    const {data}=await axios.get('https://restcountries.com/v3.1/all');
    return data;
}

const fetchPhoneWithFlag=async ()=>{
const data =await getPhone();
const HTMLContent= data.map((el)=>{
    

    return `<li><a class="dropdown-item" href="#"><img class="flags" src="${el.flags.svg}" alt="" width="20px" height="20px"> ${el.name.common}</a></li>`;
}).join("");
console.log(HTMLContent);
document.querySelector(".dropdown-menu").innerHTML=HTMLContent;
document.querySelector(".dropdown-toggle").innerHTML=`<img class="flags" src="${data[0].flags.svg}" alt="" width="20px" height="20px"> `;
document.querySelector(".loader-cont").style.display="none";
}

fetchPhoneWithFlag();