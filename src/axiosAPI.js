import axios from 'axios';

const openPosts = axios.create({
    baseURL: 'https://my-json-server.typicode.com/bnissen24/project2DB/posts'
});

const getPosts = async() => {
    try {
        const response = await openPosts.get("");
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error('', error);
        throw error;
    }
};

export default{ getPosts }