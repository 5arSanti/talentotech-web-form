import { GridContainer } from "../GridContainer";
import { AnchorCard, SpanCard, TextCard } from "../TextComponents";
import { WrapperContainer2 } from "../WrapperContainers";

import "./styles.css"

const MinTicFooter = () => {

    const fontSize = 13;

    return (
        <WrapperContainer2 className="mintic-footer" padding={5}>
            <GridContainer className="grid-175-025">
                <WrapperContainer2 flexDirection="column">
                    <TextCard className="bold exo black" fontSize={fontSize}>
                        MINISTERIO DE TECNOLOGÍAS DE LA INFORMACIÓN Y LAS COMUNICACIONES
                    </TextCard>

                    <TextCard fontSize={fontSize} className="exo">
                        EDIFICIO MURILLO TORO CRA. 8A ENTRE CALLES 12A Y 12B BOGOTÁ, COLOMBIA - CÓDIGO POSTAL 111711 <br />
                        TELÉFONO CONMUTADOR: <SpanCard>+57 601 344 34 60</SpanCard>
                    </TextCard>
                </WrapperContainer2>

            </GridContainer>
        </WrapperContainer2>
    );
}
export { MinTicFooter };