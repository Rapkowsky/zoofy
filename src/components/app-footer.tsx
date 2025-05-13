export default function AppFooter() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer className="mt-auto border-t border-black/5 py-5">
            <small className="opacity-50">
                &copy; {year} Robert Rapkowski. All rights reserved.
            </small>
        </footer>
    );
}
