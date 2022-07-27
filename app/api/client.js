import { create}from 'apisauce';
const apiClient = create({
    baseURL:"http://192.168.0.1:3000/api/users"
});
export default apiClient;
// apiClient.get('/listings').then(response =>{
// if(!response.ok){
//     response.problem
// }
// })