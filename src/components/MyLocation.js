import react, { useEffect, useState } from "react";

const MyLocation = () => {
   const [location, setLocation] = useState({
      loaded: false,
      coordinates: { lat: "", lng: "" },
      accuracy: "",
   });
   const [ipLocation, setIpLocation] = useState({});
   const options = {
      enableHighAccuracy: true,
   };
   useEffect(() => {
      const onSuccess = (location) => {
         setLocation({
            loaded: true,
            coordinates: {
               lat: location.coords.latitude,
               lng: location.coords.longitude,
            },
            accuracy: location.coords.accuracy,
         });
      };

      const onError = (error) => {
         setLocation({
            loaded: true,
            error,
         });
      };
      if (!("geolocation" in navigator)) {
         onError({
            code: 0,
            message: "Browser does not support geolocation",
         });
      }
      navigator.geolocation.watchPosition(onSuccess, onError, options);
      fetch(`http://ip-api.com/json`)
         .then((res) => res.json())
         .then((data) => {
            setIpLocation({ lat: data.lat, lon: data.lon });
         })
         .catch((err) => {
            console.log(err);
         });
   }, []);
   return (
      <div style={{ backgroundColor: "black" }}>
         <h1>My Location</h1>
         <p>{location.coordinates.lat}</p>
         <p>{location.coordinates.lng}</p>
         <p>{location.loaded}</p>
         <p>{location.accuracy}</p>
         <h1>Ip location</h1>
         <p>{ipLocation.lat}</p>
         <p>{ipLocation.lon}</p>
      </div>
   );
};
export default MyLocation;
