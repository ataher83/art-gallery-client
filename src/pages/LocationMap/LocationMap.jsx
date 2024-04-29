import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";


const LocationMap = () => {
    return (
        <div className='container mx-auto pb-5' >
            <h1 className='text-center text-3xl font-semibold  text-purple-600'>Find our Location</h1>
            <p className="text-center text-lg  ">Find our location on the map that help you to explore us easily</p>
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