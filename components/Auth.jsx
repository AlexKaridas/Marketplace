import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import styles from "../styles/Login.module.css";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const handleLogin = async (email) => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email });
      if (error) throw error;
      alert("Check your email for the login link!");
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Marketplace owner login</h1>
        <p className={styles.description}>
          Sign in via link with your email below
        </p>
        <div>
          <input
            className={styles.input}
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <button
            id="button"
            onClick={(e) => {
              e.preventDefault();
              handleLogin(email);
              changeborder();
            }}
            className={styles.button}
            disabled={loading}
          >
            <span>{loading ? "Loading" : "Send magic link"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
