import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import HoodCard from "../../components/hoodCard/HoodCard";
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
        currAutoComplete && setCurrAutoComplete(currAutoComplete);
        setInputValue(currAutoComplete!.getPlace().formatted_address);
    };

    const renderAllHoods = () => {
        return allHoods?.map((hood) => {
            return <HoodCard hood={hood}></HoodCard>;
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

                    <StyledFlexWrapper
                        flexDirection="column"
                        width="50%"
                        gap="0"
                        marginTop="2rem"
                    >
                        {renderAllHoods()}
                    </StyledFlexWrapper>
                </>
            )}
        </>
    );
};

export default Hood;
