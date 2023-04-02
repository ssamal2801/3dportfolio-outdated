import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react';
import styled from 'styled-components';

const mapstyles = {
  width: '93%',
  height: '75%',
  'marginTop': '8rem',
  'alignItems': 'center',
  'justifyContent': 'flex-end',
};

const Nomap = styled.div`
    width: 100%;
    height: 100%;
    color: white;
`;

const Map = () => {
    const center = useMemo(() => ({ lat: 43.469910, lng: -80.580588 }), []);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyCo2Le8QOwTG_iiFi3uw_hkOuxB3gSln9g',
    });
    if (!isLoaded) {
        return <Nomap>Error loading map</Nomap>;
    }
    return (
            <GoogleMap zoom={10} center={center} mapContainerStyle={mapstyles}>
                <Marker position={center} />
            </GoogleMap>
    );
};

export default Map;
