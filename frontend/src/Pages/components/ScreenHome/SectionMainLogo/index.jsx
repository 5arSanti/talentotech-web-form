import { iconoTalento } from "../../../../assets";
import { FadeWrapper } from "../../FadeWrapper";
import { WrapperContainer2 } from "../../WrapperContainers";

import "./styles.css"

const SectionMainLogo = () => {
    return (
        <FadeWrapper>
            <WrapperContainer2 justifyContent="center" alignItems="center" padding={0} className="main-logo-container">
                <img src={iconoTalento} alt="Main Icon image"/>
            </WrapperContainer2>
        </FadeWrapper>
    )
}

export { SectionMainLogo };