import {Image} from 'react-native';
import {
  ProductDataArea,
  ProductDataTitle,
  ProductDataDescription,
  ProductDataSubTitle,
} from './style';

export interface productDataProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface productProps2 {
  data: productDataProps[];
}

export default function ProductData(props: productProps2) {
  return (
    <ProductDataArea>
      <Image source={{}}></Image>
      <ProductDataTitle> {props.data[0].title} </ProductDataTitle>
      <ProductDataSubTitle> {props.data[0].subtitle} </ProductDataSubTitle>
      <ProductDataDescription>
        {props.data[0].description}
      </ProductDataDescription>
    </ProductDataArea>
  );
}
