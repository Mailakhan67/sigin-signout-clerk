 'use client'
import { useUser } from "@clerk/nextjs";


const ClientPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    // Ensure data is loaded and user is signed in
    if (!isLoaded || !isSignedIn) {
        return null;
    }

    return (
        <div className="h-full flex flex-col items-center justify-center text-2xl">
            Hello, {user?.firstName} welcome to Clerk
        </div>
    );
}

export default ClientPage;
