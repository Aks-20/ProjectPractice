import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../Pages/Layout.jsx";
import MyLoader from "../PageLoader/PageLoader.jsx"; // Correct import for loader component
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary.jsx";

const Home = lazy(() => import('../../Pages/Home'));
const CoinDetailsPage = lazy(() => import('../../Pages/CoinDetails'));

function Routing() {
    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={
                        <Suspense fallback={<MyLoader />}> {/* Use MyLoader instead of PageLoader */}
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/details/:coinId" element={
                        <Suspense fallback={<MyLoader />}> {/* Use MyLoader instead of PageLoader */}
                            <CoinDetailsPage />
                        </Suspense>
                    } />
                </Route>
            </Routes>
        </CustomErrorBoundary>
    );
}

export default Routing;
