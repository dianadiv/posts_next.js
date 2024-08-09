import { BASE_URL } from "../constants/baseUrl";
import { Comment } from "../types/comment";

export const getAllComments = async (id: string): Promise<Comment[]> => {
  return fetch(`${BASE_URL}/posts/${id}/comments`)
    .then(res => res.json());
}