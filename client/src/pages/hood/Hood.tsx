import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useState } from "react";
import CustomInput from "../../components/input/CustomInput";
declare type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

const libraries: Libraries = ["places"];

const Hood = () => {
    const [inputValue, setInputValue] = useState<string | undefined>("");
    const [currAutoComplete, setCurrAutoComplete] =
        useState<google.maps.places.Autocomplete>();

    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEYS!,
        libraries: libraries,
    });

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleSelectLocation = () => {
        console.log(currAutoComplete);
        currAutoComplete &&
            console.log(currAutoComplete.getPlace().formatted_address);
        setCurrAutoComplete(currAutoComplete);
        setInputValue(currAutoComplete!.getPlace().formatted_address);
    };

    return (
        <>
            {isLoaded && (
                <>
                    <Autocomplete
                        onPlaceChanged={handleSelectLocation}
                        onLoad={(autocomplete) => {
                            console.log(autocomplete);
                            setCurrAutoComplete(autocomplete);
                        }}
                        onUnmount={() => {
                            console.log("unmounted");
                        }}
                    >
                        <CustomInput
                            inputLabel="enter location"
                            type="text"
                            onChange={handleChange}
                            value={inputValue!}
                            required={false}
                        ></CustomInput>
                    </Autocomplete>

                    <h2>{inputValue}</h2>
                </>
            )}
        </>
    );
};

export default Hood;
