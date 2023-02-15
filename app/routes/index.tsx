import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="/app/links">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}
