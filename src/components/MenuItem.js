import '../styles/menu.scss';

const MenuItem = ({ openModal, pageTitle }) => {
    return (
        <li 
            class="Words-line"
            onClick={() => openModal(pageTitle)}
        >
            <p>{pageTitle}</p>
        </li>
    )
};

export default MenuItem;