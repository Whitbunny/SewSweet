import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from "firebase/auth";

const auth = getAuth();

const login = async (): Promise<void> => {
  const provider = new GoogleAuthProvider();
  try {
    const userCredential: UserCredential = await signInWithPopup(auth, provider);
    console.log("Logged in:", userCredential.user.displayName);
    alert("Logged in!");
  } catch (error) {
    console.error("Login failed:", error);
    alert("Login failed!");
  }
};

const logout = async (): Promise<void> => {
  try {
    await signOut(auth);
    alert("Logged out!");
  } catch (error) {
    console.error("Logout failed:", error);
    alert("Logout failed!");
  }
};

export { login, logout };
