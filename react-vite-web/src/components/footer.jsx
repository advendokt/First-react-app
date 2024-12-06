import "../components/Footer.css";

function Footer() {
    return (
        <div className="container">
            <footer className="py-2 my-4">
                <ul className="nav justify-content-center border-bottom pb-4 mb-3">
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About us</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Service</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
                </ul>
                <p className="text-center text-body-secondary">&copy; {new Date().getFullYear()} Company, Inc</p>
            </footer>
        </div>
    );
}

export default Footer;
