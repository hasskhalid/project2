import axios from 'axios';

const openPosts = axios.create({
    baseURL: 'https://my-json-server.typicode.com/hasskhalid/database/posts',
});

const getTasks = async() => {
    try {
        const response = await openPosts.get("");
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error('Error making API Request', error);
        throw error;
    }
};

export default{ getTasks }