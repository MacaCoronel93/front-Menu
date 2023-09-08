import { useRouteError } from "react-router-dom";
import NotFoundPage from '@/pages/NotFound.jsx';

export default function NotFound() {
  const error = useRouteError();
  console.error(error);

  return (
   <NotFoundPage />
  )
}
