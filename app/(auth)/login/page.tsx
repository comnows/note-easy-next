"use client";

import FormInput from "@/app/(auth)/FormInput";
import ProtectedAuthRoute from "@/app/component/auth/ProtectedAuthRoute";
import { auth } from "@/app/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

function Login() {
  const router = useRouter();
  const handleSignin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ProtectedAuthRoute>
      <div className="h-screen flex justify-center items-center">
        <form
          onSubmit={handleSignin}
          className="flex-1 flex flex-col items-center bg-white max-w-2xl rounded-xl shadow-xl p-8 m-8"
        >
          <h1 className="text-3xl font-semibold">Login</h1>
          <div className="w-full flex flex-col mt-4">
            <FormInput name="email" label="Email" type="email" />
          </div>
          <div className="w-full flex flex-col mt-4">
            <FormInput name="password" label="Password" type="password" />
          </div>
          <div className="text-sm mt-8">
            Don&#39;t have any account?
            <Link
              href={"/register"}
              className="hover:font-semibold cursor-pointer"
            >
              {" "}
              Register
            </Link>
          </div>
          <button className="w-full bg-black hover:bg-black/80 text-white font-semibold rounded-full uppercase px-4 py-2 mt-4">
            Sign in
          </button>
        </form>
      </div>
    </ProtectedAuthRoute>
  );
}

export default Login;
