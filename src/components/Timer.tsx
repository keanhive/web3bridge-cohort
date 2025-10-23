"use client";
import React from "react";

export default function Timer({ time }: { time: number }) {
    return <div className="text-red-600 font-semibold">Time left: {time}s</div>;
}
