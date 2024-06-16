import React, { useEffect, useState } from 'react';
import { auth, db } from '/src/components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

function Profile() {
    const [userDetails, setUserDetails] = useState(null);

    const fetchUserData = async (user) => {
        if (user && user.uid) {
            try {
                const docRef = doc(db, "Users", user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching user data: ", error);
                toast.error("Failed to fetch user data.");
            }
        } else {
            console.error("User or user UID is undefined");
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            console.log("Auth state changed, user: ", user);
            if (user) {
                fetchUserData(user);
            } else {
                console.log("User is not logged in");
                setUserDetails(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            toast.success("Logged out successfully.");
        } catch (error) {
            console.error("Error logging out: ", error);
            toast.error("Failed to log out.");
        }
    };

    return (
        <ProfileWrapper>
            <ToastContainer />
            {userDetails ? (
                <ProfileContent>
                    <h3>WELCOME, <span>{userDetails.username}</span></h3>
                    <UserInfo>
                        <p><span>Email:</span> {userDetails.email}</p>
                        <p><span>Username:</span> {userDetails.username}</p>
                    </UserInfo>
                </ProfileContent>
            ) : (
                <LoadingMessage>Loading...</LoadingMessage>
            )}
        </ProfileWrapper>
    );
}

const ProfileWrapper = styled.section`
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/background-img.png');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 50px;

    span{
        color: #0bd67e;
    }
`;

const ProfileContent = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 20px 40px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const UserInfo = styled.div`
    margin: 20px 0;
    p {
        margin: 10px 0;
        font-size: 25px;
        span {
            color: #0bd67e;
            font-weight: bold;
        }
    }
`;



const LoadingMessage = styled.p`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
`;

export default Profile;
