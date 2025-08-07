"use client";
import { createUser } from '@/app/api';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {

    const router = useRouter();


    const [loading, setLoading] = useState(false);

    const [userInfo, setuserInfo] = useState({
        name: "",
        email: ""
    })


    const createUserProfile = () => {

        if (!userInfo.name || !userInfo.email) {
            toast.error("Please fill in all fields");
            return;
        }

        setLoading(true);
        createUser(userInfo
        ).then((data) => {
            console.log("User created successfully:", data);
            toast.success("User created successfully");
            setuserInfo({ name: "", email: "" });
            router.push('/');

        }).catch((error) => {
            console.error("Error creating user:", error);
        }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <div>
            <p>create a user</p>

            <form>
                <label>
                    Name:
                    <input
                        type="text"
                        required
                        value={userInfo.name}
                        onChange={(e) => setuserInfo({ ...userInfo, name: e.target.value })}
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        required
                        value={userInfo.email}
                        onChange={(e) => setuserInfo({ ...userInfo, email: e.target.value })}
                    />
                </label>
                <br />
                <button type="button" onClick={createUserProfile} disabled={loading}>
                    {
                        loading ? "Creating User..." : "Create User"
                    }
                </button>
            </form>
        </div>
    )
}

export default page