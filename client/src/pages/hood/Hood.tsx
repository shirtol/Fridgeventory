import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import HoodCard from "../../components/hoodCard/HoodCard";
import CustomInput from "../../components/input/CustomInput";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { useHoods } from "../../context/hoodContext/Hood.context";
import { useUser } from "../../context/userContext/User.context";
import { StyledLocationInput } from "./styles/StyledLocationInput";
declare type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

const libraries: Libraries = ["places"];

const Hood = () => {
    const { token } = useUser();
    const { fetchHoods, allHoods } = useHoods();
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

    const renderAllHoods = () => {
        return allHoods?.map((hood) => {
            return <HoodCard></HoodCard>;
        });
    };

    useEffect(() => {
        fetchHoods!();
    }, []);

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
                    >
                        <StyledFlexWrapper>
                            <StyledLocationInput
                                type="text"
                                onChange={handleChange}
                                value={inputValue!}
                                required={false}
                            ></StyledLocationInput>
                        </StyledFlexWrapper>
                    </Autocomplete>

                    <h2>{inputValue}</h2>
                    <StyledGridWrapper>{renderAllHoods()}</StyledGridWrapper>
                </>
            )}
        </>
    );
};

export default Hood;
