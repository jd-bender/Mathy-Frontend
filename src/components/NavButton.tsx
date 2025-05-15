import { Button } from "@mui/material";
import Link from "next/link";

const NavButton = ({ text, path }: { text: string; path: string }) => (
    <Link href={path}>
        <Button variant="contained" color="primary">
            {text}
        </Button>
    </Link>
);

export default NavButton;
