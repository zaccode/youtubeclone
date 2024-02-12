import axios from "axios";

const url= 'https://youtube138.p.rapidapi.com';
const options = {
//   method: 'GET',
  params: {
    // q: 'desp',
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key': '90bde50d83msh46f5ce89632a866p1698d1jsnb7199586d719',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};

// axios
//   .request(`${url}`,options)
//   .then(function (response) {
//     console.log(response.data); // Log the API response data to the console
//   })
//   .catch(function (error) {
//     console.error(error);
//   });


  let fetchDataFromApi = async(dat) =>{
    const data = await axios.get(`${url}/${dat}`,options)
    return data;
 }

 console.log(fetchDataFromApi("search/?q=home").then((res)=>{console.log(res.data)}));
