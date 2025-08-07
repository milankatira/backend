"use client";
import { getUserById } from '@/app/api';
import { Iuser } from '@/app/types';
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const page = () => {


    const { id } = useParams();

    const [userDetails, setUserDetails] = useState<Iuser | null>(null);

    useEffect(() => {
        if (!id) return;

        getUserById(id as string).then((data) => {
            setUserDetails(data);
        }).catch((error) => {
            console.error("Error fetching user details:", error);
        });

    }, [id]);

    return (
        <div>
            <h1>User Details</h1>
            {userDetails ? (
                <div>
                    <p><strong>ID:</strong> {userDetails.id}</p>
                    <p><strong>Name:</strong> {userDetails.name}</p>
                    <p><strong>Email:</strong> {userDetails.email}</p>
                    <p><strong>Role:</strong> {userDetails.role}</p>
                </div>
            ) : (
                <p>Loading user details...</p>
            )}
        </div>
    )
}

export default page