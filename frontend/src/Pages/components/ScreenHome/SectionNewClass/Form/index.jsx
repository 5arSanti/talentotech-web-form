import { InputCard } from "../../../InputsCards";
import { SubTitle } from "../../../SubTitle";
import { TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";
import { FaUserGroup } from "react-icons/fa6";

import "./styles.css"

const Form = () => {
    return (
        <form className="form-container">
            <WrapperContainer2 justifyContent="start" alignItems="center" padding={30} flexDirection="column">
                <WrapperContainer2 justifyContent="center" alignItems="center" flexDirection="column" gap={10} height="auto">
                    <SubTitle fontSize={26} textAlign="center">Formulario de creación de grupos</SubTitle>
                    <TextCard fontSize={14} textAlign="center" className="italic">
                        ¡Hola, por favor ingresa los datos necesarios para realizar la creación de un grupo!
                    </TextCard>
                    <TextCard fontSize={12} textAlign="center" className="italic">
                        Los campos con el simbolo (*) son olbigatorios.
                    </TextCard>
                </WrapperContainer2>

                <InputCard 
                    id={"course-name"}
                    label={"Nombre del curso"}
                />
            </WrapperContainer2>
        </form>
    );
}

export { Form };