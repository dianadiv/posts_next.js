import { BASE_URL } from "../constants/baseUrl";
import { Post } from "../types/post";

export const getAllPosts = async (): Promise<Post[]> => {
  return fetch(`${BASE_URL}/posts`, { cache: 'force-cache' })
    .then(res => res.json());
}