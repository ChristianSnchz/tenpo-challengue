import React, { createContext, Dispatch, SetStateAction, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { AppState, Linking } from 'react-native';

export interface PermissioneState {
    locationStatus: Location.PermissionStatus;
}

export const permissionInitstate: PermissioneState = {
    locationStatus: Location.PermissionStatus.UNDETERMINED,
};

type PermissionsProps = {
    permissions: PermissioneState;
    askLocationPermision: () => void;
    checkLocationPermision: () => void;
    loading: boolean;
    googleMap: boolean;
    setgoogleMap: Dispatch<SetStateAction<boolean>>;
};

export const PermissionesContext = createContext({} as PermissionsProps);

export const PermissionProvider = ({ children }: any) => {
    const [permissions, setpermissions] = useState(permissionInitstate);
    const [googleMap, setgoogleMap] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        AppState.addEventListener('change', (state) => {
            console.log(state, 'state');
            if (state !== 'active') return;
            checkLocationPermision();
        });
        setLoading(false);
    }, []);

    const askLocationPermision = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        console.log(status, 'status');
        
        setpermissions((prev) => ({ ...prev, locationStatus: status }));

        if (status === Location.PermissionStatus.DENIED) {
            Linking.openURL('app-settings:');
        }
    };

    const checkLocationPermision = async () => {
        let { status } = await Location.getForegroundPermissionsAsync();
        console.log(status, 'status');
        setpermissions((prev) => ({ ...prev, locationStatus: status }));
    };

    return (
        <PermissionesContext.Provider
            value={{
                permissions,
                askLocationPermision,
                checkLocationPermision,
                loading,
                googleMap,
                setgoogleMap,
            }}
        >
            {children}
        </PermissionesContext.Provider>
    );
};
