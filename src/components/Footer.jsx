const Footer = () => {
    return (
        <footer className="mt-[-1px] bg-gray-900 text-white text-center">
            <div className="py-10 px-4 md:px-6 text-sm md:text-lg">
                <div className="max-w-screen-xl mx-auto border-t border-white">
                    <p className="pt-6">&copy; {(new Date()).getFullYear()} Sayan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
