import logoImg from '../../assets/img/Logo.svg';

import { Container, Content } from './style';


export function Header() {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt  money" />
                <button type="button">
                    nova transação
                </button>
           </Content>
        </Container>
    )
}