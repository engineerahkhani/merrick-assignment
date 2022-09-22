import MainTemplate from '@core/components/templates/MainLayout';
import ErrorBoundary from '@core/components/atoms/ErrorBoundary';
import SettingPage from './screens/SettingPage';

const App = () => {
  return (
    <ErrorBoundary>
      <MainTemplate>
        <SettingPage />
      </MainTemplate>
    </ErrorBoundary>
  );
};

export default App;
