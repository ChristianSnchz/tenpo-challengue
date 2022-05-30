import React, { useContext, useState, useEffect, useRef } from "react";
import MapView, { PROVIDER_GOOGLE,  } from "react-native-maps";
import styled from "styled-components/native";
import { Text, Dimensions, Image } from "react-native";
const img = require("./imgs/location.png");
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { PermissionesContext } from "./context/PermissionContext";
import * as Location from "expo-location";
import { useLocation } from "./hooks/useLocation";
import { FloatingActionButtom } from "./components/FloatingActionButton";

//#region styledComponents
const Wrapper = styled.View`
  flex: 1;
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 30px;
`;

const Address = styled.View`
  background-color: #d4f9f5;
  height: 100px;
`;

const AddressText = styled.Text`
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 1px;
  color: #00baa4;
`;

const TextInput = styled.TextInput`
  width: 100%;
  padding: 20px;
  background-color: white;
  border-radius: 50px;
  margin-top: -20px;
  box-shadow: 4px 4px -1px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const WrapperLocation = styled.View`
  background-color: white;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: -20px;
`;

const LocationText = styled.Text`
  font-size: 16px;
  color: grey;
`;

const Backbutton = styled.TouchableOpacity`
  position: absolute;
  top: 5px;
  left: 10px;
`;

const MapContainer = styled(MapView as any)<{ Dimensions: any }>`
  flex: 1;
  width: ${({ Dimensions }) => Dimensions.get("window").width}px;
`;

const ButtonGeo = styled.TouchableOpacity`
    margin-top: 10px;
    padding: 20px;
    background-color: #00baa4;    
    color: white;
    justify-content: center;
    align-items: center;
    width: 60%;
    border-radius: 30px;
`;

const TextGeo = styled.Text`
    color: white;
    font-size: 16px;
    font-weight: bold;
`;
//#endregion

const SearchScreen = () => {
  const navigation = useNavigation();
  const mapViewRef = useRef<MapView>();
  const follow = useRef(true);
  const [search, setsearch] = useState<string>();
  const [showMap, setshowMap] = useState(false);
  const { checkLocationPermision, permissions, askLocationPermision } =
    useContext(PermissionesContext);

  useEffect(() => {
    checkLocationPermision();
  }, []);

  useEffect(() => {    
    if (permissions.locationStatus === Location.PermissionStatus.GRANTED) {
      centerPosition();      
      setshowMap(true);
    }
  }, [permissions.locationStatus])
  

  const {    
    initialPosition,
    getCurrentLocation,    
  } = useLocation();

  const centerPosition = async () => {
    const {
        coords: { latitude, longitude },
    } = await getCurrentLocation();
    follow.current = true;
    mapViewRef.current?.animateCamera({
        center: {
            latitude,
            longitude,
        },
    });
};

  const handleMap = () => {
    console.log(permissions.locationStatus, "PERMISO");
    if (permissions.locationStatus === Location.PermissionStatus.GRANTED) {
      setshowMap(true);
      centerPosition();      
    } else askLocationPermision();
  };

  return (
    <Wrapper>
      <Address>
        <Row>
          <Image
            style={{ marginRight: 5, resizeMode: "contain" }}
            source={img}
          />
          <AddressText> Agregar direccion de entrega</AddressText>
        </Row>
      </Address>
      <TextInput
        onChangeText={(value) => setsearch(value)}
        value={search}
        placeholder="Escribe tu direccion"
      />
      <WrapperLocation>
        {showMap ? (
          <>          
            <MapContainer
              ref={(el: any) => (mapViewRef.current = el!)}
              provider={PROVIDER_GOOGLE}
              Dimensions={Dimensions}
              showsUserLocation
              initialRegion={{
                latitude: initialPosition.latitude,
                longitude: initialPosition.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onTouchStart={() => (follow.current = false)}
            />
            <FloatingActionButtom onPress={centerPosition} />
          </>
        ) : (
          <>
            <LocationText>Esperando tu ubicacion...</LocationText>
            <ButtonGeo
              onPress={handleMap}                            
            >
              <TextGeo>Geolocalizarme</TextGeo>
            </ButtonGeo>
          </>
        )}
      </WrapperLocation>
      <Backbutton onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={24} color="black" />
      </Backbutton>
    </Wrapper>
  );
};

export default SearchScreen;
