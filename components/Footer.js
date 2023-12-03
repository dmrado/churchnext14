const Footer = () => {
    const date = new Date()
    const fullYear = date.getFullYear()

    return (<>
            <footer className="footer">Designed by Polina&copy; Powered by Dm&copy; {fullYear}</footer>
        </>
    );
};

export default Footer;
