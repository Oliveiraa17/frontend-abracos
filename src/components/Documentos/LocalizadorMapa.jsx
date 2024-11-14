import React, { useState, useEffect } from 'react';


function LocalizadorMapa() {
    const [userLocation, setUserLocation] = useState(null);
    const [nearestLocation, setNearestLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: '', // por a chave do api
    });

    const locations = [
        { name: 'Centro de Atendimento São Paulo', lat: -23.5505, lng: -46.6333, address: 'Endereço SP' },
        { name: 'Centro de Atendimento Rio de Janeiro', lat: -22.9068, lng: -43.1729, address: 'Endereço RJ' },
    ];

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => console.error(error),
                { enableHighAccuracy: true }
            );
        } else {
            alert('Geolocalização não é suportada pelo seu navegador.');
        }
    }, []);

    const calculateDistance = (lat1, lng1, lat2, lng2) => {
        const toRad = (value) => (value * Math.PI) / 180;
        const R = 6371; // Raio da Terra em km
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distância em km
    };

    useEffect(() => {
        if (userLocation) {
            let closest = null;
            let minDistance = Infinity;

            locations.forEach((location) => {
                const distance = calculateDistance(
                    userLocation.lat,
                    userLocation.lng,
                    location.lat,
                    location.lng
                );

                if (distance < minDistance) {
                    minDistance = distance;
                    closest = location;
                }
            });

            setNearestLocation({ ...closest, distance: minDistance.toFixed(2) });
        }
    }, [userLocation, locations]);

    return (
        <div style={{marginTop: '60px', marginBottom: '50px'}}>
            {isLoaded ? (
                <GoogleMap
                    center={userLocation || { lat: -23.5505, lng: -46.6333 }} 
                    zoom={10}
                    mapContainerStyle={{ width: '100%', height: '400px' }}
                >
                    {userLocation && (
                        <Marker
                            position={userLocation}
                            label="Você está aqui"
                        />
                    )}

                    {nearestLocation && (
                        <Marker
                            position={{ lat: nearestLocation.lat, lng: nearestLocation.lng }}
                            label={nearestLocation.name}
                        />
                    )}
                </GoogleMap>
            ) : (
                <p>Carregando mapa...</p>
            )}

            {nearestLocation ? (
                <div>
                    <p><strong>Ponto de atendimento mais próximo:</strong> {nearestLocation.name}</p>
                    <p><strong>Endereço:</strong> {nearestLocation.address}</p>
                    <p><strong>Distância:</strong> {nearestLocation.distance} km</p>
                </div>
            ) : (
                <p>Obtendo sua localização...</p>
            )}
        </div>
    );
}

export default LocalizadorMapa;
