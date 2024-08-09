'use client';

import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const ReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const actualScroll = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (actualScroll / scrollHeight) * 100;
      setProgress(percentage);
    }

    window.addEventListener('scroll', updateScroll);
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed max-w-[1220px] w-full top-[72px] z-10">
      {progress ? <LinearProgress variant="determinate" value={progress} /> : null}
    </div>
  )
};

export default ReadingProgress;