import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from 'redux';
import { render, fireEvent } from "@testing-library/react";
import reducers from '../reducers/index';
import { initialState } from '../index';
import App from '../routes/App';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(reducers, reduxState || initialState, composeWithDevTools(applyMiddleware(thunk)));
    return render(<Provider store={store}>{ui}</Provider>);
}
beforeAll(() => {
    global.fetch = jest.fn()
    global.fetch.mockImplementation(
        () =>
            new Promise(resolve => {
                resolve({
                    json: () => new Promise(resolve => resolve([]))
                })
            })
    )
})

test("header not logged in", () => {

    const { getByText, getAllByText } = renderWithProviders(<App />, initialState);
    fireEvent.click(getByText("Get Started"));
    getAllByText('0 items')
    expect(fetch).toHaveBeenCalledWith(
        "/api/v1/counter", { "method": "get" }
    );
});