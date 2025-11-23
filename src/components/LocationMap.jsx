import { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon issue in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationMap = () => {
    // Single office location: 25°34'25.2"N 85°04'09.9"E (decimal: 25.573667, 85.069417)
    const officePosition = [25.573667, 85.069417];

    useEffect(() => {
        // Force Leaflet to recalculate map size after component mounts
        const timer = setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
            <MapContainer
                center={officePosition}
                zoom={16}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {/* Office Marker */}
                <Marker position={officePosition}>
                    <Popup>
                        <div className="font-sans">
                            <h3 className="font-bold text-lg mb-2">Smart Construction & Developers</h3>
                            <p className="text-sm">
                                S/49, 2ND Floor, Haji Harman Complex,<br />
                                AIIMS Road, Phulwari Sharif<br />
                                Patna-801505, Bihar
                            </p>
                            <a
                                href={`https://www.google.com/maps/search/?api=1&query=${officePosition[0]},${officePosition[1]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary-600 hover:text-primary-700 font-semibold text-sm mt-2 inline-block"
                            >
                                Open in Google Maps →
                            </a>
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default LocationMap;
