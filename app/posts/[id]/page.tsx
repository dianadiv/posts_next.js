import { getAllComments } from '@/app/actions/getComments';
import { getPostById } from '@/app/actions/getPost';
import UserAvatar from '@/app/components/avatar';
import { Paper, Grid, Divider } from '@mui/material';
import { Comment } from "../../types/comment";
import { Fragment } from 'react';

interface Params {
  params: {
    id: string;
  }
}

const PostPage = async ({ params: { id } }: Params) => {
  const post = await getPostById(id);
  const comments = await getAllComments(id);

  return (
    <div className='pb-10'>
      <h1 className="font-black text-6xl mb-3">Get Inspired by users post</h1>
      <div className="flex flex-wrap gap-2 mt-12 max-w-[50%]">
        <h1 className='font-bold text-2xl'>{post?.title}</h1>
        <p className='font-semibold text-xl'>{post?.body}</p>
        <div className="flex justify-between items-end">
          <p className="font-semibold mr-5">Posted by:</p>
          <UserAvatar seed={String(post?.userId)} />
        </div>
      </div>
      <h2 className='font-semibold text-xl mt-10'>Comments:</h2>
      <Paper className='mt-5 p-5 max-w-[70%]'>
        {comments?.map((comment: Comment, index) => {
          const showDivider = index !== comments.length - 1;
          return (
            <Fragment key={comment.id}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid item>
                  <UserAvatar seed={String(comment.id)} />
                </Grid>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 className='font-medium'>{comment.name}</h4>
                  <h4 className='font-medium mb-5'>{comment.email}</h4>
                  <p style={{ textAlign: "left" }}>{comment.body}</p>
                </Grid>
              </Grid>
              {showDivider && <Divider variant="fullWidth" style={{ margin: "30px 0" }} />}
            </Fragment>
          )
        })}
      </Paper>
    </div>
  );
};

export default PostPage;