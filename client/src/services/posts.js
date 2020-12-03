import api from './apiConfig';

//  REFERENCE CODE FROM TASTEVILLE

export const getAllPosts = async () => {
    const resp = await api.get('/posts');
    return resp.data;
}

//Is this compatible with the backend association???? Find out next week on Dragonball Z!
// export const createPost = async (postId, userId) => {
//     const resp = await api.put(`/posts/`);
//     return resp.data;
// }

export const createPost = async (data) => {
    const resp = await api.post('/posts', { post: data });
    return resp.data;
}

export const updatePost = async (id, Data) => {
    const resp = await api.put(`/post/${id}`, { post: Data });
    return resp.data;
}

export const destroyPost = async (id) => {
    const resp = await api.delete(`/post/${id}`);
    return resp;
}