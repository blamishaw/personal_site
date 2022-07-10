import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import { AboutPage, ExperiencePage, SkillsPage, ResumePage, ContactPage } from "../Pages/Pages";
import '../../styles/modal.scss';

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0
    },
    visible: {
        y: "0",
        opacity: 1,
    },
    exit: {
        y: "100vh",
        opacity: 0,
    }
}

const Modal = ({ handleClose, page }) => {

    const getPage = (page) => {
        if (page === "About") {
            return <AboutPage />;
        } else if (page === "Experience") {
            return <ExperiencePage />;
        } else if (page === "Skills") {
            return <SkillsPage />;
        } else if (page === "Resume") {
            return <ResumePage />;
        } else if (page === "Contact") {
            return <ContactPage />;
        } else {
            return null;
        }
    }

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}
                className="modal"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                {getPage(page)}
                <button onClick={handleClose}>Close</button>
            </motion.div>
        </Backdrop>
    );
};

export default Modal;