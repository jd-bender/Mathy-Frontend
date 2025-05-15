"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

const NavButton = ({ text, path }: { text: string; path: string }) => {
    const router = useRouter();

    return (
        <Button variant="contained" onClick={() => router.push(path)}>
            {text}
        </Button>
    );
};

export default NavButton;
