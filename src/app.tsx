import Router from "preact-router";
import AsyncRoute from "preact-async-route";
import { routes } from "./routes";

const prerenderedContent = document.getElementById("preact")?.innerHTML;

type Props = {};

export function App({}: Props) {
  const loading = () =>
    prerenderedContent ? (
      <div dangerouslySetInnerHTML={{ __html: prerenderedContent }} />
    ) : (
      <div>Loading...</div>
    );

  return (
    <div id="preact">
      <Router>
        {routes.map((route) => (
          <AsyncRoute
            path={route.path}
            getComponent={route.getComponent}
            loading={loading}
          ></AsyncRoute>
        ))}
      </Router>
    </div>
  );
}
