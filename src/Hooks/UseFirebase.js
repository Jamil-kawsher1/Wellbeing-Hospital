import { onAuthStateChanged, GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const SignInWithGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        const auth = getAuth();



        signInWithPopup(auth, googleProvider)
            .then((result) => {



                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {


                const errorMessage = error.message;

                console.log(errorMessage);
            })
            .finally(() => setIsLoading(false))



    }


    const signInWithGithub = () => {

        setIsLoading(true);
        const githubProvider = new GithubAuthProvider();
        const auth = getAuth();



        signInWithPopup(auth, githubProvider)
            .then((result) => {



                const user = result.user;
                setUser(user);
                console.log(user);
            }).catch((error) => {


                const errorMessage = error.message;

                console.log(errorMessage);
            })
            .finally(() => setIsLoading(false))





    };

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            setIsLoading(true);
            setUser({})
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));



    }
    //observer user state change
    useEffect(() => {
        const auth = getAuth();
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed; //for performance issue

    }, [])


    return {
        user,
        setUser,
        SignInWithGoogle,
        logOut,
        isLoading,
        signInWithGithub,
    }
}
export default useFirebase;