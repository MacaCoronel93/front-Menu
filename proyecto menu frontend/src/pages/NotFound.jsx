import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>ACA PODEMOS PERSONALIZAR LA PÁGINA DE ERROR.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}