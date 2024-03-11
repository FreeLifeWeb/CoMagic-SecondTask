import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NotFound } from '../NotFound/NotFound';
import { routes } from '../../Router/routes';

export const AppRouter = () => {
    return (
        <Routes>
            {routes?.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.element />}
                    exact={route.exact}
                />
            ))}
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
