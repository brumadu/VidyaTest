import {
  UploadContent,
  UploadSafeArea,
  UploadSubtitle,
  UploadTitle,
} from './styled';
import Icon from 'react-native-vector-icons/FontAwesome6';

export interface uploadProps {
  title: string;
  subtitle: string;
  onPress: () => void;
}

export default function UploadArea(props: uploadProps) {
  return (
    <UploadSafeArea onPress={props.onPress}>
      <UploadContent>
        <Icon name="upload" size={25} color={'#FFF'}></Icon>
        <UploadTitle> {props.title} </UploadTitle>
      </UploadContent>
      <UploadSubtitle> {props.subtitle} </UploadSubtitle>
    </UploadSafeArea>
  );
}
