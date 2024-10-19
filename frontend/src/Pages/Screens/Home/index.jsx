import { MinTicFooter } from "../../components/MinTicFooter";
import { SectionNewClass } from "../../components/ScreenHome/SectionNewClass";
import { SectionMainLogo } from "../../components/ScreenHome/SectionMainLogo";
import { WrapperContainer2 } from "../../components/WrapperContainers";

import "./styles.css"


const Home = () => {
    return (
        <WrapperContainer2 justifyContent="center" alignItems="center" padding={"50px 100px"} flexDirection="column" gap={50}>

            <SectionMainLogo/>

            <SectionNewClass/>

            {/* <MinTicFooter/> */}
        </WrapperContainer2>
    );
}

export { Home };