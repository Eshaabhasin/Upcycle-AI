import React from "react";
import { SignedIn,SignedOut,SignInButton,UserButton } from "@clerk/clerk-react";
import './Signin.css';
const Signin=()=>{
    return(
      <>
      <header>
      <SignedOut>
        <SignInButton className="sign-in"/>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
      </>
    )
}

export default Signin;