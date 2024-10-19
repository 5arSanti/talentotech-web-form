import { banner } from "../../../../assets";
import { FadeWrapper } from "../../FadeWrapper";
import { GridContainer } from "../../GridContainer";
import { WrapperContainer2 } from "../../WrapperContainers";
import { Form } from "./Form";

import "./styles.css"

const SectionNewClass = () => {
    return (
        <FadeWrapper>
            <GridContainer padding={0} className="grid-1-1 main-form-container" gap={0}>
                <WrapperContainer2 padding={0} justifyContent="center" alignItems="center">
                    <img src={banner} alt="Banner image" />
                </WrapperContainer2>
        
                <Form/>

            </GridContainer>
        </FadeWrapper>
    );
}

export { SectionNewClass };