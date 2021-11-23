/* eslint-disable prettier/prettier */
import React from 'react';

import {ThemeProvider} from 'styled-components/native';

import {theme} from './src/infrastructure/theme';

import {Navigation} from './src/infrastructure/navigation';
import {AuthenticationContextProvider} from './src/services/signup/sgnup.context';
import {
  GroupsContext,
  GroupsContextProvider,
} from './src/services/group/group.context';
import {EventsContextProvider} from './src/services/event/event.context';
import {RemindersContextProvider} from './src/services/reminder/reminder.context';
import {FriendshipsContextProvider} from './src/services/friendship/friendship.context';
import {FileUploadContextProvider} from './src/services/fileUpload/fileUpload.context';
import {LocationContextProvider} from './src/services/location/location.context';
import {HubConnectionProvider} from './src/services/hubConnection/hubConnection.context';

import {MainContextProvider} from './src/services/main/Main.context';

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FileUploadContextProvider>
            <FriendshipsContextProvider>
              <RemindersContextProvider>
                <EventsContextProvider>
                  <LocationContextProvider>
                    <GroupsContextProvider>
                      <HubConnectionProvider>
                        <MainContextProvider>
                          <Navigation />
                        </MainContextProvider>
                      </HubConnectionProvider>
                    </GroupsContextProvider>
                  </LocationContextProvider>
                </EventsContextProvider>
              </RemindersContextProvider>
            </FriendshipsContextProvider>
          </FileUploadContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
