import { useEffect, useState } from 'react';
import LoadingScreen from './LoadingScreen';

const ClientLoader = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true);
    }, 2000);
  }, [setHasMounted]);

  if (!hasMounted) return <LoadingScreen hasMounted={hasMounted} />;

  return <>{children}</>;
};

export default ClientLoader;
