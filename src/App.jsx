import { AuthContextProvider } from './context/AuthContextProvider';
import { AppRouter } from './routing/AppRouter';

function App() {
    return (
        <AuthContextProvider>
            <AppRouter />
        </AuthContextProvider>
    )
}

export default App;
