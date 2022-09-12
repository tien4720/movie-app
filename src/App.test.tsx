import React from 'react';
import App from './App';
import { Provider } from "react-redux";
import { render, screen } from '@testing-library/react';
import configureStore from './store/configureStore';
const store = configureStore();

test('Testcase 1', () => {
    render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>
    );
});
