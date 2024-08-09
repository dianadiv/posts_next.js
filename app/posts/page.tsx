import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Post } from "../types/post";
import { getAllPosts } from "../actions/getAllPosts";
import UserAvatar from '../components/avatar';
import Link from 'next/link';
import { Button } from '@mui/material';
import ReadingProgress from '../components/readingProgress';

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <>
      <ReadingProgress />
      <div>
        <h1 className="font-black text-6xl mb-3">Get Inspired</h1>
        <p className="font-normal text-xl block w-8/12">
          Browsing for your next long-haul trip,everyday journey, or just fancy a a look at what is new?
          From community favourites to abput-to-sell-out items, see them all here
        </p>
        <div className="flex justify-between flex-wrap gap-2 mt-10">
          {posts.map((item: Post) => (
            <Card key={item.id} className="w-[280px] p-2 rounded-md hover:cursor-pointer hover:shadow-2xl flex flex-col justify-between">
              <div>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="/images/post.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h1" className="capitalize">{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" className="capitalize">{item.body.slice(0, 80)} ...</Typography>
                </CardContent>
              </div>
              <div>
                <div className="flex justify-between items-end p-4">
                  <p className="font-semibold">Posted by:</p>
                  <UserAvatar seed={String(item.userId)} />
                </div>
                <CardActions className="p-3">
                  <Button size="small">
                    <Link href={`/posts/${item.id}`} passHref>Read post</Link>
                  </Button>
                </CardActions>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  )
}

export default Posts;
