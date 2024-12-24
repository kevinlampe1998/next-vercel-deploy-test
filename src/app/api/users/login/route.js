import { NextResponse } from "next/server";

export const GET = async () => {
    try {

        return NextResponse.json({ message: 'Hello from GET' });

    } catch(err) {
        console.log('Error on Route /src/app/api/users/login', err);
        return NextResponse.json({ message: 'Something went wrong!' });
    }
};