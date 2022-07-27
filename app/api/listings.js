import client from './client';
const endpoint = '/list'
const getListings= () => client.post( endpoint);
export default{
    getListings,
}