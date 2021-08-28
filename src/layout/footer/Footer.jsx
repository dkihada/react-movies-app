import "./Footer.css";

function Footer() {
  return (
    <footer className='page-footer'>
      <div className='footer-copyright'>
        <div className='container'>
          © {new Date().getFullYear()} Copyright Text
          <a
            className='grey-text text-lighten-4 right'
            href='https://github.com/dkihada/my_pet_project/tree/main/react/movies-project'
            target='_blank'
          >
            GitHub Repo
          </a>
        </div>
      </div>
    </footer>
  );
}

export { Footer };
