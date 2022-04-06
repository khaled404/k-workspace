import { EisenhowerMatrix } from '@k-workspace/eisenhower-matrix';
import { httpDriver } from '@k-workspace/utils';
import { useEffect } from 'react';

export function Index() {
  const loadData = async () => {
    const data = await httpDriver('api');
    console.log(data);
  };
  useEffect(() => {
    loadData();
  }, []);

  return <EisenhowerMatrix />;
}

export default Index;
