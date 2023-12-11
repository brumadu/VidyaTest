import {Text, View} from 'react-native';
import {ClientIconArea, Initials} from './style';
import {useState} from 'react';

export interface simpleName {
  name: string;
}

export default function ClientIcon(simpleName: simpleName) {
  return (
    <ClientIconArea>
      <Initials> {simpleName.name} </Initials>
    </ClientIconArea>
  );
}
