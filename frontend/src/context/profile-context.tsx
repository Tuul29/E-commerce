"use client";

import { createContext, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { apiURL } from "@/utils/homeAPI";
import { useState } from "react";

interface IUser {
  firstname: String;
  lastname: String;
  email: String;
  password: String;
  repassword: String;
}
interface ProContextType {
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  getCurrentUser: () => void;
  postUserData: () => void;
  verifyUserEmail: () => void;
  verifyUserOtp: () => void;
  setOtpEmail: Dispatch<SetStateAction<object>>;
  userForm: IUser;
}

export const ProfileContext = createContext<ProContextType>({
  handleLogForm: (e: React.ChangeEvent<HTMLInputElement>) => {},
  getCurrentUser: () => {},
  postUserData: () => {},
  verifyUserEmail: () => {},
  verifyUserOtp: () => {},
  setOtpEmail: () => {},
  userForm: {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  },
});

export const ProfileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const [userForm, setUserForm] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [user, setUser] = useState<IUser>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [otpEmail, setOtpEmail] = useState<object>({
    otp: "",
    email: "",
  });
  const handleLogForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };
  const postUserData = async () => {
    try {
      const { firstname, repassword, lastname, email, password } = userForm;
      if (password !== repassword) {
        return console.log("password don't match");
      }
      console.log("object", firstname);
      const newForm = { firstname, lastname, email, password };
      const res = await axios.post(`${apiURL}/logup`, newForm);

      if (res.status === 200) {
        toast.success("Customer created successfully:");
        router.push("/Login");
      } else {
        toast.error("Failed to create customer");
        console.error("Failed to create customer:");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  const getCurrentUser = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${apiURL}auth/current-user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("first");
      // if (res.status === 400) {
      //   console.log("burtgelgui hereglegch bn");
      // }
      if (res.status === 200) {
        const { user } = res.data;
        setUser(user);
        console.log("USERRR", res.data.user);
        // router.push("/dashboard");
      } else {
        console.error("Failed customer:");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to sign in. Please try again.");
    }
  };

  console.log("UF", user);

  const verifyUserEmail = async () => {
    const { email } = userForm;
    try {
      const res = await axios.post(`${apiURL}/verify/email`, email);
      if (res.status === 400) {
        console.log("burtgelgui hereglegsh bn");
      }
      if (res.status === 200) {
        const { email } = res.data;
        setOtpEmail({
          email: email,
        });
        console.log("burtgeltei hereglegch bn", email);
      } else {
        console.error("Failed customer:");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to sign in. Please try again.");
    }
  };

  const verifyUserOtp = async () => {
    try {
      const res = await axios.post(`${apiURL}/verify/otp`, otpEmail);
      if (res.status === 400) {
        console.log("burtgelgui hereglegsh bn");
      }
      if (res.status === 200) {
        console.log("email ruu n link ilgeeleee");
      } else {
        console.error("Failed customer:");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to sign in. Please try again.");
    }
  };
  return (
    <ProfileContext.Provider
      value={{
        handleLogForm,
        postUserData,
        getCurrentUser,
        verifyUserEmail,
        setOtpEmail,
        verifyUserOtp,
        userForm,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
