import { InputCard, OptionInputCard } from "../../../InputsCards";
import { WrapperContainer2 } from "../../../WrapperContainers";

import { GridContainer } from "../../../GridContainer";
import { FormAditionalInfo } from "../FormAditionalInfo";
import { ButtonCard } from "../../../ButtonCard";

import { IoIosSend } from "react-icons/io";

import "./styles.css"

const Form = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <WrapperContainer2 justifyContent="start" alignItems="center" padding={40} gap={20} flexDirection="column">
                <FormAditionalInfo/>

                <InputCard 
                    id={"course-name"}
                    label={"Nombre del curso"}
                />
                <InputCard 
                    id={"region"}
                    label={"Región"}
                />

                <GridContainer className="grid-1-1" padding={0}>
                    <InputCard 
                        id={"executer"}
                        label={"Ejecutor"}
                    />
                    <InputCard 
                        id={"coordinator"}
                        label={"Coordinador"}
                    />
                    <OptionInputCard
                        none={true}
                        id={"mode"}
                        label={"Modalidad"}
                        array={["Virtual", "Presencial"]}
                    />
                    <OptionInputCard
                        none={true}
                        id={"process"}
                        label={"¿En proceso?"}
                        array={["Si", "No"]}
                    />
                    <InputCard
                        id={"students-amount"}
                        label={"Cantidad de estudiantes"}
                    />
                    <OptionInputCard
                        none={true}
                        id={"course-schedule"}
                        label={"Jornada del curso"}
                        array={["Jornada Mañana", "Jornada Tarde"]}
                    />
                </GridContainer>

                <ButtonCard 
                    title="Enviar información del curso"
                    type="submit"
                >
                    Enviar información <IoIosSend/>
                </ButtonCard>
            </WrapperContainer2>
        </form>
    );
}

export { Form };