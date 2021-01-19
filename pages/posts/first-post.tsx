import Link from "next/link";
import Head from "next/head";
export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <input type="text" placeholder="Default focus style" className="..." />

      <input
        type="text"
        placeholder="Custom focus style"
        className="focus:outline-none focus:ring focus:border-blue-300 ..."
      />
      <h2>
        <h1>First Post</h1>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
