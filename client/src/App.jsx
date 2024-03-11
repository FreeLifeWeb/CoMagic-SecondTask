import React from 'react';

import { AppRouter } from './components/AppRouter/AppRouter';
import { Layout } from 'antd';
import { Navigation } from './components/Menu/Menu';

function App() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navigation />
            <AppRouter />
        </Layout>
    );
}

export default App;
