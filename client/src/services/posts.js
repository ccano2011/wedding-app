import api from './apiConfig';

//  REFERENCE CODE FROM TASTEVILLE

export const getAllPosts = async () => {
    const resp = await api.get('/posts');
    return resp.data;
}

//Is this compatible with the backend association???? Find out next week on Dragonball Z!
export const createPost = async (postId, userId) => {
    const resp = await api.put(`/posts/${postId}/user/${userId}`);
    return resp.data;
}