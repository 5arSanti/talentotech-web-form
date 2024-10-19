import { techLogo } from "../../../assets";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const TalentoTechNav = () => {
    return (
        <WrapperContainer2 className="tech-logo-image-container" padding={".5rem 1.5rem"}>
            <a href="https://talentotechcaribe.co/">
                <img src={techLogo} alt="Talento Tech logo" />
            </a>
        </WrapperContainer2>
    );
}

export { TalentoTechNav };