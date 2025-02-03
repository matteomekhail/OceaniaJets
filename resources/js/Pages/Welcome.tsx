import { Head } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head />
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold">Welcome to the app!</h1>
            </div>
        </>
    );
}
