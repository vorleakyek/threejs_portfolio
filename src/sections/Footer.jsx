const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-teal-900 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div>
          <a href="https://github.com/vorleakyek" target="_blank" className="social-icon">
            <img src="/assets/github.svg" alt="github" className="social-img" />
          </a>
        </div>
        <div >
          <a href="https://www.linkedin.com/in/vorleakyek/" target="_blank" className="social-icon">
            <img src="/assets/linkedIn-logo.png" alt="linkedin" className="social-img" />
          </a>
        </div>

      </div>

      <p className="text-white-500">@2024 Vorleak Yek. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
