import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../hooks";

type ProgressBar = { total?: number; intense?: number; onEnd?: () => void };
const initialProgress = 0;
const totalProgress = 1000;
const intenseAnimationProgress = 10;

const ProgressBar = ({
  total = totalProgress,
  intense = intenseAnimationProgress,
  onEnd,
}: ProgressBar) => {
  const [progress, setProgress] = useState(initialProgress);

  useIsomorphicLayoutEffect(() => {
    if (total === initialProgress) return;

    const id = setInterval(
      () =>
        setProgress((prev) => {
          const playedSeconds = prev;

          if (playedSeconds === total) {
            clearInterval(id);
            onEnd && onEnd();
            return playedSeconds;
          }
          return playedSeconds + 1;
        }),
      intense
    );
    return () => clearInterval(id);
  }, [total]);

  return (
    <>
      <progress
        className="w-full h-1.5 z-10 rounded-lg"
        value={progress}
        max={total}
      />
      <style jsx>{`
        progress::-webkit-progress-bar {
          background-color: var(--bg-secondary);
          border-radius: var(--border-radius_medium);
        }

        progress::-webkit-progress-value {
          background-color: var(--bg-primary);
          border-radius: var(--border-radius_medium);
        }
      `}</style>
    </>
  );
};

export default ProgressBar;
