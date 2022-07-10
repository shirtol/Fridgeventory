import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import HoodCard from "../../components/hoodCard/HoodCard";
import { StyledHoodLocation } from "../../components/hoodCard/styles/StyledHoodLocation";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledGridWrapper } from "../../components/layouts/StyledGridWrapper";
import { useHoods } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import { useUser } from "../../context/userContext/User.context";
import JoinHoodBox from "./JoinHoodBox";
import { StyledJoinHoodBox } from "./styles/StyledJoinHoodBox";
import { StyledLocationInput } from "./styles/StyledLocationInput";
declare type Libraries = (
    | "drawing"
    | "geometry"
    | "localContext"
    | "places"
    | "visualization"
)[];

const libraries: Libraries = ["places"];

const HoodPage = () => {
    const { token } = useUser();
    const [selectedHood, setSelectedHood] = useState<Hood>();
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

    const onHoodClicked = (currHood: Hood) => {
        setSelectedHood(currHood);
    };

    const renderAllHoods = () => {
        return allHoods?.map((hood) => {
            return (
                <HoodCard hood={hood} onHoodClicked={onHoodClicked}></HoodCard>
            );
        });
    };

    const onJoinHoodClicked = () => {};

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

                    <StyledFlexWrapper alignItems="flex-start" marginTop="2rem">
                        <StyledFlexWrapper
                            flexDirection="column"
                            width="50%"
                            gap="0"
                        >
                            {renderAllHoods()}
                        </StyledFlexWrapper>

                        <JoinHoodBox
                            isShown={selectedHood?.location !== undefined}
                            hood={selectedHood!}
                            onJoinHoodClicked={onJoinHoodClicked}
                        ></JoinHoodBox>
                    </StyledFlexWrapper>
                </>
            )}
        </>
    );
};

export default HoodPage;
