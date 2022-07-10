import MenuItem from './MenuItem';
import '../styles/menu.scss';

const pages = ["About", "Experience", "Skills", "Resume", "Contact"]

const Menu = ({ openModal }) => {
    return (
        <div>
        <ul class="Words">
            <li class="Words-line">
                <p>&nbsp;</p>
            </li>
            {
                pages.map((pageTitle) =>  <MenuItem openModal={openModal} pageTitle={pageTitle} />)
            }
            <li class="Words-line">
                <p>&nbsp;</p>
            </li>
        </ul>
        </div>
    );
};

export default Menu;