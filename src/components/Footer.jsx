const Footer = () => {
    return (
        <footer>
            <div>
                <a href="https://github.com/Gastons2023" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://stackoverflow.com/users/28189798/kechara-neal" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-stack-overflow"></i></a>
            </div>
            <p>&copy; {new Date().getFullYear()} Ke'Chara Neal. All rights reserved.</p>
        </footer>
    );
};

export default Footer;