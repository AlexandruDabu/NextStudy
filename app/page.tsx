import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>First page</h1>
      <ul>
        <li>
          <Link href="/dashboard/users">to Users</Link>
        </li>
        <li>
          <Link href="/dashboard/analytics">to analytics</Link>
        </li>
      </ul>
    </div>
  );
}
