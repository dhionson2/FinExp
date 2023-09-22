import React from "react";
import {Container,TipoText,IconView,ValorText,Tipo} from './style'
import Icon from 'react-native-vector-icons/Feather'

export default function HistoricoList({data}){
    return(
        <Container>
            <Tipo>
                <IconView tipo={data.type}>
                    <Icon 
                        name={data.type ==='despesa' ? 'arrow-down' : 'arrow-up'}
                        size={20} 
                        color="#fff"/>
                    <TipoText>{data.type}</TipoText>
                </IconView>
            </Tipo>
            <ValorText>
                R$ {data.value}
            </ValorText>
        </Container>
    )
}