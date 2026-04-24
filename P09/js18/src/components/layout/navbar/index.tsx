import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Script from "next/dist/client/script";

const Navbar = () => {
  const { data } = useSession();
  //const { data: session } = useSession()
  // console.log("session", session)
  console.log("data", data);
  return (
    <div className={styles.navbar}>
      {/* <div className={styles.navbar__brand}>MyApp</div> */}

      <div className={styles.navbar__brand} id="title"></div>
      <Script id="title-script" strategy="lazyOnload">
        {`document.getElementById('title').innerHTML = 'MyApp';`}
      </Script>

      <div className={styles.navbar__right}>
        {data ? (
          <>
            <div className={styles.navbar__user}>
              <span className={styles.navbar__user__text}>
                Welcome, {data.user?.fullname}
              </span>
              {data.user.image && (
                <Image
                  src={data.user.image}
                  alt={data.user.fullname || "User avatar"}
                  width={42}
                  height={42}
                  className={styles.navbar__user__image}
                  priority={false}
                />
              )}
            </div>
            {(data.user.role === "admin" || data.user.role === "editor") && (
              <Link href="/editor" className={styles.navbar__link}>
                Editor
              </Link>
            )}
            {data.user.role === "admin" && (
              <Link href="/admin" className={styles.navbar__link}>
                Admin
              </Link>
            )}
            <button
              className={`${styles.navbar__button} ${styles["navbar__button--danger"]}`}
              onClick={() => signOut()}
            >
              Sign Out
            </button>
          </>
        ) : (
          <button
            className={`${styles.navbar__button} ${styles["navbar__button--primary"]}`}
            onClick={() => signIn()}
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
