import { CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <div className="pt-24">
      <CircularProgress size={140} sx={{ margin: 'auto', display: 'flex' }} />
    </div>
  )

};

export default Loading;