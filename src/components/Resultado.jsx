import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;

`
const Imagen = styled.img`
    display: block;
    width: 120px;
`
const Texto = styled.p`
    font-size: 18px;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
`
function Resultado({resultado}) {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL,LASTUPDATE} = resultado
      return (
    <Contenedor>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="imagen crypto" />
        <div>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
            <Texto>variacion del precio en la ultimas 24 horas <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Ultmia acualizacion: <span>{LASTUPDATE}</span></Texto>
        </div>
        
    </Contenedor>
  )
}

export default Resultado