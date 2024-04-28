import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const LocationMap = () => {
    return (
        <div >
            <h1 className='text-2xl  font-semibold'>Find our Location on Google Map:</h1>
            <MapContainer className='h-64 w-full'
             center={[23.793940095798103, 90.40495186121306]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[23.793930278316942, 90.4049840477543]}>
                    <Popup>
                        The Art Gallery
                    </Popup>
                </Marker>
            </MapContainer>
            
        </div>
    );
};

export default LocationMap;