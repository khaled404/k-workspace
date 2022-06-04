import { LoadingCircle } from '@k-workspace/shared/svg';

/* eslint-disable-next-line */
export interface LoadingScreenProps {}

export function LoadingScreen(props: LoadingScreenProps) {
  return (
    <div className="inset-full flex items-center justify-center py-52">
      <LoadingCircle className="w-14 h-1w-14" />
    </div>
  );
}

export default LoadingScreen;
