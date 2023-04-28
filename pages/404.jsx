import Link from "next/link";
import Script from "next/script";

const Error = () => {
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>Oops!</h1>
            <h2>404 - The Page {`can't`} be found</h2>
          </div>
          <Link href={`/`}>Go To Homepage</Link>
        </div>
        <Script src="https://kit.fontawesome.com/4ef8c63dd7.js" crossorigin="anonymous"></Script>
      </div>
    </>
  );
};

export default Error;
