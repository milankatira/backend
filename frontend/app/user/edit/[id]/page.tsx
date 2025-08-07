"use client";
import { createUser, getUserById, updateUser } from '@/app/api';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { id } = useParams();


    const [userInfo, setuserInfo] = useState({
        name: "",
        email: ""
    })


    useEffect(() => {
        if (!id) return;
        getUserById(id as string).then((data) => {
            setuserInfo(data);
        }).catch((error) => {
            console.error("Error fetching user details:", error);
        });
    }, [id]);


    const updateUserProfile = () => {

        if (!userInfo.name || !userInfo.email) {
            toast.error("Please fill in all fields");
            return;
        }
        if (!id) {
            toast.error("User ID is required for updating");
            return;
        }

        if (userInfo.name === null || userInfo.name === undefined || userInfo.email === null || userInfo.email === undefined) {
            toast.error("Invalid user data");
            return;
        }
        setLoading(true);
        updateUser(id as string, userInfo
        ).then((data) => {
            console.log("User updated successfully:", data);
            toast.success("User updated successfully");
            setuserInfo({ name: "", email: "" });
            router.push('/');
        }).catch((error) => {
            console.error("Error updating user:", error);
        }).finally(() => {
            setLoading(false);
        });
    }
    return (
        <div>
            <p>edit a user</p>
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
                <button type="button" disabled={loading} onClick={updateUserProfile}>
                    {loading ? "Updating User..." : "Update User"}
                </button>
            </form>
        </div>
    )
}

export default page