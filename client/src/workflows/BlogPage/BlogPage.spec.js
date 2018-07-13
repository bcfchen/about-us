import React from "react";
import { shallow } from "enzyme";
import { BlogPage } from "./BlogPage";
import toast from "toastr";
jest.mock("toastr");

describe("BlogPage", () => {
    // setup mock properties
    let defaultProps = {
        blogActions: { searchPostByText: () => Promise.resolve() },
        posts: [],
        prevButtonActive: true,
        nextButtonActive: true,
        searchText: ""
    },
        shallowComponent = null;

    let shallowRender = (props = defaultProps) => { shallowComponent = shallow(<BlogPage {...props} />); };

    describe("on load", () => {
        it("should render correctly", () => {
            shallowRender();
            expect(shallowComponent).toMatchSnapshot();
        });

        describe("loading initial blogs", () => {
            it("should call searchPostByText to fetch data", () => {
                // given
                let mockBlogActions = {
                    searchPostByText: jest.fn(() => Promise.resolve())
                };
                let overrideProps = {
                    ...defaultProps,
                    blogActions: mockBlogActions
                };
                // when
                shallowRender(overrideProps);
                // then
                expect(mockBlogActions.searchPostByText).toHaveBeenCalled();
            });

            describe("on error fetching blog data", () => {
                it("should call toast error", () => {
                    // given
                    let overrideProps = { ...defaultProps };
                    overrideProps.blogActions.searchPostByText = jest.fn(() => Promise.reject("bad"));
                    toast.error = jest.fn();
                    shallowRender(overrideProps);

                    // when
                    expect(toast.error).toHaveBeenCalled();
                })
            });
        });
    });

    // describe("on location selected", () => {
    //     describe("if valid location is provided", () => {
    //         it("actions should be called to reload weather data", () => {
    //             // given
    //             let mockWeatherActions = {
    //                 loadFiveDayForecasts: jest.fn(),
    //                 loadHourlyForecasts: jest.fn(),
    //                 loadCurrentLocationHourlyForecasts: jest.fn()
    //             };
    //             let overrideProps = { ...defaultProps };
    //             overrideProps.weatherActions = mockWeatherActions;
    //             overrideProps.locationActions.updateCurrentLocation = jest.fn();

    //             // when
    //             shallowRender(overrideProps);
    //             shallowComponent.find("WithStyles(LocationSearch)")
    //                 .prop("onLocationSelected")({ value: "locationVal" });

    //             // then
    //             expect(mockWeatherActions.loadFiveDayForecasts).toHaveBeenCalled();
    //             expect(mockWeatherActions.loadCurrentLocationHourlyForecasts).toHaveBeenCalled();
    //         })

    //         it("should call toast error if unsuccessful", () => {
    //             // given
    //             let overrideProps = { ...defaultProps };
    //             overrideProps.locationActions.updateCurrentLocation = jest.fn(() => Promise.reject("bad"));
    //             toast.error = jest.fn();
    //             shallowRender(overrideProps);

    //             // when
    //             shallowComponent.find("WithStyles(LocationSearch)")
    //                 .prop("onLocationSelected")({ value: "locationVal" }).then(() => {
    //                     // then
    //                     expect(toast.error).toHaveBeenCalled();
    //                 });
    //         })
    //     });

    //     describe("if valid location is not provided", () => {
    //         it("actions should not be called to reload weather data", () => {
    //             // given
    //             let mockWeatherActions = {
    //                 loadFiveDayForecasts: jest.fn(),
    //                 loadHourlyForecasts: jest.fn(),
    //                 loadCurrentLocationHourlyForecasts: jest.fn()
    //             };
    //             let overrideProps = { ...defaultProps };
    //             overrideProps.weatherActions = mockWeatherActions;
    //             overrideProps.locationActions.updateCurrentLocation = jest.fn();
    //             shallowRender(overrideProps);

    //             // when
    //             shallowComponent.find("WithStyles(LocationSearch)")
    //                 .prop("onLocationSelected")(undefined);

    //             // then 
    //             expect(mockWeatherActions.loadFiveDayForecasts).toHaveBeenCalledTimes(1); // once called by constructor
    //             expect(mockWeatherActions.loadHourlyForecasts).toHaveBeenCalledTimes(0);
    //         })
    //     });
    // });

}); 