import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../../Pages/Layout";
import PageLoader from "../PageLoader/PageLoader";
import CustomErrorBoundary from "../CustomErrorBoundary/CustomErrorBoundary";

const Home = lazy(() => import('../../Pages/Home'));
const CoinDetailsPage = lazy(() => import('../../Pages/CoinDetails'));

function Routing() {

    return (
        <CustomErrorBoundary>
            <Routes>
                <Route path="/" element={<MainLayout />} >

                    <Route index element={
                        <Suspense fallback={<PageLoader />}>
                            <Home />
                        </Suspense>
                    } />
                    <Route path="/details/:coinId" element={
                        
                        <Suspense fallback={<PageLoader />}>
                            <CoinDetailsPage />
                        </Suspense>
                    
                    } />

                </Route>
            
            </Routes>
        </CustomErrorBoundary>
        
    )
}

export default Routing;