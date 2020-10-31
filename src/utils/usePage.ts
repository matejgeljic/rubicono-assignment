import { useEffect } from "react";

const usePage = (title: string) => {
    useEffect(() => {
        document.title = title;
        window.scrollTo(0, 0);
    });
}

export default usePage