import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { ReactNode, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import HoodCard from "../../components/hoodCard/HoodCard";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainArea } from "../../components/layouts/StyledMainArea";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import JoinHoodBox from "./JoinHoodBox";
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
    const [selectedHood, setSelectedHood] = useState<Hood>();
    const { fetchHoods, allHoods, myHood } = useHood();
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

    const renderAllHoods = (): ReactNode => {
        return allHoods
            ?.filter(isUserInputInhoodsLocations)
            .map(renderHoodCard);
    };

    const isUserInputInhoodsLocations = (hood?: Hood): boolean => {
        if (!inputValue) return true;
        return (
            hood?.location
                .toLowerCase()
                .split(" ")
                .some((str) => str.includes(inputValue.toLowerCase())) ?? false
        );
    };

    const renderHoodCard = (hood: Hood): ReactNode => {
        return (
            <HoodCard
                hood={hood}
                onHoodClicked={onHoodClicked}
                key={hood._id}
            ></HoodCard>
        );
    };

    useEffect(() => {
        fetchHoods!();
    }, []);

    return (
        <StyledMainArea>
            <StyledFlexWrapper
                flexDirection="column"
                justifyContent="flex-start"
                paddingTop="10rem"
            >
                {isLoaded &&
                    (myHood ? (
                        <Redirect to="/my-hood" push={true}></Redirect>
                    ) : (
                        <>
                            <Autocomplete
                                onPlaceChanged={handleSelectLocation}
                                onLoad={(autocomplete) => {
                                    setCurrAutoComplete(autocomplete);
                                }}
                            >
                                <StyledFlexWrapper alignItems="flex-start">
                                    <StyledLocationInput
                                        type="text"
                                        onChange={handleChange}
                                        value={inputValue!}
                                        required={false}
                                    ></StyledLocationInput>
                                </StyledFlexWrapper>
                            </Autocomplete>

                            <StyledFlexWrapper
                                alignItems="flex-start"
                                marginTop="2rem"
                            >
                                {allHoods?.length &&
                                isUserInputInhoodsLocations(selectedHood) ? (
                                    <StyledFlexWrapper
                                        flexDirection="column"
                                        width="50%"
                                        gap="0"
                                    >
                                        {renderAllHoods()}
                                    </StyledFlexWrapper>
                                ) : (
                                    <StyledFlexWrapper
                                        flexDirection="column"
                                        width="50%"
                                        gap="0"
                                    >
                                        No Hoods Yet
                                    </StyledFlexWrapper>
                                )}

                                <JoinHoodBox
                                    isShown={
                                        selectedHood?.location !== undefined &&
                                        isUserInputInhoodsLocations(
                                            selectedHood
                                        )
                                    }
                                    hood={selectedHood!}
                                ></JoinHoodBox>
                            </StyledFlexWrapper>
                        </>
                    ))}
            </StyledFlexWrapper>
        </StyledMainArea>
    );
};

export default HoodPage;
