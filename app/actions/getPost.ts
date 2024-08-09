import { BASE_URL } from "../constants/baseUrl";
import { Post } from "../types/post";

export const getPostById = async (id: string): Promise<Post> => {
  return fetch(`${BASE_URL}/posts/${id}`)
    .then(res => res.json());
}