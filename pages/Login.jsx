import { useState, useEffect } from "react";
import { supabase } from "../components/Utils/supabaseClient";
import Account from "../components/Utils/Account";
import styles from "../components/Utils/Login/Login.module.scss";
import Auth from "../components/Utils/Auth";

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <div className={styles.loginContainer}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}
