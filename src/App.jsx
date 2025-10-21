import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import UserTypeSelection from './components/UserTypeSelection.jsx';
import SignUp from './components/SignUp.jsx';
import Login from './components/Login.jsx';
import HomeScreen from './components/HomeScreen.jsx';
import GoalSelection from './components/GoalSelection.jsx';
import IPSubmissionStep1 from './components/IPSubmissionStep1.jsx';
import IPSubmissionStep2 from './components/IPSubmissionStep2.jsx';
import IPSubmissionStep3 from './components/IPSubmissionStep3.jsx';
import AIEvaluation from './components/AIEvaluation.jsx';
import AnalysisComplete from './components/AnalysisComplete.jsx';
import ExpertConsultation from './components/ExpertConsultation.jsx';
import PaymentOptions from './components/PaymentOptions.jsx';
import ScheduleConsultation from './components/ScheduleConsultation.jsx';
import PaymentSuccess from './components/PaymentSuccess.jsx';
import LegalReviewStatus from './components/LegalReviewStatus.jsx';
import IPStatusDetail from './components/IPStatusDetail.jsx';
import SellProduct from './components/SellProduct.jsx';
import ContactIPExperts from './components/ContactIPExperts.jsx';
import AnimatedWave from './components/AnimatedWave.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { IPProvider } from './context/IPContext.jsx';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const excludedPaths = ['/signup', '/login', '/ai-evaluation', '/payment'];
  const showWave = !excludedPaths.includes(location.pathname);

  return (
    <div className="App min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {showWave && (
        <AnimatedWave className="absolute bottom-0 left-0 w-full z-0" />
      )}
      <main className="relative z-10">
        {children}
      </main>
    </div>
  );
};

function App() {
  return (
    <UserProvider>
      <IPProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<UserTypeSelection />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<HomeScreen />} />
              <Route path="/goal-selection" element={<GoalSelection />} />
              <Route path="/ip-submission/step1" element={<IPSubmissionStep1 />} />
              <Route path="/ip-submission/step2" element={<IPSubmissionStep2 />} />
              <Route path="/ip-submission/step3" element={<IPSubmissionStep3 />} />
              <Route path="/ai-evaluation" element={<AIEvaluation />} />
              <Route path="/analysis-complete" element={<AnalysisComplete />} />
              <Route path="/expert-consultation" element={<ExpertConsultation />} />
              <Route path="/payment" element={<PaymentOptions />} />
              <Route path="/payment-success" element={<PaymentSuccess />} />
              <Route path="/legal-review-status" element={<LegalReviewStatus />} />
              <Route path="/legal-review-status/:ipId" element={<IPStatusDetail />} />
              <Route path="/sell-product" element={<SellProduct />} />
              <Route path="/contact-ip-experts/:ipId" element={<ContactIPExperts />} />
              <Route path="/schedule-consultation" element={<ScheduleConsultation />} />
            </Routes>
          </Layout>
        </Router>
      </IPProvider>
    </UserProvider>
  );
}

export default App;
