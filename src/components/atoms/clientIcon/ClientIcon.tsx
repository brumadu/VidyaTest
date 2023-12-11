import {Text, View} from 'react-native';
import {ClientIconArea, Initials} from './style';
import {useState} from 'react';

export interface simpleName {
  name: string;
}

export default function ClientIcon(simpleName: simpleName) {
  return (
    <ClientIconArea>
      <Initials>
        {` ` +
          simpleName.name
            .split(/\s/)
            .reduce((response, word) => (response += word.slice(0, 1)), '')}
      </Initials>
    </ClientIconArea>
  );
}
