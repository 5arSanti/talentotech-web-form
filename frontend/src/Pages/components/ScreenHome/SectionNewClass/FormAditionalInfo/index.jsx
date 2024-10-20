import { SubTitle } from "../../../SubTitle";
import { TextCard } from "../../../TextComponents";
import { WrapperContainer2 } from "../../../WrapperContainers";

const FormAditionalInfo = () => {
    return (
        <WrapperContainer2 justifyContent="center" alignItems="center" flexDirection="column" gap={10} height="auto">
            <SubTitle fontSize={26} textAlign="center">FORMULARIO DE CREACIÓN DE GRUPOS</SubTitle>

            <TextCard fontSize={14} textAlign="center" className="italic">
                ¡Hola, por favor ingresa los datos necesarios para realizar la creación de un grupo!
            </TextCard>
            <TextCard fontSize={10} textAlign="center" className="italic">
                Los campos con el simbolo (*) son olbigatorios.
            </TextCard>
        </WrapperContainer2>
    );
}

export { FormAditionalInfo };