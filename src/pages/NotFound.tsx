import { NavLink } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Column, Link } from "../components/styled";
import { Path } from "../routing/Router";

export const NotFoundPage = () => {
  return (
    <Layout>
      <Column align="center">
        <h2 className="p-4 font-semibold">Page not found</h2>
        <Link>
          <NavLink to={Path.Home} replace>
            Go to home page
          </NavLink>
        </Link>
      </Column>
    </Layout>
  );
};
