import "./Header.css";
import logo from "../../icons/logo-header.svg";

function Header() {
  return (
    <ul className='nav'>
      <li>
        <a href='https://github.com/dkihada' target='_blank'>
          GitHub Profile
        </a>
      </li>
      <li>
        <a
          href='https://github.com/dkihada/my_pet_project/tree/main/react/movies-project'
          target='_blank'
        >
          GitHub REPO
        </a>
      </li>
    </ul>
  );
}

export { Header };
