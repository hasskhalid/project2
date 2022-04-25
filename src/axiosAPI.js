import axios from 'axios';

const openPosts = axios.create({
    baseURL: 'http://my-json-server.typicode.com/bnissen24/project2DB/posts'
});

const getData = async() => {
    try {
        const response = await openPosts.get("");
        console.log(response.data);
        return response.data;
    } catch(error) {
        console.error('', error);
        throw error;
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default{ getData }