import { useContext } from 'react';
import incomeImg from '../../assets/img/Entradas.svg'; 
import Saídas from '../../assets/img/Saídas.svg'; 
import Total from '../../assets/img/Total.svg'; 
import { TransactionsContext } from '../../TransactionsContext';

import { Container } from "./styles";


export function Summary(){
    const {transactions} = useContext(TransactionsContext)
    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg}/>
                </header>
                <strong>
                    R$ 1000,00
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src={Saídas} alt="Saídas"/>
                </header>
                <strong>
                  -R$ 500,00
                </strong>
            </div>


            <div className="highlight-background">
                <header>
                    <p>Total</p>
                  <img src={Total} alt="Total"/>
                </header>
                <strong>
                    R$ 500,00
                </strong>
            </div>
        </Container>
    )
}