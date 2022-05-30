import * as Location from 'expo-location';
import { LocationSubscription } from 'expo-location';
import { useEffect, useRef, useState } from 'react';

type LocationType = {
    latitude: number;
    longitude: number;
};

export const useLocation = () => {
    const isMounted = useRef(true);
    const [hasLocation, sethasLocation] = useState(false);
    const [routeLines, setRouteLines] = useState<LocationType[]>([]);
    const watchLocation = useRef<LocationSubscription>();
    const [initialPosition, setinitialPosition] = useState<LocationType>({
        latitude: 0,
        longitude: 0,
    });
    const [userLocation, setUserLocation] = useState<LocationType>({
        latitude: 0,
        longitude: 0,
    });

    const getCurrentLocation = async () => {
        let location = await Location.getCurrentPositionAsync({});
        return location;
    };

    const followUserLocation = async () => {
        watchLocation.current = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.High,
                distanceInterval: 10,
            },
            ({ coords: { latitude, longitude } }) => {
                const location = { latitude, longitude };
                if (!isMounted.current) return;
                setUserLocation(location);
                setRouteLines((prev) => [...prev, location]);
            },
        );
    };

    const stopTrackingLocation = async () => {
        watchLocation.current?.remove();
    };

    const init = async () => {
        const {
            coords: { latitude, longitude },
        } = await getCurrentLocation();
        const location = { latitude, longitude };

        if (!isMounted.current) return;
        setinitialPosition(location);
        setRouteLines((prev) => [...prev, location]);
        sethasLocation(true);
    };

    useEffect(() => {
        init();
        return () => {
            isMounted.current = false;
        };
    }, []);

    return {
        initialPosition,
        hasLocation,
        userLocation,
        getCurrentLocation,
        followUserLocation,
        stopTrackingLocation,
        routeLines,
    };
};
