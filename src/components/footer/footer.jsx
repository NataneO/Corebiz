import * as S from './styled';


export function Footer() {
    return (
        <S.Footer>
            <S.Article address>
                <S.H5>Localização</S.H5>
                <S.Hr />
                <S.H6>Avenida Andrômeda, 2000. Bloco 6 e 8 </S.H6>

                <S.H6>Alphavile SP</S.H6>

                <S.H6>brasil@corebiz.ag</S.H6>

                <S.H6>+55 11 3090 1039</S.H6>
            </S.Article>
            <S.Article textCenter>
                <S.ButtonContact><S.MessageIcon/><a> Entre em contato </a></S.ButtonContact>
                <S.ButtonContact><S.HeadphonesIcon/><a>Fale com o nosso consultor online </a></S.ButtonContact>
            </S.Article>
            <S.Article distribution>
               <S.DistributionData>Created by <S.DistLogo creat /></S.DistributionData>
               <S.DistributionData>Powered by <S.DistLogo distrib /></S.DistributionData>
                 </S.Article>
        </S.Footer>
    )
}