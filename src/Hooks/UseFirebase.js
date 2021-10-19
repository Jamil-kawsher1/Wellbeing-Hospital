import { signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, getAuth, signInWithPopup, signOut, GithubAuthProvider } from "firebase/auth";
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

    const userSignup = (name, email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                if (user.displayName === null) {

                    updateUserInfo(name);
                }
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });




    }

    const updateUserInfo = (name) => {
        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: `${name}`,

        }).then(() => {
            // Profile updated!
            // ...

        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    const singInwithPasswordMail = (email, password) => {

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }

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
        userSignup,
        singInwithPasswordMail,
        updateUserInfo,
    }
}
export default useFirebase;