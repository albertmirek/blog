import { NextRequest, NextResponse } from "next/server";
import config from "@/config";

interface ApiLoginRes {
  access_token: string;
}

interface LoginRequest {
  username: string;
  password: string;
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = (await request.json()) as LoginRequest;
    if (!username || username === "" || !password || password === "") {
      return NextResponse.json(
        { error: "Empty username or password" },
        { status: 400 },
      );
    }

    const res = await fetch(`${config.apiEndpoint}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": config.apiKey,
      },
      body: JSON.stringify({ username, password }),
    });

    if (res.status === 400) {
      return NextResponse.json(
        { error: "Invalid username or password" },
        { status: 400 },
      );
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "Authentication failed" },
        { status: res.status },
      );
    }

    const accessToken = ((await res.json()) as ApiLoginRes).access_token;
    const clientResponse = NextResponse.json({ username });
    clientResponse.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      sameSite: "strict",
      maxAge: 3600,
    });

    return clientResponse;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
