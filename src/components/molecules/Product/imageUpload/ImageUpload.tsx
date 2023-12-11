import FieldName from '../../../atoms/fieldName/FieldName';
import UploadArea from '../../../atoms/uploadArea/UploadArea';
import {ImageUploadArea} from './style';

export interface imageProps {
  fieldName: string;
  onPress: () => void
}

export default function ImageUpload(props: imageProps) {
  return (
    <ImageUploadArea onPress={props.onPress}>
      <FieldName text={props.fieldName}></FieldName>
      <UploadArea
        title="Faca o upload da foto"
        subtitle="JPG e PNG, somente"></UploadArea>
    </ImageUploadArea>
  );
}
