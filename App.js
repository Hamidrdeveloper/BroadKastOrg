// import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
// eslint-disable-next-line quotes
// eslint-disable-next-line prettier/prettier
import { ThemeProvider } from "styled-components/native";
// import * as firebase from "firebase";

// import {
//   useFonts as useOswald,
//   Oswald_400Regular,
// } from "@expo-google-fonts/oswald";
// import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

// eslint-disable-next-line prettier/prettier
import { theme } from "./src/infrastructure/theme";
// eslint-disable-next-line prettier/prettier
import { Navigation } from "./src/infrastructure/navigation";
import { AuthenticationContextProvider } from "./src/services/signup/sgnup.context";
import { GroupsContext, GroupsContextProvider } from "./src/services/group/group.context";
import { EventsContextProvider } from "./src/services/event/event.context";
import { RemindersContextProvider } from "./src/services/reminder/reminder.context";
import { FriendshipsContextProvider } from "./src/services/friendship/friendship.context";
import { FileUploadContextProvider } from "./src/services/fileUpload/fileUpload.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { HubConnectionProvider } from "./src/services/hubConnection/hubConnection.context";
// eslint-disable-next-line prettier/prettier
import { MainContextProvider } from "./src/services/main/Main.context";

// import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

// const firebaseConfig = {
//   apiKey: "<fill in your own>",
//   authDomain: "<fill in your own>",
//   projectId: "<fill in your own>",
//   storageBucket: "<fill in your own>",
//   messagingSenderId: "<fill in your own>",
//   appId: "<fill in your own>",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

export default function App() {
  // const [oswaldLoaded] = useOswald({
  //   Oswald_400Regular,
  // });

  // const [latoLoaded] = useLato({
  //   Lato_400Regular,
  // });

  // if (!oswaldLoaded || !latoLoaded) {
  //   return null;
  // }

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
          <MainContextProvider >
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