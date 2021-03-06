import { useJsApiLoader, Autocomplete } from "@react-google-maps/api";
import { ReactNode, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import HoodCard from "../../components/hoodCard/HoodCard";
import JoinHoodModal from "../../components/joinHoodModal/JoinHoodModal";
import { StyledFlexWrapper } from "../../components/layouts/StyledFlexWrapper";
import { StyledMainWrapper } from "../../components/layouts/StyledMainWrapper";
import HouseSpinner from "../../components/spinner/HouseSpinner";
import { useHood } from "../../context/hoodContext/Hood.context";
import { Hood } from "../../context/hoodContext/Hood.type";
import CreateHood from "./CreateHood";
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
    const { fetchHoods, allHoods, myHood, joinHood } = useHood();
    const [inputValue, setInputValue] = useState<string | undefined>("");
    const [currAutoComplete, setCurrAutoComplete] =
        useState<google.maps.places.Autocomplete>();
    const [isLoading, setIsLoading] = useState(false);

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
        setSelectedHood({
            availableProducts: [],
            location: currAutoComplete!.getPlace().formatted_address as string,
            people: [],
            _id: "",
        });
    };

    const onHoodClicked = (currHood: Hood) => {
        setSelectedHood(currHood);
    };

    const renderAllHoods = (): ReactNode => {
        return allHoods?.filter(isUserInputInHoodLocations).map(renderHoodCard);
    };

    const isUserInputInHoodLocations = (hood?: Hood): boolean => {
        if (!inputValue) return true;
        if (inputValue === hood?.location) {
            return true;
        }
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

    const onJoinHoodClicked = async () => {
        setIsLoading(true);

        try {
            selectedHood && (await joinHood!(selectedHood));
        } catch (err) {
            console.error(err);
        }

        setIsLoading(false);
    };

    useEffect(() => {
        fetchHoods!();
    }, []);

    return (
        <>
            {selectedHood && (
                <JoinHoodModal
                    isHoodClicked={
                        selectedHood?.location !== undefined &&
                        isUserInputInHoodLocations(selectedHood)
                    }
                    closeModal={() => {
                        setSelectedHood(undefined);
                    }}
                    hood={selectedHood!}
                ></JoinHoodModal>
            )}

            <StyledMainWrapper height="100%">
                <StyledFlexWrapper
                    flexDirection="column"
                    justifyContent="flex-start"
                >
                    {isLoaded &&
                        (myHood ? (
                            <Redirect to="/my-hood" push={true} />
                        ) : isLoading ? (
                            <HouseSpinner isShown={isLoading} />
                        ) : (
                            <>
                                <Autocomplete
                                    onPlaceChanged={handleSelectLocation}
                                    onLoad={(autocomplete) => {
                                        setCurrAutoComplete(autocomplete);
                                    }}
                                >
                                    <StyledFlexWrapper
                                        alignItems="flex-start"
                                        width="100%"
                                        paddingRight="2rem"
                                        paddingLeft="2rem"
                                        justifyContent="space-evenly"
                                    >
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
                                    width="80%"
                                    height="100%"
                                >
                                    {allHoods?.some(
                                        isUserInputInHoodLocations
                                    ) ? (
                                        <StyledFlexWrapper
                                            flexDirection="column"
                                            width="50%"
                                            gap="0"
                                            height="60vh"
                                            overflowY="scroll"
                                            widthMobileL="95%"
                                            justifyContent="flex-start"
                                        >
                                            {renderAllHoods()}
                                        </StyledFlexWrapper>
                                    ) : (
                                        <StyledFlexWrapper
                                            flexDirection="column"
                                            width="50%"
                                            gap="0"
                                            height="60vh"
                                            widthMobileL="90%"
                                        >
                                            <CreateHood></CreateHood>
                                        </StyledFlexWrapper>
                                    )}

                                    <JoinHoodBox
                                        isShown={
                                            selectedHood?.location !==
                                                undefined &&
                                            isUserInputInHoodLocations(
                                                selectedHood
                                            )
                                        }
                                        hood={selectedHood!}
                                        onJoinHoodClicked={onJoinHoodClicked}
                                    ></JoinHoodBox>
                                </StyledFlexWrapper>
                            </>
                        ))}
                </StyledFlexWrapper>
            </StyledMainWrapper>
        </>
    );
};

export default HoodPage;
